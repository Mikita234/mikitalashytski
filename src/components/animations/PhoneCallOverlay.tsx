"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { RetroPhoneHandset } from "@/components/vintage/RetroPhoneHandset";
import { trackEvent } from "@/lib/analytics";

type PhoneCallOverlayProps = {
  open: boolean;
  onClose: () => void;
  origin?: { x: number; y: number; scale: number };
};

export function PhoneCallOverlay({ open, onClose, origin }: PhoneCallOverlayProps) {
  const reduced = useReducedMotion();
  const t = useTranslations("home.hero.phone");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("phone-call-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("phone-call-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    panelRef.current.focus();
  }, [open]);

  if (typeof document === "undefined") return null;

  const fromX = origin?.x ?? window.innerWidth * 0.22;
  const fromY = origin?.y ?? window.innerHeight * 0.55;
  const fromScale = origin?.scale ?? 0.35;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="phone-call-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-call-overlay-title"
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
        >
          <button
            type="button"
            className="phone-call-overlay__backdrop"
            aria-label={t("close")}
            onClick={onClose}
          />

          <div className="phone-call-overlay__stage">
            <motion.div
              className="phone-call-overlay__phone-wrap"
              initial={
                reduced
                  ? false
                  : {
                      x: fromX - window.innerWidth * 0.28,
                      y: fromY - window.innerHeight * 0.42,
                      scale: fromScale,
                      opacity: 0.85,
                    }
              }
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={
                reduced
                  ? { opacity: 0 }
                  : {
                      x: fromX - window.innerWidth * 0.28,
                      y: fromY - window.innerHeight * 0.42,
                      scale: fromScale * 0.9,
                      opacity: 0,
                    }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 24, mass: 0.9 }
              }
            >
              <RetroPhoneHandset className="retro-phone-handset--overlay" />
              <span className="phone-call-overlay__ring-badge rec-blink" aria-hidden>
                {t("ringing")}
              </span>
            </motion.div>

            <motion.div
              ref={panelRef}
              tabIndex={-1}
              className="phone-call-overlay__panel"
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, x: 16 }}
              transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.12 }}
            >
              <button
                type="button"
                className="phone-call-overlay__close"
                onClick={onClose}
                aria-label={t("close")}
              >
                ✕
              </button>

              <p className="phone-call-overlay__tag rec-blink" aria-hidden>
                ● {t("live")}
              </p>
              <h2 id="phone-call-overlay-title" className="phone-call-overlay__title">
                {t("title")}
              </h2>
              <p className="phone-call-overlay__subtitle">{t("subtitle")}</p>

              <div className="phone-call-overlay__actions">
                <a
                  href={site.telegram}
                  className="phone-call-overlay__btn phone-call-overlay__btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("CTA Click", { location: "hero-phone", type: "telegram" });
                    onClose();
                  }}
                >
                  <span aria-hidden>📱</span> {t("ctaTelegram")} {site.telegramHandle}
                </a>
                <a
                  href={site.telegram}
                  className="phone-call-overlay__btn phone-call-overlay__btn--call"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("CTA Click", { location: "hero-phone", type: "call" });
                    onClose();
                  }}
                >
                  <span aria-hidden>☎</span> {t("ctaCall")}
                </a>
                <Link
                  href="/order"
                  className="phone-call-overlay__btn phone-call-overlay__btn--order"
                  onClick={() => {
                    trackEvent("CTA Click", { location: "hero-phone", type: "order" });
                    onClose();
                  }}
                >
                  {t("ctaOrder")}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
