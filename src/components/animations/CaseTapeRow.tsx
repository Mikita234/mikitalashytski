"use client";

import { useTranslations } from "next-intl";
import { caseTapes, type CaseTapeSlug } from "@/content/case-tapes";
import { VhsCassette } from "./VhsCassette";

type Props = {
  selectedSlug: CaseTapeSlug;
  onSelect: (slug: CaseTapeSlug) => void;
};

export function CaseTapeRow({ selectedSlug, onSelect }: Props) {
  const t = useTranslations("home.workstation");

  return (
    <div className="w-full">
      <p className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--vhs-muted)]">
        {t("archiveLabel")}
      </p>
      <div className="vhs-tape-row -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 snap-x snap-mandatory sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0">
        {caseTapes.map((tape) => (
          <VhsCassette
            key={tape.slug}
            tape={tape}
            isSelected={selectedSlug === tape.slug}
            onSelect={() => onSelect(tape.slug)}
          />
        ))}
      </div>
    </div>
  );
}
