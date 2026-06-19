import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { PipelineCard } from "@/components/pipeline/PipelineCard";
import {
  VintagePageHeader,
  VintageSectionHeader,
  VintageBulletList,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import { pipelines } from "@/data/pipelines";
import { pipelineHub, pipelineLabels } from "@/content/pipeline";
import { site } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const hub = pipelineHub[l];
  return {
    title: hub.title,
    description: hub.subtitle,
    alternates: buildAlternates(locale, "/pipeline"),
  };
}

export default async function PipelineHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const hub = pipelineHub[l];
  const labels = pipelineLabels[l];
  const localePrefix = l === routing.defaultLocale ? "" : `/${l}`;

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.title,
    description: hub.subtitle,
    url: `${site.url}${localePrefix}/pipeline`,
    inLanguage: l,
    author: { "@type": "Person", name: site.name, url: site.url },
    hasPart: pipelines.map((p) => ({
      "@type": "HowTo",
      name: p.title[l],
      description: p.description[l],
      url: `${site.url}${localePrefix}/pipeline/${p.id}`,
    })),
  };

  return (
    <>
      <JsonLd data={collectionLd} />
      <VintagePageHeader tag={hub.tag} title={hub.title} subtitle={hub.subtitle} />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-8 sm:px-6">
          <VHSButton href="/pipeline/beginner" variant="primary">
            {hub.ctaBeginner} →
          </VHSButton>
          <VHSButton href="/pipeline/brief" variant="secondary">
            {hub.ctaBrief}
          </VHSButton>
          <VHSButton href="/pipeline/stacks" variant="secondary">
            {hub.ctaStacks}
          </VHSButton>
          <VHSButton href="/pipeline/marketing" variant="secondary">
            {hub.ctaMarketing}
          </VHSButton>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag="DEFAULT"
            title={labels.defaultStack}
            subtitle={labels.defaultStackBody}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)]">
            {hub.defaultNote}
          </p>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag="OUTCOME"
            title={hub.outcomeTitle}
            tagClassName="text-[var(--doom-ammo)]"
          />
          <VintageBulletList items={[...hub.outcomeItems]} accent="bg-[var(--doom-ammo)]" />
        </section>

        <VintageSectionHeader
          tag="PIPELINE"
          title={hub.cardsTitle}
          subtitle={hub.cardsSubtitle}
          tagClassName="text-[var(--vhs-terminal)]"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pipelines.map((pipeline) => (
            <PipelineCard key={pipeline.id} pipeline={pipeline} locale={l} />
          ))}
        </div>
      </div>
    </>
  );
}
