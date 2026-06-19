"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RetroPhoneHandset } from "@/components/vintage/RetroPhoneHandset";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { PhoneCallOverlay } from "./PhoneCallOverlay";

type Origin = { x: number; y: number; scale: number };

type PhoneButtonProps = {
  buttonRef: RefObject<HTMLButtonElement | null>;
  variant: "inline" | "sticky";
  open: boolean;
  onOpen: () => void;
  showDismiss?: boolean;
  onDismiss?: () => void;
  layoutId?: string;
};

function PhoneButton({
  buttonRef,
  variant,
  open,
  onOpen,
  showDismiss,
  onDismiss,
  layoutId,
}: PhoneButtonProps) {
  const t = useTranslations("home.hero.phone");
  const reduced = useReducedMotion();

  const className = [
    "retro-phone-handset--hero-interactive",
    variant === "sticky" ? "retro-phone-handset--sticky-fab" : "",
    reduced ? "retro-phone-handset--hero-interactive--static" : "",
    variant === "sticky" && reduced ? "retro-phone-handset--sticky-fab--static" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const button = (
    <motion.button
      ref={buttonRef}
      type="button"
      layoutId={reduced ? undefined : layoutId}
      className={className}
      aria-label={t("ariaLabel")}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={onOpen}
      transition={
        reduced
          ? { duration: 0 }
          : { type: "spring", stiffness: 380, damping: 32, mass: 0.85 }
      }
    >
      <RetroPhoneHandset decorative={false} />
      <span className="sr-only">{t("hint")}</span>
    </motion.button>
  );

  if (variant === "sticky" && showDismiss) {
    return (
      <div className="retro-phone-handset-sticky-wrap">
        {button}
        <button
          type="button"
          className="retro-phone-handset-sticky-wrap__dismiss"
          aria-label={t("dismiss")}
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
        >
          ✕
        </button>
      </div>
    );
  }

  return button;
}

export function StickyRetroPhone() {
  const reduced = useReducedMotion();
  const inlineRef = useRef<HTMLButtonElement>(null);
  const stickyRef = useRef<HTMLButtonElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<Origin | undefined>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const openOverlay = useCallback(() => {
    const ref = heroVisible ? inlineRef : stickyRef;
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        scale: rect.width / 200,
      });
    }
    setOpen(true);
  }, [heroVisible]);

  const showInline = heroVisible;
  const showSticky = !heroVisible && !dismissed && !open;
  const layoutId = reduced ? undefined : "hero-retro-phone";

  return (
    <>
      {showInline && (
        <PhoneButton
          buttonRef={inlineRef}
          variant="inline"
          open={open}
          onOpen={openOverlay}
          layoutId={layoutId}
        />
      )}

      {mounted &&
        showSticky &&
        createPortal(
          <PhoneButton
            buttonRef={stickyRef}
            variant="sticky"
            open={open}
            onOpen={openOverlay}
            showDismiss
            onDismiss={() => setDismissed(true)}
            layoutId={layoutId}
          />,
          document.body,
        )}

      <PhoneCallOverlay open={open} onClose={() => setOpen(false)} origin={origin} />
    </>
  );
}
