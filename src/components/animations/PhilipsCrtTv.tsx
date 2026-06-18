"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { retroCommercials, type RetroCommercial } from "@/content/retro-commercials";
import { ScanlineOverlay } from "@/components/vintage/ScanlineOverlay";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { trackEvent } from "@/lib/analytics";

function RetroAdSlide({
  ad,
  reduced,
  glitch,
}: {
  ad: RetroCommercial;
  reduced: boolean;
  glitch: boolean;
}) {
  return (
    <>
      {ad.price && (
        <p className="retro-ad__price" aria-hidden>
          {ad.price}
        </p>
      )}

      <h3 className={`retro-ad__headline ${reduced ? "" : "retro-ad__headline--animate"}`}>
        {ad.headline}
      </h3>

      <p className={`retro-ad__subline ${reduced ? "" : "retro-ad__subline--animate"}`}>
        {ad.subline}
      </p>

      <Link
        href={ad.ctaHref}
        className="retro-ad__cta"
        onClick={() =>
          trackEvent("CTA Click", { location: "hero-tv", type: ad.id })
        }
      >
        ☎ {ad.cta}
      </Link>

      {glitch && !reduced && (
        <div className="retro-ad__vhs-glitch" aria-hidden />
      )}

      <div className="retro-ad__starburst" aria-hidden />
    </>
  );
}

export function PhilipsCrtTv() {
  const t = useTranslations("home.tv");
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ad = retroCommercials[index];
  const channel = String(index + 1).padStart(2, "0");

  const goTo = useCallback((next: number) => {
    setGlitch(true);
    setIndex((next + retroCommercials.length) % retroCommercials.length);
    window.setTimeout(() => setGlitch(false), 350);
  }, []);

  const channelUp = useCallback(() => goTo(index + 1), [goTo, index]);
  const channelDown = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduced || paused) return;

    timerRef.current = setTimeout(() => {
      goTo(index + 1);
    }, ad.duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [ad.duration, goTo, index, paused, reduced]);

  return (
    <div
      className="philips-tv mx-auto w-full max-w-md"
      aria-label={t("label")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="philips-tv__cabinet">
        <div className="philips-tv__bezel-highlight" aria-hidden />

        <div className="philips-tv__top-bar">
          <span className="philips-tv__brand">PHILIPS</span>
          <span className="philips-tv__model">COLOR TV</span>
        </div>

        <div className="philips-tv__screen-frame">
          <div className={`philips-tv__screen-bezel ${reduced ? "" : "crt-flicker"}`}>
            <div className="crt-screen-convex">
              <div className="crt-screen-convex__inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ad.id}
                    className={`retro-ad retro-ad--${ad.era} retro-ad--${ad.visualStyle}`}
                    initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduced ? undefined : { opacity: 0, filter: "brightness(1.4)" }}
                    transition={{ duration: reduced ? 0 : 0.45 }}
                  >
                    <RetroAdSlide ad={ad} reduced={reduced} glitch={glitch} />
                  </motion.div>
                </AnimatePresence>

                <ScanlineOverlay />

                <div className="crt-screen-convex__vignette" aria-hidden />
                <div className="crt-screen-convex__phosphor" aria-hidden />

                {!reduced && (
                  <div className="crt-screen-convex__tracking-line" aria-hidden />
                )}
              </div>
            </div>
          </div>

          <div className="philips-tv__indicator-row">
            <span className="philips-tv__on-air rec-blink">{t("onAir")}</span>
            <span className="philips-tv__channel">
              {t("channel")} {channel}
            </span>
          </div>
        </div>

        <div className="philips-tv__grille" aria-hidden>
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="philips-tv__controls">
          <div className="philips-tv__knobs" aria-hidden>
            <span className="philips-tv__knob philips-tv__knob--vol" title="Volume">
              <i />
            </span>
            <span className="philips-tv__knob philips-tv__knob--bright" title="Brightness">
              <i />
            </span>
          </div>

          <div className="philips-tv__buttons">
            <button
              type="button"
              className="philips-tv__btn"
              onClick={channelDown}
              aria-label={t("chDown")}
            >
              {t("chDown")}
            </button>
            <button
              type="button"
              className="philips-tv__btn philips-tv__btn--mute"
              aria-label={t("mute")}
              tabIndex={-1}
            >
              {t("mute")}
            </button>
            <button
              type="button"
              className="philips-tv__btn"
              onClick={channelUp}
              aria-label={t("chUp")}
            >
              {t("chUp")}
            </button>
          </div>

          <div className="philips-tv__power" aria-hidden>
            <span className="philips-tv__led philips-tv__led--on" />
            <span className="philips-tv__power-label">PWR</span>
          </div>
        </div>

        <div className="philips-tv__dust" aria-hidden />
        <div className="philips-tv__scratches" aria-hidden />
      </div>

      <div className="philips-tv__stand" aria-hidden />
    </div>
  );
}
