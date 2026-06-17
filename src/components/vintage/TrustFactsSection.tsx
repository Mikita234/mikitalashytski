"use client";

import { useTranslations } from "next-intl";

export function TrustFactsSection() {
  const t = useTranslations("home.trust");
  const facts = t.raw("facts") as string[];

  return (
    <section className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--doom-red)]">
          ● {t("tag")}
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
          {t("title")}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <li
              key={fact}
              className="flex gap-3 border border-[var(--doom-red)]/20 bg-[#121216] p-4 font-mono text-xs text-[var(--vhs-muted)] sm:text-sm"
            >
              <span className="text-[var(--doom-ammo)]" aria-hidden>
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
