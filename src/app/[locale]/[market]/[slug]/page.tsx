import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { VHSButton } from "@/components/vintage/VHSButton";
import {
  VintageBlock,
  VintageBulletList,
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
import { Link } from "@/i18n/navigation";
import { buildSeoMetadata } from "@/lib/seo";
import { marketPageSlugs, getMarketPage } from "@/content/market-pages";
import type { Locale } from "@/i18n/routing";
import { guides } from "@/content/guides";

type Guide = (typeof guides)[number];

export const dynamicParams = false;

const labels: Record<
  Locale,
  {
    offer: string;
    clientPathTag: string;
    clientPathTitle: string;
    clientPathSubtitle: string;
    outcomes: string;
    process: string;
    searchDemand: string;
    faq: string;
    faqTitle: string;
    nextReadingTag: string;
    nextReadingTitle: string;
  }
> = {
  en: {
    offer: "Offer",
    clientPathTag: "Client path",
    clientPathTitle: "What the page should make clear",
    clientPathSubtitle: "The target client must understand the result before they contact you.",
    outcomes: "Outcomes",
    process: "Process",
    searchDemand: "Search demand",
    faq: "FAQ",
    faqTitle: "Questions before starting",
    nextReadingTag: "Next reading",
    nextReadingTitle: "Useful guides before launch",
  },
  pl: {
    offer: "Oferta",
    clientPathTag: "Ścieżka klienta",
    clientPathTitle: "Co strona ma jasno pokazać",
    clientPathSubtitle: "Klient musi zrozumieć efekt zanim napisze.",
    outcomes: "Efekty",
    process: "Proces",
    searchDemand: "Zapytania",
    faq: "FAQ",
    faqTitle: "Pytania przed startem",
    nextReadingTag: "Dalej",
    nextReadingTitle: "Przydatne poradniki przed launch",
  },
  ru: {
    offer: "Оффер",
    clientPathTag: "Путь клиента",
    clientPathTitle: "Что страница должна объяснить",
    clientPathSubtitle: "Клиент должен понять результат до того, как напишет.",
    outcomes: "Результаты",
    process: "Процесс",
    searchDemand: "Запросы",
    faq: "FAQ",
    faqTitle: "Вопросы перед стартом",
    nextReadingTag: "Дальше",
    nextReadingTitle: "Полезные гайды перед запуском",
  },
  uk: {
    offer: "Офер",
    clientPathTag: "Шлях клієнта",
    clientPathTitle: "Що сторінка має пояснити",
    clientPathSubtitle: "Клієнт має зрозуміти результат до того, як напише.",
    outcomes: "Результати",
    process: "Процес",
    searchDemand: "Запити",
    faq: "FAQ",
    faqTitle: "Питання перед стартом",
    nextReadingTag: "Далі",
    nextReadingTitle: "Корисні гайди перед запуском",
  },
};

export function generateStaticParams() {
  return marketPageSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; market: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, market, slug } = await params;
  const page = getMarketPage(locale, market, slug);
  if (!page) return {};

  return buildSeoMetadata({
    locale,
    path: `/${market}/${slug}`,
    title: page.title,
    description: page.description,
  });
}

export default async function MarketLandingPage({
  params,
}: {
  params: Promise<{ locale: string; market: string; slug: string }>;
}) {
  const { locale, market, slug } = await params;
  setRequestLocale(locale);
  const page = getMarketPage(locale, market, slug);
  if (!page) notFound();
  const copy = labels[locale as Locale];

  const tCase = await getTranslations({ locale, namespace: `projects.${page.proofCaseSlug}` });

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceHref = `/services/${page.service}`;
  const orderHref = `/order?service=${page.service}`;
  const caseHref = `/projects/${page.proofCaseSlug}`;
  const relatedGuides = page.relatedGuides
    .map((guideSlug) => guides.find((guide) => guide.slug === guideSlug))
    .filter((guide): guide is Guide => Boolean(guide));

  return (
    <>
      <JsonLd data={faqLd} />

      <VintagePageHeader tag={page.tag} title={page.title} subtitle={page.description} />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border-l-4 border-[var(--vhs-acid)] pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
              {page.region}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[var(--vhs-body)]">
              {page.audience}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <VHSButton href={orderHref} variant="primary">
              {page.primaryCta} →
            </VHSButton>
            <VHSButton href={serviceHref} variant="secondary">
              {page.secondaryCta}
            </VHSButton>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <VintageBlock title={copy.offer}>
            <p className="type-body">{page.offer}</p>
          </VintageBlock>
          <VintageBlock title={page.proofLabel}>
            <p className="type-body">{page.proofText}</p>
            <div className="mt-5">
              <VHSButton href={caseHref} variant="secondary">
                {tCase("cardTitle")} →
              </VHSButton>
            </div>
          </VintageBlock>
        </section>

        <section className="mt-14 border-t border-[var(--doom-stone)]/50 pt-14">
          <VintageSectionHeader
            tag={copy.clientPathTag}
            title={copy.clientPathTitle}
            subtitle={copy.clientPathSubtitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <VintageBlock title={copy.outcomes}>
              <VintageBulletList items={page.outcomes} />
            </VintageBlock>
            <VintageBlock title={copy.process}>
              <ol className="space-y-3">
                {page.process.map((step, index) => (
                  <li key={step} className="flex gap-3 type-body">
                    <span className="font-mono text-xs text-[var(--vhs-acid)]">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </VintageBlock>
            <VintageBlock title={copy.searchDemand}>
              <VintageBulletList items={page.searchTargets} accent="bg-[var(--vhs-terminal)]" />
            </VintageBlock>
          </div>
        </section>

        <section className="mt-14 border-t border-[var(--doom-stone)]/50 pt-14">
          <VintageSectionHeader
            tag={copy.faq}
            title={copy.faqTitle}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {page.faq.map((item) => (
              <VintageBlock key={item.q} title={item.q}>
                <p className="type-body">{item.a}</p>
              </VintageBlock>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-[var(--doom-stone)]/50 pt-14">
          <VintageSectionHeader
            tag={copy.nextReadingTag}
            title={copy.nextReadingTitle}
            tagClassName="text-[var(--doom-red)]"
          />
          <div className="grid gap-3 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="border-2 border-[var(--doom-stone)] bg-[#101014] p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--vhs-muted)] transition-colors hover:border-[var(--vhs-acid)] hover:text-[var(--vhs-acid)]"
              >
                {guide.title[locale as Locale]} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 border-2 border-[var(--doom-stone)] bg-[#141418] p-6 text-center">
          <p className="type-h3">{page.title}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--vhs-muted)]">
            {page.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <VHSButton href={orderHref} variant="primary">
              {page.primaryCta} →
            </VHSButton>
            <VHSButton href={serviceHref} variant="secondary">
              {page.secondaryCta}
            </VHSButton>
          </div>
        </section>
      </main>
    </>
  );
}
