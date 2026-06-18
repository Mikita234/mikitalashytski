"use client";

import { useTranslations } from "next-intl";
import { VintageSectionHeader } from "./VintagePage";

type ProofItem = { label: string; value: string };

export function ProofStrip() {
  const t = useTranslations("home.proof");
  const items = t.raw("items") as ProofItem[];

  return (
    <section className="border-t border-[var(--doom-stone)]/40 section-spacing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <VintageSectionHeader
          tag={t("tag")}
          title={t("title")}
          tagClassName="text-[var(--doom-ammo)]"
        />
        <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="border-2 border-[var(--doom-red)]/40 bg-[var(--doom-panel)] p-4"
            >
              <p className="doom-metric text-[var(--doom-red)]">{item.label}</p>
              <p className="type-h3 mt-2 text-[var(--doom-ammo)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
