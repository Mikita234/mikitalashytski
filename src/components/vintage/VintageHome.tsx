"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import {
  vintageWorksHome,
  vintagePopups,
} from "@/content/home-vintage";
import { servicePackages } from "@/content/services";
import { SignalIntro } from "./SignalIntro";
import { HeroSection } from "./HeroSection";
import { PackageCard } from "./PackageCard";
import { PricingSection } from "./PricingSection";
import { VintageProjectCard } from "./VintageProjectCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { ContactCTA } from "./ContactCTA";
import { PopupWindow } from "./PopupWindow";
import { TeletextPanel } from "./TeletextPanel";
import { UnderTheHoodSection } from "./UnderTheHoodSection";
import { TrustFactsSection } from "./TrustFactsSection";
import { StackGrid } from "./StackGrid";
import { ProofStrip } from "./ProofStrip";
import { DVDLogoBouncer } from "./DVDLogoBouncer";
import { VHSButton } from "./VHSButton";
import type { PackageId } from "@/content/selling";

export function VintageHome() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);
  const t = useTranslations("home");
  const tProjects = useTranslations("projects");
  const processSteps = t.raw("process.steps") as { title: string; desc: string }[];

  const timelineSteps = processSteps.map((s, i) => ({
    step: String(i + 1).padStart(2, "0"),
    title: s.title,
    desc: s.desc,
  }));

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
                  ● {t("packages.tag")}
                </p>
                <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
                  {t("packages.title")}
                </h2>
                <p className="mt-2 max-w-lg text-sm text-[var(--vhs-muted)]">
                  {t("packages.subtitle")}
                </p>
              </div>
              <TeletextPanel />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicePackages.map((p) => (
                <PackageCard
                  key={p.id}
                  id={p.id as PackageId}
                  priceFrom={p.priceFrom}
                  timeline={t(`packages.timelines.${p.timelineKey}`)}
                  tag={p.tag}
                  href={p.href}
                />
              ))}
            </div>
          </div>
        </section>

        <TrustFactsSection />
        <StackGrid />
        <ProofStrip />

        <section
          id="works"
          className="scroll-mt-20 border-t border-white/10 bg-[#0c0c0e] py-14 section-glow-terminal sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
              ● {t("works.tag")}
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
              {t("works.title")}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--vhs-muted)]">
              {t("works.subtitle")}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {vintageWorksHome.map((w) => (
                <VintageProjectCard
                  key={w.slug}
                  slug={w.slug}
                  title={tProjects(`${w.slug}.cardTitle`)}
                  desc={tProjects(`${w.slug}.cardDesc`)}
                  tags={w.tags}
                  status={w.status}
                  href={w.href}
                  style={w.style}
                  domain={w.domain}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <VHSButton href="/works" variant="secondary">
                {t("works.viewAll")} →
              </VHSButton>
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
              ● {t("process.tag")}
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
              {t("process.title")}
            </h2>
            <div className="mt-10">
              <ProcessTimeline steps={timelineSteps} />
            </div>
            <div className="mt-12">
              <DVDLogoBouncer />
            </div>
            <div className="mt-8 text-center">
              <VHSButton href="/about" variant="secondary">
                {t("process.more")} →
              </VHSButton>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </>
  );
}
