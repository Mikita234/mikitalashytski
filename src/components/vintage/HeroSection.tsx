"use client";

import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";
import { GlitchText } from "./GlitchText";
import { VHSButton } from "./VHSButton";
import { CRTScreen } from "./CRTScreen";
import { MarqueeTicker } from "./MarqueeTicker";
import { DoomHudBar } from "./DoomHudBar";
import { DoomCornerFrame } from "./DoomCornerFrame";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const stack = t.raw("stack") as string[];

  return (
    <section className="relative overflow-hidden section-glow-terminal">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[var(--vhs-blue)] opacity-20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-20 h-48 w-48 rounded-full bg-[var(--vhs-red)] opacity-10 blur-[80px]"
        aria-hidden
      />

      <div className="vhs-tape-deco absolute right-4 top-8 hidden lg:block" aria-hidden>
        <div className="w-24 border-2 border-[var(--vhs-dirt)] bg-[#1a1a1e] p-2">
          <div className="h-8 border border-white/10 bg-[#111]" />
          <div className="mt-1 flex justify-between px-1">
            <span className="font-mono text-[6px] text-[var(--vhs-red)]">● REC</span>
            <span className="font-mono text-[6px] text-[var(--vhs-muted)]">SP</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
        <DoomHudBar label="STATUS" value="READY" className="mb-4 max-w-xs" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <DoomCornerFrame className="flex-1 lg:max-w-xl">
            <div className="p-1">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--vhs-terminal)] sm:text-xs">
                ● {t("broadcast")}
              </p>

              <h1 className="deathcore-title text-[clamp(1.6rem,6vw,3.2rem)] leading-tight text-[var(--vhs-white)]">
                <span className="deathcore-title__spikes" aria-hidden>
                  {t("title")}
                </span>
                <GlitchText as="span" className="relative z-10 block">
                  {t("title")}
                </GlitchText>
              </h1>

              <p className="mt-4 font-sans text-base font-medium leading-snug text-[var(--vhs-beige)] sm:mt-5 sm:text-lg">
                {t("subtitle")}
              </p>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                {t("body")}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((chip) => (
                  <span
                    key={chip}
                    className="border border-[var(--doom-red)]/30 bg-[var(--doom-panel)] px-2 py-1 font-mono text-[9px] uppercase text-[var(--doom-ammo)] sm:text-[10px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
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
                  href="/order?service=audit"
                  variant="secondary"
                  onClick={() => trackEvent("CTA Click", { location: "hero", type: "audit" })}
                >
                  {t("ctaAudit")}
                </VHSButton>
              </div>
            </div>
          </DoomCornerFrame>

          <div className="flex-1 lg:flex lg:justify-end">
            <CRTScreen label={t("tvLabel")} />
          </div>
        </div>
      </div>

      <MarqueeTicker />
    </section>
  );
}
