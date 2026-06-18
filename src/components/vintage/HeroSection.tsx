"use client";

import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";
import { GlitchText } from "./GlitchText";
import { VHSButton } from "./VHSButton";
import dynamic from "next/dynamic";

const HeroWorkstation = dynamic(
  () =>
    import("@/components/animations/HeroWorkstation").then((m) => ({
      default: m.HeroWorkstation,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="hero-workstation-placeholder mx-auto w-full max-w-md"
        aria-hidden
      >
        <div className="aspect-[4/3] animate-pulse rounded-[1.25rem] bg-gradient-to-b from-[#3a3a42] to-[#1a1a1e]" />
      </div>
    ),
  },
);
import { MarqueeTicker } from "./MarqueeTicker";
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

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
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
            <HeroWorkstation />
          </div>
        </div>
      </div>

      <MarqueeTicker />
    </section>
  );
}
