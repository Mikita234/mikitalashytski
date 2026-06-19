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
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import { getGuide, guideLabels, guides } from "@/content/guides";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return {};
  }
  const l = locale as Locale;
  return {
    title: guide.title[l],
    description: guide.description[l],
    alternates: buildAlternates(locale, `/guides/${guide.slug}`),
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuide(slug);
  if (!guide) {
    notFound();
  }
  const l = locale as Locale;
  const labels = guideLabels[l];
  const currentIndex = guides.findIndex((g) => g.slug === guide.slug);
  const next = guides[(currentIndex + 1) % guides.length];
  const localePrefix = l === routing.defaultLocale ? "" : `/${l}`;
  const guideUrl = `${site.url}${localePrefix}/guides/${guide.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title[l],
    description: guide.description[l],
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: l,
    mainEntityOfPage: guideUrl,
    keywords: guide.tags.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Guides",
        item: `${site.url}${localePrefix}/guides`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title[l],
        item: guideUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[articleLd, breadcrumbLd]} />
      <VintagePageHeader
        tag={`${guide.tape} / ${guide.channel}`}
        title={guide.title[l]}
        subtitle={guide.description[l]}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/guides"
          className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
        >
          ← {labels.back}
        </Link>

        <p className="mt-8 border-l-4 border-[var(--vhs-acid)] pl-4 text-lg leading-relaxed text-[var(--vhs-body)]">
          {guide.intro[l]}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_300px]">
          <VintageBlock title={labels.outcome}>
            <VintageBulletList
              items={guide.outcome[l]}
              accent="bg-[var(--vhs-acid)]"
            />
          </VintageBlock>
          <aside className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
              ● {guide.minutes} {labels.minutes}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <VintageSectionHeader
            tag={labels.steps}
            title={guide.title[l]}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <div className="grid gap-4">
            {guide.steps[l].map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border border-white/10 bg-[#101014] p-5 sm:grid-cols-[80px_1fr]"
              >
                <span className="font-display text-4xl leading-none text-[var(--doom-ammo)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="type-h3">{step.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-[var(--vhs-muted)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <VintageBlock title={labels.mistakes}>
            <VintageBulletList
              items={guide.mistakes[l]}
              accent="bg-[var(--vhs-red)]"
            />
          </VintageBlock>
          <VintageBlock title={guide.cta[l].title}>
            <p className="mb-4 text-base leading-relaxed text-[var(--vhs-muted)]">
              {guide.cta[l].body}
            </p>
            <VintageBulletList
              items={guide.cta[l].bullets}
              accent="bg-[var(--vhs-terminal)]"
            />
            <div className="mt-6">
              <VHSButton href="/order" variant="primary">
                Rescue / audit →
              </VHSButton>
            </div>
          </VintageBlock>
        </div>

        <div className="mt-12 border-t border-[var(--doom-stone)]/60 pt-8">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
            ● {labels.next}
          </p>
          <Link
            href={`/guides/${next.slug}`}
            className="block border-2 border-[var(--doom-stone)] bg-[#141418] p-5 hover:border-[var(--vhs-acid)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
              {next.tape}
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
              {next.title[l]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
              {next.description[l]}
            </p>
          </Link>
        </div>
      </article>
    </>
  );
}
