"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { RetroPhoneHandset } from "@/components/vintage/RetroPhoneHandset";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { PhoneCallOverlay } from "./PhoneCallOverlay";

type Origin = { x: number; y: number; scale: number };

export function HeroRetroPhone({ className = "" }: { className?: string }) {
  const t = useTranslations("home.hero.phone");
  const reduced = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<Origin | undefined>();

  const openOverlay = useCallback(() => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        scale: rect.width / 200,
      });
    }
    setOpen(true);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={`retro-phone-handset--hero-interactive ${reduced ? "retro-phone-handset--hero-interactive--static" : ""} ${className}`}
        aria-label={t("ariaLabel")}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openOverlay}
      >
        <RetroPhoneHandset decorative={false} />
        <span className="sr-only">{t("hint")}</span>
      </button>

      <PhoneCallOverlay open={open} onClose={() => setOpen(false)} origin={origin} />
    </>
  );
}
