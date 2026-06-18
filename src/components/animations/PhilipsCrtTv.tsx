"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  retroCommercials,
  type RetroCommercial,
} from "@/content/retro-commercials";
import { site } from "@/content/site";
import { screenshotUrl } from "@/content/project-visuals";
import { ScanlineOverlay } from "@/components/vintage/ScanlineOverlay";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { trackEvent } from "@/lib/analytics";
import { getLocalizedPrice } from "@/lib/pricing";
import { useTvChannel } from "./tv-channel-context";

type ResolvedAd = {
  headline: string;
  subline: string;
  cta: string;
  price?: string;
};

function useResolvedAd(ad: RetroCommercial): ResolvedAd {
  const locale = useLocale();
  const t = useTranslations("home.tv.commercials");

  return useMemo(() => {
    const sublineValues =
      ad.id === "telegram-cta" ? { telegram: site.telegramHandle } : undefined;

    let price: string | undefined;
    if (ad.priceFromPln) {
      price = t("priceFrom", {
        price: getLocalizedPrice(ad.priceFromPln, locale),
      });
    } else if (ad.priceOnlyPln) {
      price = t("priceOnly", {
        price: getLocalizedPrice(ad.priceOnlyPln, locale),
      });
    } else if (ad.priceBadge) {
      price = t(`badges.${ad.priceBadge}`);
    }

    return {
      headline: t(`${ad.id}.headline`),
      subline: t(`${ad.id}.subline`, sublineValues),
      cta: t(`${ad.id}.cta`),
      price,
    };
  }, [ad, locale, t]);
}

function RetroAdSitePreview({
  ad,
  reduced,
}: {
  ad: RetroCommercial;
  reduced: boolean;
}) {
  const t = useTranslations("home.tv");
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const label = ad.sitePreviewLabel ?? ad.sitePreviewUrl ?? "";

  if (!ad.sitePreviewUrl) return null;

  const preview = (
    <div className="retro-ad__preview-screen">
      {!failed && (
        <Image
          src={screenshotUrl(ad.sitePreviewUrl, 400)}
          alt={`Preview of ${label}`}
          width={200}
          height={125}
          className={`retro-ad__preview-img ${loaded ? "retro-ad__preview-img--loaded" : ""}`}
          loading="lazy"
          unoptimized
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      {(!loaded || failed) && (
        <div className="retro-ad__preview-placeholder">
          <span className="retro-ad__preview-domain">{label}</span>
          <span className="retro-ad__preview-status">
            {failed ? t("previewUnavailable") : t("previewLoading")}
          </span>
        </div>
      )}
      <div className="retro-ad__preview-scanlines" aria-hidden />
    </div>
  );

  if (ad.showBrowserChrome) {
    return (
      <div
        className={`retro-ad__preview retro-ad__preview--chrome ${reduced ? "retro-ad__preview--static" : ""}`}
      >
        <div className="retro-ad__browser-bar">
          <div className="retro-ad__browser-dots" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="retro-ad__browser-url">{label}</div>
          <span className="retro-ad__browser-live rec-blink">● LIVE</span>
        </div>
        {preview}
      </div>
    );
  }

  return (
    <div
      className={`retro-ad__preview retro-ad__preview--frame ${reduced ? "retro-ad__preview--static" : ""}`}
    >
      <div className="retro-ad__tv-frame-label" aria-hidden>ON AIR</div>
      {preview}
    </div>
  );
}

function RetroAdSlide({
  ad,
  copy,
  reduced,
  glitch,
}: {
  ad: RetroCommercial;
  copy: ResolvedAd;
  reduced: boolean;
  glitch: boolean;
}) {
  const hasPreview = Boolean(ad.sitePreviewUrl);
  const longCopy = copy.headline.length > 28 || copy.subline.length > 55;

  return (
    <>
      <div className={`retro-ad__layout ${hasPreview ? "retro-ad__layout--split" : ""}`}>
        <div className="retro-ad__copy">
          {copy.price && (
            <p className="retro-ad__price" aria-hidden>
              {copy.price}
            </p>
          )}

          <h3
            className={`retro-ad__headline ${reduced ? "" : "retro-ad__headline--animate"}${longCopy ? " retro-ad__headline--compact" : ""}`}
          >
            {copy.headline}
          </h3>

          <p
            className={`retro-ad__subline ${reduced ? "" : "retro-ad__subline--animate"}${longCopy ? " retro-ad__subline--compact" : ""}`}
          >
            {copy.subline}
          </p>

          <Link
            href={ad.ctaHref}
            className="retro-ad__cta"
            onClick={() =>
              trackEvent("CTA Click", { location: "hero-tv", type: ad.id })
            }
          >
            ☎ {copy.cta}
          </Link>
        </div>

        {hasPreview && <RetroAdSitePreview ad={ad} reduced={reduced} />}
      </div>

      {glitch && !reduced && (
        <div className="retro-ad__vhs-glitch" aria-hidden />
      )}

      <div className={`retro-ad__starburst ${reduced ? "retro-ad__starburst--static" : ""}`} aria-hidden />
      {!reduced && (
        <>
          <div className="retro-ad__sparkle retro-ad__sparkle--1" aria-hidden />
          <div className="retro-ad__sparkle retro-ad__sparkle--2" aria-hidden />
        </>
      )}
    </>
  );
}

export function PhilipsCrtTv() {
  const t = useTranslations("home.tv");
  const reduced = useReducedMotion();
  const { index, setIndex } = useTvChannel();
  const [paused, setPaused] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ad = retroCommercials[index];
  const copy = useResolvedAd(ad);
  const channel = String(index + 1).padStart(2, "0");

  const goTo = useCallback(
    (next: number) => {
      setGlitch(true);
      setIndex((next + retroCommercials.length) % retroCommercials.length);
      window.setTimeout(() => setGlitch(false), 350);
    },
    [setIndex],
  );

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
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
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
                    className={`retro-ad retro-ad--${ad.era} retro-ad--${ad.visualStyle}${
                      ad.sitePreviewUrl ? " retro-ad--with-preview" : ""
                    }`}
                    initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduced ? undefined : { opacity: 0, filter: "brightness(1.4)" }}
                    transition={{ duration: reduced ? 0 : 0.45 }}
                  >
                    <RetroAdSlide
                      ad={ad}
                      copy={copy}
                      reduced={reduced}
                      glitch={glitch}
                    />
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
