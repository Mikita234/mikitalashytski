"use client";

import { vintageHero } from "@/content/home-vintage";
import { GlitchText } from "./GlitchText";
import { VHSButton } from "./VHSButton";
import { CRTScreen } from "./CRTScreen";
import { MarqueeTicker } from "./MarqueeTicker";

export function HeroSection() {
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

      {/* VHS tape decoration */}
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
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 lg:max-w-xl">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--vhs-terminal)] sm:text-xs">
              ● {vintageHero.channel} — LIVE BROADCAST
            </p>

            <h1 className="deathcore-title text-[clamp(2.8rem,12vw,5.5rem)] text-[var(--vhs-white)]">
              <span className="deathcore-title__spikes" aria-hidden>
                {vintageHero.title}
              </span>
              <GlitchText as="span" className="relative z-10 block">
                {vintageHero.title}
              </GlitchText>
            </h1>

            <p className="mt-4 font-sans text-base font-medium leading-snug text-[var(--vhs-beige)] sm:mt-5 sm:text-lg">
              {vintageHero.subtitle}
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {vintageHero.body}
            </p>

            {/* Live stats strip */}
            <div className="mt-6 flex flex-wrap gap-3 border border-white/10 bg-[#0e0e12]/80 p-3">
              {vintageHero.audiences.map((a) => (
                <div key={a} className="font-mono">
                  <p className="text-[8px] uppercase text-[var(--vhs-muted)]">FOR</p>
                  <p className="text-xs text-[var(--vhs-terminal)]">{a}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <VHSButton href={vintageHero.ctaPrimaryHref} variant="primary">
                {vintageHero.ctaPrimary}
              </VHSButton>
              <VHSButton href={vintageHero.ctaSecondaryHref} variant="secondary">
                {vintageHero.ctaSecondary}
              </VHSButton>
            </div>
          </div>

          <div className="flex-1 lg:flex lg:justify-end">
            <CRTScreen label={vintageHero.tvLabel} />
          </div>
        </div>
      </div>

      <MarqueeTicker />
    </section>
  );
}
