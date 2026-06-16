"use client";

import { useState, useCallback } from "react";
import {
  vintageWorksHome,
  vintageProcess,
  vintagePopups,
} from "@/content/home-vintage";
import { SignalIntro } from "./SignalIntro";
import { HeroSection } from "./HeroSection";
import { servicePackages } from "@/content/services";
import { PackageCard } from "./PackageCard";
import { PricingSection } from "./PricingSection";
import { VintageProjectCard } from "./VintageProjectCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { ContactCTA } from "./ContactCTA";
import { PopupWindow } from "./PopupWindow";
import { TeletextPanel } from "./TeletextPanel";
import { UnderTheHoodSection } from "./UnderTheHoodSection";
import { DVDLogoBouncer } from "./DVDLogoBouncer";
import { VHSButton } from "./VHSButton";

export function VintageHome() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <SignalIntro onDone={handleIntroDone} />

      <div
        className={`transition-opacity duration-300 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <PopupWindow
          title={vintagePopups[0].title}
          text={vintagePopups[0].text}
          position="bottom-right"
          delay={2000}
        />
        <PopupWindow
          title={vintagePopups[1].title}
          text="old internet mode enabled"
          position="bottom-left"
          delay={3500}
        />

        <HeroSection />

        <section
          id="packages"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-red)]">
                  ● PACKAGES
                </p>
                <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
                  Что делаю
                </h2>
                <p className="mt-2 max-w-lg text-sm text-[var(--vhs-muted)]">
                  Четыре пакета под разные задачи. Цены — от, точная смета после разбора.
                </p>
              </div>
              <TeletextPanel />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {servicePackages.map((p) => (
                <PackageCard
                  key={p.id}
                  title={p.title}
                  desc={p.desc}
                  priceFrom={p.priceFrom}
                  timeline={p.timeline}
                  tag={p.tag}
                  href={p.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="works"
          className="scroll-mt-20 border-t border-white/10 bg-[#0c0c0e] py-14 section-glow-terminal sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
              ● OPEN SIGNALS
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
              Live Projects
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--vhs-muted)]">
              От e-commerce и маркетплейсов до автоматизации и сервисных сайтов. Мини-кейсы — не просто карточки.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vintageWorksHome.map((w) => (
                <VintageProjectCard
                  key={w.slug}
                  slug={w.slug}
                  title={w.title}
                  desc={w.desc}
                  tags={w.tags}
                  status={w.status}
                  href={w.href}
                  style={w.style}
                  domain={w.domain}
                />
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        <UnderTheHoodSection />

        <section
          id="process"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-beige)]">
              ● INSTRUCTION MANUAL
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
              Process
            </h2>
            <div className="mt-10">
              <ProcessTimeline steps={vintageProcess} />
            </div>
            <div className="mt-12">
              <DVDLogoBouncer />
            </div>
            <div className="mt-8 text-center">
              <VHSButton href="/about" variant="secondary">
                Подробнее о подходе →
              </VHSButton>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </>
  );
}
