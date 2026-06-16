"use client";

import { useState } from "react";

const serviceVisuals: Record<string, { icon: string; color: string }> = {
  landing: { icon: "▶", color: "var(--vhs-red)" },
  nextjs: { icon: "◆", color: "var(--vhs-terminal)" },
  bots: { icon: "◎", color: "var(--vhs-acid)" },
  auto: { icon: "⚙", color: "var(--vhs-beige)" },
  seo: { icon: "◉", color: "#00bfff" },
  weird: { icon: "✦", color: "var(--vhs-yellow)" },
};

type ServiceCardProps = {
  id: string;
  title: string;
  desc: string;
  tag: string;
};

export function ServiceCard({ id, title, desc, tag }: ServiceCardProps) {
  const [hover, setHover] = useState(false);
  const visual = serviceVisuals[id] ?? { icon: "●", color: "var(--vhs-muted)" };

  return (
    <article
      className={`group relative overflow-hidden border-2 border-[var(--vhs-dirt)] bg-[#141418] transition-transform ${
        hover ? "-translate-x-0.5 translate-y-0.5" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Visual header strip */}
      <div
        className="flex h-16 items-center justify-center border-b border-white/10 transition-colors"
        style={{
          background: hover
            ? `linear-gradient(135deg, ${visual.color}22, transparent)`
            : "linear-gradient(135deg, rgba(255,255,255,0.03), transparent)",
        }}
      >
        <span
          className="font-mono text-3xl transition-transform group-hover:scale-110"
          style={{ color: visual.color }}
        >
          {visual.icon}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-muted)]">
            {tag}
          </span>
          {hover && (
            <span className="font-mono text-[8px] text-[var(--vhs-red)] rec-blink">
              ● REC
            </span>
          )}
        </div>

        <h3 className="font-display text-xl uppercase tracking-wide text-[var(--vhs-white)] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)]">
          {desc}
        </p>

        {hover && (
          <span className="mt-3 inline-block font-mono text-[9px] uppercase text-[var(--vhs-acid)]">
            ▶ PLAY
          </span>
        )}
      </div>

      {hover && (
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/20"
          aria-hidden
        />
      )}
    </article>
  );
}
