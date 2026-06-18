import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { ServiceSlug } from "@/content/services";
import { getServiceMeta } from "@/content/services";
import { formatPriceFrom } from "@/lib/pricing";
import { JsonLd } from "@/components/json-ld";
import { VintageBlock } from "./VintagePage";
import { VHSButton } from "./VHSButton";

type FaqItem = { q: string; a: string };

export async function ServicePageContent({ slug }: { slug: ServiceSlug }) {
  const meta = getServiceMeta(slug)!;
  const locale = await getLocale();
  const t = await getTranslations(`services.${slug}`);
  const tc = await getTranslations("services.common");
  const tCase = await getTranslations(`projects.${meta.caseSlug}`);

  const faq = t.raw("faq") as FaqItem[];
  const forWho = t.raw("forWho") as string[];
  const notForWho = t.raw("notForWho") as string[];
  const processSteps = t.raw("processSteps") as string[];
  const clientProvides = t.raw("clientProvides") as string[];
  const deliverables = t.raw("deliverables") as string[];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />

      <header className="border-b-2 border-[var(--vhs-dirt)] bg-[#0c0c0e] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#packages"
            className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
          >
            {tc("backToPackages")}
          </Link>
          <p className="mt-6 type-tag text-[var(--vhs-terminal)]">● {t("title")}</p>
          <h1 className="type-h1 mt-4">{t("title")}</h1>
          <p className="type-subtitle mt-4 max-w-2xl">{t("headline")}</p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <span className="border border-[var(--vhs-acid)] px-3 py-1 text-[var(--vhs-acid)]">
              {tc("from")} {formatPriceFrom(meta.priceFromPln, locale)}
            </span>
            <span className="border border-white/20 px-3 py-1 text-[var(--vhs-muted)]">
              {meta.timeline}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <VintageBlock title={tc("problem")}>
            <p className="type-body">{t("problem")}</p>
          </VintageBlock>
          <VintageBlock title={tc("solution")}>
            <p className="type-body">{t("solution")}</p>
          </VintageBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={tc("forWho")}>
            <ul className="space-y-2">
              {forWho.map((item) => (
                <li key={item} className="flex gap-3 type-body">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--vhs-terminal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </VintageBlock>
          <VintageBlock title={tc("notForWho")}>
            <ul className="space-y-2">
              {notForWho.map((item) => (
                <li key={item} className="flex gap-3 type-body text-[var(--vhs-muted)]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--vhs-muted)]" />
                  {item}
                </li>
              ))}
            </ul>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title={tc("exampleResult")}>
            <p className="type-body">{t("exampleResult")}</p>
          </VintageBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={tc("process")}>
            <ol className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-3 type-body">
                  <span className="font-mono text-xs text-[var(--vhs-acid)]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </VintageBlock>
          <VintageBlock title={tc("clientProvides")}>
            <ul className="space-y-2">
              {clientProvides.map((item) => (
                <li key={item} className="flex gap-3 type-body">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--vhs-acid)]" />
                  {item}
                </li>
              ))}
            </ul>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title={tc("deliverables")}>
            <ul className="space-y-2">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 type-body">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--vhs-terminal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </VintageBlock>
        </div>

        <div className="mt-8 rounded border border-[var(--doom-stone)] bg-[var(--doom-panel)] p-6 text-center">
          <p className="type-h3">{tc("ctaMid")}</p>
          <div className="mt-4">
            <VHSButton href={`/order?service=${slug === "automation" ? "automation" : slug}`} variant="primary">
              {tc("ctaMidButton")} →
            </VHSButton>
          </div>
        </div>

        <div className="mt-4">
          <VintageBlock title={tc("miniCase")}>
            <p className="type-body">{t("miniCase")}</p>
            <div className="mt-4">
              <VHSButton href={`/projects/${meta.caseSlug}`} variant="secondary">
                {tc("viewCase")}: {tCase("cardTitle")} →
              </VHSButton>
            </div>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title={tc("faq")}>
            <dl className="space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <dt className="type-h3">{item.q}</dt>
                  <dd className="type-body mt-1">{item.a}</dd>
                </div>
              ))}
            </dl>
          </VintageBlock>
        </div>

        <div className="mt-10 text-center">
          <VHSButton href={`/order?service=${slug === "creative" ? "business" : slug}`} variant="primary">
            {t("ctaBottom")} →
          </VHSButton>
        </div>
      </div>
    </>
  );
}
