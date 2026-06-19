import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { StepChecklist } from "@/components/pipeline/StepChecklist";
import { VintagePageHeader, VintageSectionHeader } from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import { beginnerIntro, beginnerStages, pipelineHub } from "@/content/pipeline";
import { site } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const intro = beginnerIntro[l];
  return {
    title: intro.seoTitle,
    description: intro.subtitle,
    alternates: buildAlternates(locale, "/pipeline/beginner"),
  };
}

export default async function PipelineBeginnerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const intro = beginnerIntro[l];
  const hub = pipelineHub[l];
  const localePrefix = l === routing.defaultLocale ? "" : `/${l}`;

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: intro.title,
    description: intro.subtitle,
    inLanguage: l,
    url: `${site.url}${localePrefix}/pipeline/beginner`,
    step: beginnerStages.map((stage, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: stage.title[l],
      text: stage.body[l],
    })),
  };

  return (
    <>
      <JsonLd data={howToLd} />
      <VintagePageHeader tag={intro.tag} title={intro.title} subtitle={intro.subtitle} />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 py-8 sm:px-6">
          <VHSButton href="/pipeline/brief" variant="primary">
            {hub.ctaBrief} →
          </VHSButton>
          <VHSButton href="/pipeline/stacks" variant="secondary">
            {hub.ctaStacks}
          </VHSButton>
          <VHSButton href="/pipeline/marketing" variant="secondary">
            {hub.ctaMarketing}
          </VHSButton>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <VintageSectionHeader
          tag="11+3 STEPS"
          title={intro.title}
          subtitle={intro.subtitle}
          tagClassName="text-[var(--vhs-acid)]"
        />
        <StepChecklist stages={beginnerStages} locale={l} />

        <div className="mt-14 border-2 border-[var(--doom-ammo)]/40 bg-[#101014] p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--doom-ammo)]">
            LATER
          </span>
          <h2 className="mt-4 font-display text-2xl uppercase text-[var(--vhs-white)]">
            {intro.marketingLaterTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
            {intro.marketingLaterBody}
          </p>
          <div className="mt-6">
            <VHSButton href="/pipeline/marketing" variant="primary">
              {intro.marketingLaterCta} →
            </VHSButton>
          </div>
        </div>
      </div>
    </>
  );
}
