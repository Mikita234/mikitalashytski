"use client";

import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  tape: CaseTape;
  isSelected: boolean;
  onSelect: () => void;
};

export function VhsCassette({ tape, isSelected, onSelect }: Props) {
  const t = useTranslations("home.workstation");
  const reduced = useReducedMotion();
  const spinReels = !reduced && isSelected;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={`${tape.label} — ${t("playCase")}`}
      className={[
        "vhs-cassette group relative shrink-0 snap-center",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--vhs-acid)]",
        isSelected ? "vhs-cassette--selected" : "",
      ].join(" ")}
    >
      <div className="vhs-cassette__stage" aria-hidden>
        <div className="vhs-cassette__body">
          <div className="vhs-cassette__highlight" />
          <div className="vhs-cassette__window">
            <div
              className={[
                "vhs-cassette__spool vhs-cassette__spool--left",
                spinReels ? "vhs-cassette__spool--spin" : "",
              ].join(" ")}
            >
              <div className="vhs-cassette__spool-hole" />
            </div>
            <div
              className={[
                "vhs-cassette__spool vhs-cassette__spool--right",
                spinReels ? "vhs-cassette__spool--spin" : "",
              ].join(" ")}
            >
              <div className="vhs-cassette__spool-hole" />
            </div>
            <div className="vhs-cassette__tape-band" />
          </div>

          <div className="vhs-cassette__label">
            <span className="vhs-cassette__label-text">{tape.shortLabel}</span>
          </div>

          <div className="vhs-cassette__spine" />
          <div className="vhs-cassette__scratch" />
        </div>
      </div>
    </button>
  );
}
