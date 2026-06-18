"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { caseTapes, type CaseTape, type CaseTapeSlug } from "@/content/case-tapes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  selectedSlug: CaseTapeSlug | null;
  insertingSlug: CaseTapeSlug | null;
  onSelect: (tape: CaseTape) => void;
};

function CassetteTape({
  tape,
  isSelected,
  isInserting,
  onSelect,
  reduced,
}: {
  tape: CaseTape;
  isSelected: boolean;
  isInserting: boolean;
  onSelect: () => void;
  reduced: boolean;
}) {
  const t = useTranslations("home.workstation");

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={`${tape.label} — ${t("playCase")}`}
      className={`vhs-cassette group relative shrink-0 snap-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--vhs-acid)] ${
        isSelected ? "vhs-cassette--selected" : ""
      }`}
      animate={
        isInserting && !reduced
          ? { y: -28, scale: 0.92, opacity: 0.6 }
          : { y: 0, scale: 1, opacity: 1 }
      }
      whileHover={reduced ? undefined : { y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="vhs-cassette__body" aria-hidden>
        <div className="vhs-cassette__window">
          <div
            className={`vhs-cassette__reel vhs-cassette__reel--left ${reduced ? "" : "group-hover:vhs-cassette__reel--spin"}`}
          />
          <div
            className={`vhs-cassette__reel vhs-cassette__reel--right ${reduced ? "" : "group-hover:vhs-cassette__reel--spin"}`}
          />
          <div className="vhs-cassette__tape-band" />
        </div>

        <div className="vhs-cassette__label">
          <span className="vhs-cassette__label-text">{tape.shortLabel}</span>
        </div>

        <div className="vhs-cassette__scratch" aria-hidden />
        <div className="vhs-cassette__dust" aria-hidden />
      </div>

      <span className="vhs-cassette__play-hint font-mono text-[7px] uppercase tracking-widest text-[var(--vhs-acid)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {t("playCase")}
      </span>

      <div className="mt-1.5 flex flex-wrap justify-center gap-1 px-1">
        {tape.stack.slice(0, 3).map((chip) => (
          <span
            key={chip}
            className="vhs-cassette__chip border border-white/10 px-1 py-0.5 font-mono text-[6px] uppercase text-[var(--vhs-muted)] transition-colors group-hover:border-[var(--vhs-terminal)]/50 group-hover:text-[var(--vhs-terminal)]"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export function CaseTapeArchive({ selectedSlug, insertingSlug, onSelect }: Props) {
  const t = useTranslations("home.workstation");

  return (
    <div className="w-full">
      <p className="mb-2 text-center font-mono text-[8px] uppercase tracking-[0.25em] text-[var(--vhs-muted)]">
        {t("archiveLabel")}
      </p>
      <div className="vhs-tape-row -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {caseTapes.map((tape) => (
          <CassetteReducedMotionWrapper
            key={tape.slug}
            tape={tape}
            isSelected={selectedSlug === tape.slug}
            isInserting={insertingSlug === tape.slug}
            onSelect={() => onSelect(tape)}
          />
        ))}
      </div>
    </div>
  );
}

function CassetteReducedMotionWrapper(props: {
  tape: CaseTape;
  isSelected: boolean;
  isInserting: boolean;
  onSelect: () => void;
}) {
  const reduced = useReducedMotion();
  return <CassetteTape {...props} reduced={reduced} />;
}
