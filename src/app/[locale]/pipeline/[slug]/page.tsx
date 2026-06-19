import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import { StarterPackDownload } from "@/components/pipeline/StarterPackDownload";
import {
  VintageBlock,
  VintageBulletList,
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildSeoMetadata } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import { getPipeline, pipelineSlugs } from "@/data/pipelines";
import { getStackById } from "@/data/stack-options";
import { pipelineLabels } from "@/content/pipeline";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    pipelineSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const pipeline = getPipeline(slug);
  if (!pipeline) return {};
  const l = locale as Locale;
  return buildSeoMetadata({
    locale,
    path: `/pipeline/${pipeline.id}`,
    title: pipeline.title[l],
    description: pipeline.description[l],
    type: "article",
  });
}

export default async function PipelineDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const pipeline = getPipeline(slug);
  if (!pipeline) notFound();

  const l = locale as Locale;
  const labels = pipelineLabels[l];
  const localePrefix = l === routing.defaultLocale ? "" : `/${l}`;
  const pageUrl = `${site.url}${localePrefix}/pipeline/${pipeline.id}`;

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: pipeline.title[l],
    description: pipeline.description[l],
    inLanguage: l,
    url: pageUrl,
    step: pipeline.buildPhases.map((phase, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: phase.title[l],
      text: phase.body[l],
    })),
  };

  return (
    <>
      <JsonLd data={howToLd} />
      <VintagePageHeader
        tag={pipeline.tag}
        title={pipeline.title[l]}
        subtitle={pipeline.description[l]}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/pipeline"
          className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
        >
          ← {labels.back}
        </Link>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <VintageBlock title={labels.bestFor}>
            <VintageBulletList items={pipeline.bestFor[l]} />
          </VintageBlock>
          <VintageBlock title={labels.avoidIf}>
            <VintageBulletList items={pipeline.avoidIf[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px]">
          <VintageBlock title={labels.requiredInputs}>
            <VintageBulletList items={pipeline.requiredInputs[l]} accent="bg-[var(--vhs-terminal)]" />
          </VintageBlock>
          <StarterPackDownload pipeline={pipeline} locale={l} />
        </div>

        <section className="mt-10">
          <VintageSectionHeader
            tag="STACK"
            title={labels.recommendedStack}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="flex flex-wrap gap-2">
            {pipeline.recommendedStack.map((id) => {
              const stack = getStackById(id);
              return (
                <span
                  key={id}
                  className="border-2 border-[var(--vhs-acid)] bg-[var(--vhs-acid)]/10 px-3 py-2 font-mono text-[10px] uppercase text-[var(--vhs-acid)]"
                  title={stack?.plainLanguage[l]}
                >
                  {stack?.name ?? id}
                </span>
              );
            })}
            {pipeline.alternatives.map((id) => {
              const stack = getStackById(id);
              return (
                <span
                  key={id}
                  className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase text-[var(--vhs-muted)]"
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
            {pipeline.buildPhases.map((phase) => (
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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <VintageBlock title={labels.risks}>
            <VintageBulletList items={pipeline.risks[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
          <VintageBlock title={labels.rejected}>
            <VintageBulletList items={pipeline.rejectedOptions[l]} accent="bg-[var(--vhs-yellow)]" />
          </VintageBlock>
        </div>

        <div className="mt-10">
          <VintageBlock title={labels.rescueTriggers}>
            <VintageBulletList items={pipeline.rescueTriggers[l]} accent="bg-[var(--vhs-terminal)]" />
            <div className="mt-6 flex flex-wrap gap-3">
              <VHSButton href="/pipeline/rescue" variant="secondary">
                Rescue pipeline →
              </VHSButton>
              <VHSButton href="/order" variant="primary">
                Order audit →
              </VHSButton>
            </div>
          </VintageBlock>
        </div>
      </article>
    </>
  );
}
