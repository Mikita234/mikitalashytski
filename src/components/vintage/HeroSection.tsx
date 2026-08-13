"use client";

import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";
import { HeroWorkstation } from "@/components/animations/HeroWorkstation";
import { GlitchText } from "./GlitchText";
import { VHSButton } from "./VHSButton";
import { MarqueeTicker } from "./MarqueeTicker";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const stack = t.raw("stack") as string[];
  const proofs = t.raw("proofs") as { value: string; label: string }[];

  return (
    <section id="hero" className="relative overflow-hidden section-glow-terminal">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[var(--vhs-blue)] opacity-15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-20 h-48 w-48 rounded-full bg-[var(--vhs-beige)] opacity-[0.08] blur-[80px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-y border-white/10 py-3 font-mono text-[9px] uppercase tracking-[0.22em]">
          <span className="text-[var(--vhs-terminal)]">● {t("broadcast")}</span>
          <span className="text-[var(--vhs-beige)]">{t("studioLabel")}</span>
          <span className="text-[var(--vhs-muted)]">{t("availability")}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative">
            <div
              className="absolute -left-4 top-1 h-28 w-px bg-gradient-to-b from-[var(--vhs-terminal)] to-transparent sm:-left-6"
              aria-hidden
            />

            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--vhs-acid)]">
              Strategy / Design / Development / SEO
            </p>

            <h1 className="deathcore-title mt-5 text-[clamp(3rem,8vw,6.5rem)] text-[var(--vhs-white)]">
              <span className="sr-only">{t("title")}</span>
              <span className="deathcore-title__spikes" aria-hidden>
                {t("title")}
              </span>
              <GlitchText decorative as="span" className="relative z-10 block">
                {t("title")}
              </GlitchText>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--vhs-beige)] sm:text-xl">
              {t("subtitle")}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--vhs-body)] sm:text-base">
              {t("body")}
            </p>

            <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
              {proofs.map((proof) => (
                <div key={proof.label} className="bg-[#111115] p-3 sm:p-4">
                  <p className="font-display text-xl text-[var(--vhs-white)] sm:text-2xl">
                    {proof.value}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase leading-relaxed tracking-wider text-[var(--vhs-muted)] sm:text-[9px]">
                    {proof.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((chip) => (
                <span
                  key={chip}
                  className="border border-white/15 bg-white/[0.025] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-[var(--vhs-muted)] sm:text-[9px]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <VHSButton
                href="/order"
                variant="primary"
                onClick={() => trackEvent("CTA Click", { location: "hero", type: "order" })}
              >
                {t("ctaOrder")}
              </VHSButton>
              <VHSButton
                href="/works"
                variant="secondary"
                onClick={() => trackEvent("CTA Click", { location: "hero", type: "works" })}
              >
                {t("ctaWorks")}
              </VHSButton>
              <VHSButton
                href="/guides"
                variant="secondary"
                onClick={() => trackEvent("CTA Click", { location: "hero", type: "diy" })}
              >
                {t("ctaAudit")}
              </VHSButton>
            </div>
          </div>

          <div className="relative lg:flex lg:justify-end">
            <HeroWorkstation />
          </div>
        </div>
      </div>

      <MarqueeTicker />
    </section>
  );
}
