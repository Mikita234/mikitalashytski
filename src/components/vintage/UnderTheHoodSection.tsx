import { vintageUnderHood } from "@/content/home-vintage";

export function UnderTheHoodSection() {
  return (
    <section
      id="under-the-hood"
      className="scroll-mt-20 border-t border-white/10 bg-[#08080a] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
              ● {vintageUnderHood.tag}
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
              {vintageUnderHood.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {vintageUnderHood.subtitle}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {vintageUnderHood.cards.map((card, i) => (
                <article
                  key={card.title}
                  className="tech-spec-card group border-2 border-[var(--vhs-dirt)] bg-[#0e0e12] p-4 transition-colors hover:border-[var(--vhs-terminal)]/50 sm:p-5"
                >
                  <span className="font-mono text-[9px] text-[var(--vhs-red)]">
                    P{200 + i * 10}
                  </span>
                  <h3 className="mt-2 font-display text-lg uppercase text-[var(--vhs-white)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--vhs-muted)] sm:text-sm">
                    {card.text}
                  </p>
                  <span className="mt-3 inline-block font-mono text-[8px] uppercase text-[var(--vhs-terminal)] opacity-0 transition-opacity group-hover:opacity-100">
                    ▶ verified on this site
                  </span>
                </article>
              ))}
            </div>
          </div>

          <aside className="teletext-grid border-2 border-[#00f] p-3 font-mono text-[10px] leading-relaxed sm:p-4 sm:text-xs">
            <div className="bg-[#00f] px-2 py-1 text-center font-bold text-white">
              P300 TECH SPECS
            </div>
            <div className="mt-2 space-y-0.5">
              {vintageUnderHood.specs.map((line) => (
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
              <p>VIEW SOURCE → JSON-LD</p>
              <p>/robots.txt → AI BOTS OK</p>
              <p>/llms.txt → PUBLIC</p>
              <p>/sitemap.xml → 4 LOCALES</p>
            </div>
            <p className="mt-2 animate-pulse text-[#0f0]">█ SIGNAL LOCKED</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
