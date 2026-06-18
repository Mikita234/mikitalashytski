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
        className="pointer-events-none absolute -right-10 top-20 h-48 w-48 rounded-full bg-[var(--doom-red)] opacity-15 blur-[80px]"
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

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
        <div className="mb-5 flex flex-wrap gap-3">
          <DoomHudBar label="HP" value="100%" fill={100} className="max-w-[140px]" />
          <DoomHudBar label="AMMO" value="∞" fill={85} variant="ammo" className="max-w-[140px]" />
          <DoomHudBar label="STATUS" value="READY" fill={100} className="max-w-[160px]" />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <DoomCornerFrame className="flex-1 lg:max-w-xl">
            <div className="p-2 sm:p-3">
              <p className="type-tag text-[var(--vhs-terminal)]">
                ● {t("broadcast")}
              </p>

              <h1 className="deathcore-title type-h1 mt-4">
                <span className="sr-only">{t("title")}</span>
                <span className="deathcore-title__spikes" aria-hidden>
                  {t("title")}
                </span>
                <GlitchText decorative as="span" className="relative z-10 block">
                  {t("title")}
                </GlitchText>
              </h1>

              <p className="type-subtitle mt-5">{t("subtitle")}</p>

              <p className="type-body mt-4 max-w-md">{t("body")}</p>

              <div className="doom-stone-divider mt-6 max-w-sm" aria-hidden />

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((chip) => (
                  <span
                    key={chip}
                    className="border border-[var(--doom-red)]/50 bg-[var(--doom-panel)] px-2.5 py-1 font-[family-name:var(--font-doom)] text-[8px] uppercase text-[var(--doom-ammo)] sm:text-[9px]"
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
