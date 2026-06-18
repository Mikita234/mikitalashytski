"use client";
import { useTranslations } from "next-intl";
import { caseTapes, type CaseTapeSlug } from "@/content/case-tapes";
import { VhsCassette } from "./VhsCassette";
type Props = { selectedSlug: CaseTapeSlug | null; insertingSlug: CaseTapeSlug | null; onSelect: (slug: CaseTapeSlug) => void };
export function CaseTapeRow({ selectedSlug, insertingSlug, onSelect }: Props) {
  const t = useTranslations("home.workstation");
  return (
    <div className="w-full">
      <p className="mb-2 text-center font-mono text-[8px] uppercase tracking-[0.25em] text-[var(--vhs-muted)]">{t("archiveLabel")}</p>
      <div className="vhs-tape-row -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {caseTapes.map((tape) => (
          <VhsCassette key={tape.slug} tape={tape} isSelected={selectedSlug === tape.slug} isInserting={insertingSlug === tape.slug} onSelect={() => onSelect(tape.slug)} />
        ))}
      </div>
    </div>
  );
}
