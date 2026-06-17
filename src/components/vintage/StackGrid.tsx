"use client";

import { useTranslations } from "next-intl";
import { stackItems } from "@/content/selling";

export function StackGrid() {
  const t = useTranslations("home.stack");

  return (
    <section className="border-t border-white/10 bg-[#0c0c0e] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
          ● {t("tag")}
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
          {t("title")}
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <span
              key={item}
              className="border border-white/15 bg-[#141418] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--vhs-beige)] sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
