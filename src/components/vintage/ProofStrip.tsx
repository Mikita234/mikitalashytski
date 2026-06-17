"use client";

import { useTranslations } from "next-intl";

type ProofItem = { label: string; value: string };

export function ProofStrip() {
  const t = useTranslations("home.proof");
  const items = t.raw("items") as ProofItem[];

  return (
    <section className="border-t border-white/10 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-yellow)]">
          ● {t("tag")}
        </p>
        <h2 className="mt-2 font-display text-2xl uppercase text-[var(--vhs-white)] sm:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="border-2 border-[var(--doom-red)]/30 bg-[var(--doom-panel)] p-4"
            >
              <p className="font-[family-name:var(--font-doom)] text-[9px] uppercase text-[var(--doom-red)]">
                {item.label}
              </p>
              <p className="mt-2 font-mono text-sm text-[var(--doom-health)] sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
