import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  VintagePageHeader,
  VintageSectionHeader,
  VintageBulletList,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import { marketingPipelines } from "@/data/marketing-pipelines";
import { marketingHub, pipelineHub } from "@/content/pipeline";
import { site } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const hub = marketingHub[l];
  return {
    title: hub.title,
    description: hub.subtitle,
    alternates: buildAlternates(locale, "/pipeline/marketing"),
  };
}

export default async function PipelineMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const hub = marketingHub[l];
  const pipeHub = pipelineHub[l];
  const localePrefix = l === routing.defaultLocale ? "" : `/${l}`;

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.title,
    description: hub.subtitle,
    url: `${site.url}${localePrefix}/pipeline/marketing`,
    inLanguage: l,
    hasPart: marketingPipelines.map((p) => ({
      "@type": "HowTo",
      name: p.title[l],
      description: p.description[l],
      url: `${site.url}${localePrefix}/pipeline/marketing/${p.id}`,
    })),
  };

  return (
    <>
      <JsonLd data={collectionLd} />
      <VintagePageHeader tag={hub.tag} title={hub.title} subtitle={hub.subtitle} />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 py-8 sm:px-6">
          <VHSButton href="/pipeline/beginner" variant="primary">
            {hub.ctaBeginner} →
          </VHSButton>
          <VHSButton href="/guides" variant="secondary">
            {hub.ctaGuides}
          </VHSButton>
          <VHSButton href="/pipeline/stacks" variant="secondary">
            {pipeHub.ctaStacks}
          </VHSButton>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag="PRIORITY"
            title={hub.priorityTitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {hub.honestNote}
          </p>
          <VintageBulletList items={[...hub.priorityItems]} accent="bg-[var(--doom-ammo)]" />
        </section>

        <VintageSectionHeader
          tag="MKT"
          title={hub.cardsTitle}
          subtitle={hub.cardsSubtitle}
          tagClassName="text-[var(--vhs-terminal)]"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {marketingPipelines.map((pipeline) => (
            <Link
              key={pipeline.id}
              href={`/pipeline/marketing/${pipeline.id}`}
              className="group border-2 border-[var(--doom-stone)] bg-[#141418] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--vhs-acid)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                {pipeline.tag}
              </span>
              <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--vhs-white)]">
                {pipeline.title[l]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                {pipeline.description[l]}
              </p>
              <p className="mt-3 border-l-2 border-[var(--vhs-acid)] pl-3 text-xs text-[var(--vhs-body)]">
                {pipeline.honestNote[l]}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
                {pipeHub.cardsSubtitle.split(".")[0]} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
