"use client";

import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { VHSButton } from "./VHSButton";

export function ContactCTA() {
  const t = useTranslations("home.contact");
  const stickers = t.raw("stickers") as string[];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t-4 border-[var(--vhs-red)] section-glow-red"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1a0808] via-[#0a0a0a] to-[#0a1018]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-8 bottom-8 hidden opacity-10 lg:block"
        aria-hidden
      >
        <div className="rotate-[-12deg] border-4 border-[var(--vhs-beige)] bg-[#1a1a1e] p-6">
          <p className="font-display text-6xl text-[var(--vhs-red)]">☎</p>
          <p className="mt-2 font-mono text-xs text-[var(--vhs-yellow)]">CH-404</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {stickers.map((s) => (
            <span
              key={s}
              className={`border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest sm:text-xs ${
                s === "CALL NOW"
                  ? "border-[var(--vhs-red)] bg-[var(--vhs-red)] text-white rec-blink"
                  : "border-[var(--vhs-acid)] text-[var(--vhs-acid)]"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <h2 className="font-display text-3xl uppercase leading-tight text-[var(--vhs-white)] sm:text-4xl md:text-5xl">
          {t("headline")}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-[var(--vhs-beige)] sm:text-lg">
          {t("subline")}
        </p>

        <div className="mx-auto mt-6 inline-block rotate-[-2deg] border-2 border-[var(--vhs-yellow)] bg-[var(--vhs-yellow)] px-4 py-2 font-mono text-sm font-bold text-black shadow-[4px_4px_0_#000]">
          {t("startFrom")}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <VHSButton href="/order" variant="primary">
            {t("ctaOrder")}
          </VHSButton>
          <VHSButton href={site.telegram} variant="secondary" external>
            {t("ctaTelegram")}
          </VHSButton>
          <VHSButton href={`mailto:${site.email}`} variant="secondary" external>
            {t("ctaEmail")}
          </VHSButton>
        </div>

        <p className="mt-6 font-mono text-[9px] text-[var(--vhs-muted)]">
          ● REC — {site.telegramHandle} — {site.email}
        </p>
      </div>
    </section>
  );
}
