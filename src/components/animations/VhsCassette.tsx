"use client";

import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import { VhsCassette3D } from "./VhsCassette3D";

type Props = {
  tape: CaseTape;
  isSelected: boolean;
  isInserting: boolean;
  onSelect: () => void;
};

export function VhsCassette({ tape, isSelected, isInserting, onSelect }: Props) {
  const t = useTranslations("home.workstation");

  return (
    <div className="vhs-cassette shrink-0 snap-center">
      <VhsCassette3D
        as="button"
        label={tape.shortLabel}
        subtitle={tape.type.split("/")[0]?.trim()}
        selected={isSelected}
        inserting={isInserting}
        interactive
        onClick={onSelect}
        aria-label={`${tape.label} — ${t("playCase")}`}
        aria-pressed={isSelected}
      />
      <span className="vhs-cassette__play-hint">{t("playCase")}</span>
      <div className="vhs-cassette__chips" aria-hidden>
        {tape.stack.slice(0, 3).map((chip) => (
          <span key={chip} className="vhs-cassette__chip">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
