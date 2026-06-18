"use client";

import { useTranslations } from "next-intl";
import { stackItems } from "@/content/selling";
import { VintageSectionHeader } from "./VintagePage";

export function StackGrid() {
  const t = useTranslations("home.stack");

  return (
    <section className="border-t border-[var(--doom-stone)]/40 bg-[#0c0c0e] section-spacing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <VintageSectionHeader
          tag={t("tag")}
          title={t("title")}
          tagClassName="text-[var(--vhs-terminal)]"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <span
              key={item}
              className="border border-[var(--doom-stone)] bg-[#141418] px-3 py-1.5 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-wide text-[var(--doom-ammo)] sm:text-[9px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
