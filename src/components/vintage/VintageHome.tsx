"use client";

import { useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { formatPriceFrom } from "@/lib/pricing";
import {
  vintageWorksHome,
  vintagePopups,
} from "@/content/home-vintage";
import { PopupWindow } from "./PopupWindow";
import { servicePackages } from "@/content/services";
import { SignalIntro } from "./SignalIntro";
import { HeroSection } from "./HeroSection";
import { PackageCard } from "./PackageCard";
import { PricingSection } from "./PricingSection";
import { VintageProjectCard } from "./VintageProjectCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { ContactCTA } from "./ContactCTA";
import { TeletextPanel } from "./TeletextPanel";
import { UnderTheHoodSection } from "./UnderTheHoodSection";
import { TrustFactsSection } from "./TrustFactsSection";
import { StackGrid } from "./StackGrid";
import { ProofStrip } from "./ProofStrip";
import { DVDLogoBouncer } from "./DVDLogoBouncer";
import { VHSButton } from "./VHSButton";
import { VintageSectionHeader } from "./VintagePage";
import type { PackageId } from "@/content/selling";

export function VintageHome() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);
  const locale = useLocale();
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
          text={vintagePopups[1].text}
          position="bottom-left"
          delay={3500}
        />

        <HeroSection />

        <section
          id="packages"
          className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 section-spacing"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <VintageSectionHeader
                tag={t("packages.tag")}
                title={t("packages.title")}
                subtitle={t("packages.subtitle")}
              />
              <TeletextPanel />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicePackages.map((p) => (
                <PackageCard
                  key={p.id}
                  id={p.id as PackageId}
                  priceFrom={formatPriceFrom(p.priceFromPln, locale)}
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
          className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 bg-[#0c0c0e] section-glow-terminal section-spacing"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <VintageSectionHeader
              tag={t("works.tag")}
              title={t("works.title")}
              subtitle={t("works.subtitle")}
              tagClassName="text-[var(--vhs-terminal)]"
            />
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <VHSButton href="/works" variant="secondary">
                {t("works.viewAll")} →
              </VHSButton>
              <VHSButton href="#hero-tv" variant="secondary">
                {t("works.browseArchive")} ↑
              </VHSButton>
            </div>
          </div>
        </section>

        <PricingSection />
        <UnderTheHoodSection />

        <section
          id="process"
          className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 section-spacing"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <VintageSectionHeader
              tag={t("process.tag")}
              title={t("process.title")}
              tagClassName="text-[var(--vhs-beige)]"
            />
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
