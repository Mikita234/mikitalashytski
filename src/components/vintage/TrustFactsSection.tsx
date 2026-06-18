"use client";

import { useTranslations } from "next-intl";
import { VintageSectionHeader } from "./VintagePage";

export function TrustFactsSection() {
  const t = useTranslations("home.trust");
  const facts = t.raw("facts") as string[];

  return (
    <section className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 section-spacing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <VintageSectionHeader tag={t("tag")} title={t("title")} />
        <ul className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <li
              key={fact}
              className="flex gap-3 border border-[var(--doom-red)]/30 bg-[#121216] p-4 type-body text-sm"
            >
              <span className="font-[family-name:var(--font-doom)] text-[var(--doom-ammo)]" aria-hidden>
                ▶
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
