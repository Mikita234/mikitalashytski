import { Link } from "@/i18n/navigation";
import type { servicePages } from "@/content/services";
import { VintageBlock } from "./VintagePage";
import { VHSButton } from "./VHSButton";

type Service = (typeof servicePages)[number];

export function ServicePageContent({ service }: { service: Service }) {
  return (
    <>
      <header className="border-b-2 border-[var(--vhs-dirt)] bg-[#0c0c0e] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#services"
            className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
          >
            ← Все пакеты
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
              от {service.priceFrom}
            </span>
            <span className="border border-white/20 px-3 py-1 text-[var(--vhs-muted)]">
              {service.timeline}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <VintageBlock title="Проблема клиента">
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {service.problem}
            </p>
          </VintageBlock>
          <VintageBlock title="Что я делаю">
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {service.solution}
            </p>
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title="Что входит">
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
          <VintageBlock title="Примеры из портфолио">
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

        <div className="mt-10 text-center">
          <VHSButton href="/contact" variant="primary">
            {service.cta} →
          </VHSButton>
        </div>
      </div>
    </>
  );
}
