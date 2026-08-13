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
  const seoArticle = pipeline.seoArticle?.[l];
  const sectionLabels = seoArticle
    ? {
        bestFor: "Для каких задач подходит этот план?",
        avoidIf: "Что стоит подготовить заранее?",
        requiredInputs: "Какие материалы нужны для старта?",
        recommendedStack: "Какие инструменты подходят проекту?",
        buildPhases: "Как проходит внедрение?",
        buildTitle: "Как реализовать проект по шагам?",
        risks: "Как поддерживать качество результата?",
        rejected: "Какие решения стоит проверить заранее?",
        rescueTriggers: "Когда полезен технический разбор?",
      }
    : {
        bestFor: labels.bestFor,
        avoidIf: labels.avoidIf,
        requiredInputs: labels.requiredInputs,
        recommendedStack: labels.recommendedStack,
        buildPhases: labels.buildPhases,
        buildTitle: pipeline.title[l],
        risks: labels.risks,
        rejected: labels.rejected,
        rescueTriggers: labels.rescueTriggers,
      };
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
  const faqLd = seoArticle
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seoArticle.sections.map((section) => ({
          "@type": "Question",
          name: section.heading,
          acceptedAnswer: {
            "@type": "Answer",
            text: section.paragraphs.join(" "),
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={faqLd ? [howToLd, faqLd] : howToLd} />
      <VintagePageHeader
        tag={pipeline.tag}
        title={pipeline.title[l]}
        subtitle={seoArticle?.intro ?? pipeline.description[l]}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/pipeline"
          className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
        >
          ← {labels.back}
        </Link>

        {seoArticle && (
          <section className="mt-10 overflow-hidden border-2 border-[var(--doom-stone)] bg-[#101014]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#17171c] px-5 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                ● {seoArticle.label}
              </p>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-muted)]">
                {pipeline.tag} / SEO / AEO / 2026
              </span>
            </div>

            <div className="grid gap-x-10 gap-y-10 p-5 sm:p-8 lg:grid-cols-2">
              {seoArticle.sections.map((section, index) => (
                <section
                  key={section.heading}
                  className={index === 0 ? "lg:col-span-2 lg:max-w-4xl" : undefined}
                >
                  <div className="mb-4 flex items-start gap-3">
                    <span className="mt-1 font-mono text-[10px] text-[var(--vhs-acid)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-3xl uppercase leading-none text-[var(--vhs-white)] sm:text-4xl">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="space-y-4 border-l border-white/10 pl-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[15px] leading-7 text-[var(--vhs-body)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <VintageBlock title={sectionLabels.bestFor}>
            <VintageBulletList items={pipeline.bestFor[l]} />
          </VintageBlock>
          <VintageBlock title={sectionLabels.avoidIf}>
            <VintageBulletList items={pipeline.avoidIf[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px]">
          <VintageBlock title={sectionLabels.requiredInputs}>
            <VintageBulletList items={pipeline.requiredInputs[l]} accent="bg-[var(--vhs-terminal)]" />
          </VintageBlock>
          <StarterPackDownload pipeline={pipeline} locale={l} />
        </div>

        <section className="mt-10">
          <VintageSectionHeader
            tag="STACK"
            title={sectionLabels.recommendedStack}
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
            tag={sectionLabels.buildPhases}
            title={sectionLabels.buildTitle}
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
          <VintageBlock title={sectionLabels.risks}>
            <VintageBulletList items={pipeline.risks[l]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
          <VintageBlock title={sectionLabels.rejected}>
            <VintageBulletList items={pipeline.rejectedOptions[l]} accent="bg-[var(--vhs-yellow)]" />
          </VintageBlock>
        </div>

        <div className="mt-10">
          <VintageBlock title={sectionLabels.rescueTriggers}>
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
