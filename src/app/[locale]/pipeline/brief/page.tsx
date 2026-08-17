import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { BriefBuilder } from "@/components/pipeline/BriefBuilder";
import { VHSButton } from "@/components/vintage/VHSButton";
import { VintagePageHeader, VintageSectionHeader } from "@/components/vintage/VintagePage";
import { buildSeoMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { briefPage } from "@/content/pipeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const copy = briefPage[l];
  return buildSeoMetadata({
    locale,
    path: "/pipeline/brief",
    title: copy.title,
    description: copy.subtitle,
  });
}

export default async function PipelineBriefPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const copy = briefPage[l];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.seo.sections.map((section) => ({
      "@type": "Question",
      name: section.heading,
      acceptedAnswer: { "@type": "Answer", text: section.body },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <VintagePageHeader tag={copy.tag} title={copy.title} subtitle={copy.subtitle} />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <article className="overflow-hidden border-2 border-[var(--doom-stone)] bg-[#101014]">
          <div className="border-b border-white/10 bg-[#17171c] px-5 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
              ● {copy.seo.label} / SEO / AEO / 2026
            </p>
          </div>
          <p className="border-b border-white/10 p-5 text-base leading-7 text-[var(--vhs-body)] sm:p-8 sm:text-lg">
            {copy.seo.intro}
          </p>
          <div className="grid gap-x-10 gap-y-10 p-5 sm:p-8 lg:grid-cols-2">
            {copy.seo.sections.map((section, index) => (
              <section key={section.heading} className={index === 0 ? "lg:col-span-2 lg:max-w-4xl" : undefined}>
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-1 font-mono text-[10px] text-[var(--vhs-acid)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl uppercase leading-none text-[var(--vhs-white)] sm:text-4xl">
                    {section.heading}
                  </h2>
                </div>
                <p className="border-l border-white/10 pl-7 text-[15px] leading-7 text-[var(--vhs-body)]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>

        <section className="mt-12">
          <VintageSectionHeader tag={copy.tag} title={copy.seo.builderTitle} tagClassName="text-[var(--vhs-acid)]" />
          <p className="mb-6 max-w-3xl text-base leading-7 text-[var(--vhs-muted)]">
            {copy.seo.builderBody}
          </p>
        </section>
        <BriefBuilder locale={l} />
        <div className="mt-10 text-center">
          <VHSButton href="/order?service=business" variant="primary">
            {copy.seo.cta} →
          </VHSButton>
        </div>
      </main>
    </>
  );
}
