import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import {
  guideIntro,
  guideLabels,
  guideRoadmap,
  guides,
} from "@/content/guides";
import { site } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  return {
    title: guideIntro[l].title,
    description: guideIntro[l].subtitle,
    alternates: buildAlternates(locale, "/guides"),
  };
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "home.nav" });
  const intro = guideIntro[l];
  const labels = guideLabels[l];
  const roadmap = guideRoadmap[l];

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: intro.title,
    description: intro.subtitle,
    url: `${site.url}${l === routing.defaultLocale ? "" : `/${l}`}/guides`,
    inLanguage: l,
    author: { "@type": "Person", name: site.name, url: site.url },
    hasPart: guides.map((guide) => ({
      "@type": "Article",
      headline: guide.title[l],
      description: guide.description[l],
      url: `${site.url}${l === routing.defaultLocale ? "" : `/${l}`}/guides/${guide.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={collectionLd} />
      <VintagePageHeader
        tag={intro.tag}
        title={intro.title}
        subtitle={intro.subtitle}
      />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div className="border-l-4 border-[var(--vhs-acid)] pl-4">
            <p className="type-tag text-[var(--vhs-acid)]">
              ● Cursor / Codex / GitHub / Vercel
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--vhs-body)] sm:text-lg">
              {intro.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <VHSButton href="/guides/make-website-yourself" variant="primary">
              {intro.primary} →
            </VHSButton>
            <VHSButton href="/order" variant="secondary">
              {intro.secondary}
            </VHSButton>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={roadmap.tag}
            title={roadmap.title}
            subtitle={roadmap.subtitle}
            tagClassName="text-[var(--vhs-acid)]"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {roadmap.modules.map((module) => (
              <div
                key={module.code}
                className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {module.code}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-muted)]">
                    {roadmap.modulesTitle}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
                  {module.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                  {module.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {module.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div>
              <p className="type-tag text-[var(--vhs-terminal)]">
                ● {roadmap.setupTitle}
              </p>
              <h2 className="type-h2 mt-3">{roadmap.setupTitle}</h2>
              <p className="type-subtitle mt-4">
                {roadmap.setupSubtitle}
              </p>
              <div className="doom-stone-divider mt-6 max-w-xs" aria-hidden />
            </div>

            <div className="grid gap-4">
              {roadmap.setupSteps.map((step) => (
                <div
                  key={step.code}
                  className="grid gap-4 border border-white/10 bg-[#101014] p-5 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-display text-4xl leading-none text-[var(--doom-ammo)]">
                    {step.code}
                  </span>
                  <div>
                    <h3 className="type-h3">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                      {step.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.items.map((item) => (
                        <span
                          key={item}
                          className="border border-[var(--vhs-terminal)]/25 bg-[var(--vhs-terminal)]/5 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-terminal)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VintageSectionHeader
          tag={labels.all}
          title={t("guides")}
          subtitle={intro.subtitle}
          tagClassName="text-[var(--vhs-terminal)]"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group relative min-h-[260px] overflow-hidden border-2 border-[var(--doom-stone)] bg-[#141418] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--vhs-acid)]"
            >
              <div className="absolute inset-x-0 top-0 h-8 border-b border-black/40 bg-[repeating-linear-gradient(90deg,#1e1e24_0,#1e1e24_14px,#0a0a0a_14px,#0a0a0a_18px)]" />
              <div className="relative pt-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {guide.tape}
                  </span>
                  <span className="font-mono text-[9px] uppercase text-[var(--vhs-muted)]">
                    {guide.minutes} {labels.minutes}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
                  {guide.title[l]}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {guide.description[l]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
                  {labels.read} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
