"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const MAX_QUOTE = 500;
const IGNORE_SELECTORS =
  "input, textarea, select, button, nav, footer, [contenteditable='true'], [data-confusion-ignore]";

type SelectionState = {
  text: string;
  rect: DOMRect;
};

function getValidSelection(): SelectionState | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;

  const raw = sel.toString().trim();
  if (!raw) return null;

  const range = sel.getRangeAt(0);
  const node = range.commonAncestorContainer;
  const el =
    node.nodeType === Node.TEXT_NODE
      ? node.parentElement
      : (node as Element);

  if (!el) return null;

  const main = document.querySelector("main");
  if (!main?.contains(el)) return null;
  if (el.closest(IGNORE_SELECTORS)) return null;

  const rect = range.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return null;

  return { text: raw.slice(0, MAX_QUOTE), rect };
}

type FormState = "idle" | "submitting" | "success" | "error";

export function ConfusionTracker() {
  const t = useTranslations("feedback.confusion");
  const locale = useLocale();
  const reduced = useReducedMotion();
  const [selection, setSelection] = useState<SelectionState | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const pillRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    setModalOpen(false);
    setSelection(null);
    setComment("");
    setFormState("idle");
    window.getSelection()?.removeAllRanges();
  }, []);

  const openModal = useCallback(() => {
    if (!selection) return;
    setModalOpen(true);
    setFormState("idle");
  }, [selection]);

  const refreshSelection = useCallback(() => {
    if (modalOpen) return;
    const next = getValidSelection();
    setSelection(next);
    if (!next) setModalOpen(false);
  }, [modalOpen]);

  useEffect(() => {
    const onMouseUp = () => {
      requestAnimationFrame(refreshSelection);
    };
    const onSelectionChange = () => {
      if (modalOpen) return;
      requestAnimationFrame(refreshSelection);
    };

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("selectionchange", onSelectionChange);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("selectionchange", onSelectionChange);
    };
  }, [modalOpen, refreshSelection]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (modalOpen) {
          e.preventDefault();
          dismiss();
        } else if (selection) {
          setSelection(null);
          window.getSelection()?.removeAllRanges();
        }
        return;
      }

      if (e.key === "?" && selection && !modalOpen) {
        const target = e.target as Element | null;
        if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selection, modalOpen, dismiss, openModal]);

  useEffect(() => {
    if (!selection || modalOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (pillRef.current?.contains(target)) return;
      if (modalRef.current?.contains(target)) return;
      setSelection(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [selection, modalOpen]);

  useEffect(() => {
    if (!selection || modalOpen) return;

    const update = () => {
      const next = getValidSelection();
      if (next) setSelection(next);
      else setSelection(null);
    };

    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [selection, modalOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selection) return;

    setFormState("submitting");
    trackEvent("confusion_report", { locale, page: window.location.pathname });

    try {
      const res = await fetch("/api/confusion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quote: selection.text,
          pageUrl: window.location.href,
          locale,
          comment: comment.trim() || undefined,
          userAgent: navigator.userAgent,
        }),
      });

      if (res.ok) {
        setFormState("success");
        trackEvent("confusion_report_success", { locale });
        return;
      }
    } catch {
      // fall through
    }

    setFormState("error");
  }

  const inputCls =
    "w-full border-2 border-t-[#404040] border-l-[#404040] border-b-white border-r-white bg-white px-2 py-1.5 font-mono text-xs text-black outline-none placeholder:text-black/45 focus:ring-1 focus:ring-[#000080]";

  const pillVisible = selection && !modalOpen;
  const pillTop = selection
    ? Math.min(selection.rect.bottom + 8, window.innerHeight - 48)
    : 0;
  const pillLeft = selection
    ? Math.min(Math.max(selection.rect.left, 8), window.innerWidth - 160)
    : 0;

  return (
    <>
      <AnimatePresence>
        {pillVisible && (
          <motion.button
            ref={pillRef}
            type="button"
            onClick={openModal}
            title={t("shortcut")}
            initial={reduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 4 }}
            transition={reduced ? { duration: 0 } : { duration: 0.15 }}
            className="pointer-events-auto fixed z-50 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-2.5 py-1 font-mono text-[10px] font-bold text-black shadow-md hover:bg-[#d4d4d4]"
            style={{ top: pillTop, left: pillLeft }}
            aria-label={t("pill")}
          >
            {t("pill")}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && selection && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.15 }}
              aria-hidden
              onClick={dismiss}
            />
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="confusion-title"
              className="pointer-events-auto fixed left-1/2 top-1/2 z-[60] w-[min(calc(100vw-2rem),24rem)] -translate-x-1/2 -translate-y-1/2 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] shadow-xl"
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={reduced ? { duration: 0 } : { duration: 0.15 }}
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1">
                <span
                  id="confusion-title"
                  className="font-mono text-xs font-bold text-white"
                >
                  {t("title")}
                </span>
                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Close"
                  className="flex h-4 w-4 shrink-0 items-center justify-center border border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-[10px] font-bold text-black leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 p-3">
                {formState === "success" ? (
                  <p className="text-center font-mono text-xs font-bold text-black">
                    {t("success")}
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <blockquote className="border-l-2 border-[#000080] bg-white/60 px-2 py-1.5 font-mono text-[11px] leading-relaxed text-black">
                      &ldquo;{selection.text}&rdquo;
                    </blockquote>

                    <p className="font-mono text-[9px] text-black/60">
                      {t("privacy")}
                    </p>

                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      className={`${inputCls} resize-y`}
                      placeholder={t("placeholder")}
                      disabled={formState === "submitting"}
                    />

                    {formState === "error" && (
                      <p className="font-mono text-[10px] text-red-700">
                        {t("error")}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-3 py-1.5 font-mono text-xs font-bold text-black transition-transform hover:translate-x-0.5 active:translate-y-0.5 disabled:opacity-60"
                    >
                      {formState === "submitting" ? "…" : t("submit")}
                    </button>

                    <p className="text-center font-mono text-[9px] text-black/50">
                      {t("shortcut")}
                    </p>
                  </form>
                )}

                {formState === "success" && (
                  <button
                    type="button"
                    onClick={dismiss}
                    className="w-full border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-3 py-1.5 font-mono text-xs font-bold text-black"
                  >
                    OK
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
