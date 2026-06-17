import { Link } from "@/i18n/navigation";
import type { servicePages } from "@/content/services";
import { JsonLd } from "@/components/json-ld";
import { VintageBlock } from "./VintagePage";
import { VHSButton } from "./VHSButton";

type Service = (typeof servicePages)[number];

export function ServicePageContent({ service }: { service: Service }) {
  const faq = "faq" in service ? service.faq : [];
  const faqLd = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      {faqLd && <JsonLd data={faqLd} />}

      <header className="border-b-2 border-[var(--vhs-dirt)] bg-[#0c0c0e] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#packages"
            className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
          >
            ← All packages
          </Link>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
            ● SERVICE CHANNEL
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-[var(--vhs-white)] sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--vhs-beige)]">
            {service.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <span className="border border-[var(--vhs-acid)] px-3 py-1 text-[var(--vhs-acid)]">
              from {service.priceFrom}
            </span>
            <span className="border border-white/20 px-3 py-1 text-[var(--vhs-muted)]">
              {service.timeline}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <VintageBlock title="Client problem">
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {service.problem}
            </p>
          </VintageBlock>
          <VintageBlock title="What I do">
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {service.solution}
            </p>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title="What's included">
            <ul className="space-y-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--vhs-muted)] sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--vhs-terminal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title="Portfolio examples">
            <div className="flex flex-wrap gap-2">
              {service.examples.map((ex) => (
                <span
                  key={ex}
                  className="border border-white/15 px-2 py-1 font-mono text-[10px] text-[var(--vhs-muted)]"
                >
                  {ex}
                </span>
              ))}
            </div>
          </VintageBlock>
        </div>

        {faq.length > 0 && (
          <div className="mt-4">
            <VintageBlock title="FAQ">
              <dl className="space-y-4">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-display text-base uppercase text-[var(--vhs-white)]">
                      {item.q}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </VintageBlock>
          </div>
        )}

        <div className="mt-10 text-center">
          <VHSButton href="/order" variant="primary">
            {service.cta} →
          </VHSButton>
        </div>
      </div>
    </>
  );
}
