"use client";

import { useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { formatPriceFrom } from "@/lib/pricing";
import {
  vintageWorksHome,
} from "@/content/home-vintage";
import { guideIntro, guideLabels, guides } from "@/content/guides";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
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
  const l = locale as Locale;
  const t = useTranslations("home");
  const tProjects = useTranslations("projects");
  const popups = t.raw("popups") as { title: string; text: string }[];
  const processSteps = t.raw("process.steps") as { title: string; desc: string }[];
  const salesPath = t.raw("salesPath") as {
    tag: string;
    title: string;
    subtitle: string;
    items: { label: string; title: string; text: string; cta: string; href: string }[];
  };

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
          title={popups[0].title}
          text={popups[0].text}
          position="bottom-right"
          delay={2000}
        />
        <PopupWindow
          title={popups[1].title}
          text={popups[1].text}
          position="bottom-left"
          delay={3500}
        />

        <HeroSection />

        <section
          id="start"
          className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 bg-[#101014] section-spacing"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <VintageSectionHeader
              tag={salesPath.tag}
              title={salesPath.title}
              subtitle={salesPath.subtitle}
              tagClassName="text-[var(--vhs-acid)]"
            />
            <div className="grid gap-4 md:grid-cols-3">
              {salesPath.items.map((item) => (
                <div
                  key={item.label}
                  className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {item.label}
                  </span>
                  <h3 className="mt-4 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                    {item.text}
                  </p>
                  <div className="mt-5">
                    <VHSButton href={item.href} variant="secondary">
                      {item.cta} →
                    </VHSButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
          id="guides"
          className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 bg-[#101014] section-spacing"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <VintageSectionHeader
                tag={guideIntro[l].tag}
                title={guideIntro[l].title}
                subtitle={guideIntro[l].subtitle}
                tagClassName="text-[var(--vhs-terminal)]"
              />
              <div className="border-2 border-[var(--doom-stone)] bg-[#141418] p-4 lg:max-w-xs">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-acid)]">
                  ● DIY → rescue → build
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {guideIntro[l].subtitle}
                </p>
                <div className="mt-5">
                  <VHSButton href="/guides" variant="secondary">
                    {guideLabels[l].all} →
                  </VHSButton>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {guides.slice(0, 3).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group min-h-[220px] border-2 border-[var(--doom-stone)] bg-[#141418] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--vhs-acid)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                      {guide.tape}
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[var(--vhs-muted)]">
                      {guide.minutes} {guideLabels[l].minutes}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
                    {guide.title[l]}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--vhs-muted)]">
                    {guide.description[l]}
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
                    {guideLabels[l].read} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
