import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  VintageBlock,
  VintageBulletList,
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildSeoMetadata } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import {
  getMarketingPipeline,
  marketingPipelineSlugs,
} from "@/data/marketing-pipelines";
import { getStackById } from "@/data/stack-options";
import { pipelineLabels } from "@/content/pipeline";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    marketingPipelineSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const pipeline = getMarketingPipeline(slug);
  if (!pipeline) return {};
  const l = locale as Locale;
  return buildSeoMetadata({
    locale,
    path: `/pipeline/marketing/${pipeline.id}`,
    title: pipeline.title[l],
    description: pipeline.description[l],
    type: "article",
  });
}

export default async function MarketingPipelineDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const pipeline = getMarketingPipeline(slug);
  if (!pipeline) notFound();

  const l = locale as Locale;
  const labels = pipelineLabels[l];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: pipeline.title[l],
          description: pipeline.description[l],
          inLanguage: l,
          step: pipeline.phases.map((phase, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: phase.title[l],
            text: phase.body[l],
          })),
        }}
      />
      <VintagePageHeader
        tag={pipeline.tag}
        title={pipeline.title[l]}
        subtitle={pipeline.description[l]}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/pipeline/marketing"
          className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
        >
          ← Marketing hub
        </Link>

        <p className="mt-8 border-l-4 border-[var(--vhs-acid)] pl-4 text-sm leading-relaxed text-[var(--vhs-body)] sm:text-base">
          {pipeline.honestNote[l]}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <VintageBlock title={labels.bestFor}>
            <VintageBulletList items={pipeline.bestFor[l]} />
          </VintageBlock>
          <VintageBlock title={labels.avoidIf}>
            <VintageBulletList items={pipeline.avoidIf[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
        </div>

        <section className="mt-10">
          <VintageSectionHeader
            tag="TOOLS"
            title="Related stack"
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="flex flex-wrap gap-2">
            {pipeline.relatedStacks.map((id) => {
              const stack = getStackById(id);
              return (
                <span
                  key={id}
                  className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase text-[var(--vhs-muted)]"
                  title={stack?.plainLanguage[l]}
                >
                  {stack?.name ?? id}
                </span>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <VintageSectionHeader
            tag={labels.buildPhases}
            title={pipeline.title[l]}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <div className="grid gap-4">
            {pipeline.phases.map((phase) => (
              <div
                key={phase.code}
                className="grid gap-4 border border-white/10 bg-[#101014] p-5 sm:grid-cols-[72px_1fr]"
              >
                <span className="font-display text-4xl leading-none text-[var(--doom-ammo)]">
                  {phase.code}
                </span>
                <div>
                  <h2 className="type-h3">{phase.title[l]}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)]">
                    {phase.body[l]}
                  </p>
                  <p className="mt-3 border-l-2 border-[var(--vhs-acid)] pl-3 text-sm text-[var(--vhs-body)]">
                    <span className="font-mono text-[9px] uppercase text-[var(--vhs-acid)]">
                      {labels.doneWhen}:{" "}
                    </span>
                    {phase.doneWhen[l]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <VintageSectionHeader tag="GUIDES" title="Related guides" tagClassName="text-[var(--doom-ammo)]" />
          <div className="flex flex-wrap gap-3">
            {pipeline.relatedGuides.map((guideSlug) => (
              <VHSButton key={guideSlug} href={`/guides/${guideSlug}`} variant="secondary">
                {guideSlug.replace(/-/g, " ")} →
              </VHSButton>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <VintageBlock title={labels.risks}>
            <VintageBulletList items={pipeline.risks[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
        </div>
      </article>
    </>
  );
}
