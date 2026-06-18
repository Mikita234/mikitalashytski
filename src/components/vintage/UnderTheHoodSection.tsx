"use client";

import { useTranslations } from "next-intl";
import { vintageUnderHoodSpecs } from "@/content/home-vintage";
import { VintageSectionHeader } from "./VintagePage";

export function UnderTheHoodSection() {
  const t = useTranslations("home.underHood");
  const cards = t.raw("cards") as { title: string; text: string }[];

  return (
    <section
      id="under-the-hood"
      className="scroll-mt-20 border-t border-[var(--doom-stone)]/40 bg-[#08080a] section-spacing"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <VintageSectionHeader
              tag={t("tag")}
              title={t("title")}
              subtitle={t("subtitle")}
              tagClassName="text-[var(--vhs-terminal)]"
            />

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {cards.map((card, i) => (
                <article
                  key={card.title}
                  className="tech-spec-card group border-2 border-[var(--doom-stone)] bg-[#0e0e12] p-4 transition-colors hover:border-[var(--doom-red)]/50 sm:p-5"
                >
                  <span className="font-[family-name:var(--font-doom)] text-[8px] text-[var(--doom-red)]">
                    P{200 + i * 10}
                  </span>
                  <h3 className="type-h3 mt-2">{card.title}</h3>
                  <p className="type-body mt-2 text-sm">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="teletext-grid border-2 border-[#00f] p-3 font-mono text-[10px] leading-relaxed sm:p-4 sm:text-xs">
            <div className="bg-[#00f] px-2 py-1 text-center font-bold text-white">
              P300 TECH SPECS
            </div>
            <div className="mt-2 space-y-0.5">
              {vintageUnderHoodSpecs.map((line) => (
                <p
                  key={line.label}
                  className="px-1"
                  style={{ background: line.bg, color: line.fg }}
                >
                  ▶ {line.label}: {line.value}
                </p>
              ))}
            </div>
            <div className="mt-3 border-t border-white/20 pt-2 text-[#ccc]">
              <p>{t("viewSource")}</p>
              <p>/robots.txt → AI BOTS OK</p>
              <p>/llms.txt → PUBLIC</p>
              <p>/sitemap.xml → 4 LOCALES</p>
            </div>
            <p className="mt-2 text-[8px] text-[var(--vhs-muted)]">● ONLINE</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
