"use client";

import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  tape: CaseTape;
  isSelected: boolean;
  isInserting: boolean;
  onSelect: () => void;
};

export function VhsCassette({ tape, isSelected, isInserting, onSelect }: Props) {
  const t = useTranslations("home.workstation");
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const spinReels = !reduced;
  const liftOnHover = !coarse && !reduced;

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
        isInserting ? "vhs-cassette--inserting" : "",
        liftOnHover ? "vhs-cassette--lift" : "vhs-cassette--tap",
      ].join(" ")}
    >
      <div className="vhs-cassette__stage" aria-hidden>
        <div className="vhs-cassette__body">
          <div className="vhs-cassette__window">
            <div className={["vhs-cassette__spool vhs-cassette__spool--left", spinReels && (liftOnHover ? "group-hover:vhs-cassette__spool--spin" : ""), isSelected && spinReels ? "vhs-cassette__spool--spin" : ""].join(" ")} />
            <div className={["vhs-cassette__spool vhs-cassette__spool--right", spinReels && (liftOnHover ? "group-hover:vhs-cassette__spool--spin" : ""), isSelected && spinReels ? "vhs-cassette__spool--spin" : ""].join(" ")} />
            <div className="vhs-cassette__tape-band" />
          </div>
          <div className="vhs-cassette__label"><span className="vhs-cassette__label-text">{tape.shortLabel}</span></div>
          <div className="vhs-cassette__scratch" />
          <div className="vhs-cassette__dust" />
        </div>
      </div>
      <span className="vhs-cassette__play-hint">{t("playCase")}</span>
      <div className="vhs-cassette__chips" aria-hidden>
        {tape.stack.slice(0, 3).map((chip) => (<span key={chip} className="vhs-cassette__chip">{chip}</span>))}
      </div>
    </button>
  );
}
