"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Guide } from "@/content/guides";
import { guideLabels } from "@/content/guides";
import { VhsCassette3D } from "@/components/animations/VhsCassette3D";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const NUDGE_STORAGE_KEY = "vhs-tape-scroll-nudged";

type Props = {
  guides: Guide[];
  locale: Locale;
  readLabel: string;
};

export function GuideTapeArchive({ guides, locale, readLabel }: Props) {
  const reduced = useReducedMotion();
  const labels = guideLabels[locale];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const overflow = maxScroll > 8;
    setIsOverflowing(overflow);
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScroll - 8);

    const items = el.querySelectorAll<HTMLElement>(".vhs-tape-item");
    if (items.length === 0) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(center - itemCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, guides.length]);

  useEffect(() => {
    if (reduced || typeof window === "undefined") return;
    if (localStorage.getItem(NUDGE_STORAGE_KEY)) return;

    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth + 8) return;

    const startTimer = window.setTimeout(() => {
      el.scrollTo({ left: 56, behavior: "smooth" });
      window.setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
        localStorage.setItem(NUDGE_STORAGE_KEY, "1");
      }, 700);
    }, 900);

    return () => window.clearTimeout(startTimer);
  }, [reduced, guides.length]);

  const scrollBy = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;

    const item = el.querySelector<HTMLElement>(".vhs-tape-item");
    const step = item ? item.offsetWidth + 24 : 280;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="vhs-tape-archive">
      {isOverflowing && (
        <p className="vhs-tape-archive__hint" aria-hidden>
          {labels.scrollHint}
        </p>
      )}

      <div className="vhs-tape-archive__viewport">
        {canScrollLeft && (
          <>
            <div className="vhs-tape-archive__fade vhs-tape-archive__fade--left" aria-hidden />
            <button
              type="button"
              className="vhs-tape-archive__arrow vhs-tape-archive__arrow--left"
              aria-label={labels.scrollPrev}
              onClick={() => scrollBy(-1)}
            >
              ←
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="vhs-tape-row -mx-4 flex gap-6 overflow-x-auto px-6 pb-4 pt-2 snap-x snap-mandatory sm:mx-0 sm:px-2"
        >
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="vhs-tape-item group shrink-0 snap-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--vhs-acid)]"
              aria-label={`${guide.title[locale]} — ${readLabel}`}
            >
              <VhsCassette3D
                label={guide.channel}
                interactive
                showPlay
                className="vhs-c3d--link"
              />
              <p className="vhs-tape-item__title">{guide.title[locale]}</p>
              <p className="vhs-tape-item__code">{guide.tape}</p>
            </Link>
          ))}
        </div>

        {canScrollRight && (
          <>
            <div className="vhs-tape-archive__fade vhs-tape-archive__fade--right" aria-hidden />
            <button
              type="button"
              className="vhs-tape-archive__arrow vhs-tape-archive__arrow--right"
              aria-label={labels.scrollNext}
              onClick={() => scrollBy(1)}
            >
              →
            </button>
          </>
        )}
      </div>

      {isOverflowing && guides.length > 1 && (
        <div className="vhs-tape-archive__dots" aria-hidden>
          {guides.map((guide, index) => (
            <span
              key={guide.slug}
              className={index === activeIndex ? "vhs-tape-archive__dot is-active" : "vhs-tape-archive__dot"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
