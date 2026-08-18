"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DoomCornerFrame } from "./DoomCornerFrame";
import { VintageSectionHeader } from "./VintagePage";

const evidenceItems = [
  {
    id: "kayer",
    href: "/projects/kayer-pl",
    image: "/cases/kayer/pl-gsc-3-months.png",
  },
  {
    id: "popular",
    href: "/projects/popular",
    image: "/cases/popular/tickets-gsc-3-months.png",
  },
] as const;

type EvidenceCopy = {
  tag: string;
  title: string;
  subtitle: string;
  counter: string;
  items: Record<
    (typeof evidenceItems)[number]["id"],
    {
      project: string;
      result: string;
      details: string;
      source: string;
      period: string;
      cta: string;
      alt: string;
    }
  >;
};

export function HomepageEvidence() {
  const t = useTranslations("home");
  const copy = t.raw("evidence") as EvidenceCopy;

  return (
    <section
      id="results"
      className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 bg-[#0a0a0d] section-glow-terminal section-spacing"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <VintageSectionHeader
            tag={copy.tag}
            title={copy.title}
            subtitle={copy.subtitle}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <span className="shrink-0 border border-[var(--vhs-terminal)]/35 bg-[var(--vhs-terminal)]/5 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--vhs-terminal)]">
            {copy.counter}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {evidenceItems.map((item) => {
            const card = copy.items[item.id];

            return (
              <DoomCornerFrame key={item.id} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden border-2 border-[var(--doom-stone)] bg-[#121216] transition-colors hover:border-[var(--vhs-terminal)]/70">
                  <div className="relative h-56 overflow-hidden border-b-2 border-[var(--doom-stone)] bg-[#edf2fa] sm:h-72">
                    <Image
                      src={item.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                    <span className="absolute left-3 top-3 border border-black/15 bg-white/95 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[#263247] shadow-sm">
                      {card.source}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
                      <span className="text-[var(--vhs-acid)]">{card.project}</span>
                      <span className="text-[var(--vhs-muted)]">{card.period}</span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl uppercase leading-none text-[var(--vhs-white)] sm:text-4xl">
                      {card.result}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--vhs-body)] sm:text-base">
                      {card.details}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex w-fit border-b border-[var(--vhs-terminal)]/50 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--vhs-terminal)] transition-colors hover:border-[var(--vhs-white)] hover:text-[var(--vhs-white)]"
                      data-analytics-event="case_open"
                      data-analytics-location="home_evidence"
                    >
                      {card.cta} →
                    </Link>
                  </div>
                </article>
              </DoomCornerFrame>
            );
          })}
        </div>
      </div>
    </section>
  );
}
