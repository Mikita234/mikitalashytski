"use client";

import { Link } from "@/i18n/navigation";

type PackageCardProps = {
  title: string;
  desc: string;
  priceFrom: string;
  timeline: string;
  tag: string;
  href: string;
};

const icons: Record<string, string> = {
  "PKG-01": "▶",
  "PKG-02": "◆",
  "PKG-03": "◎",
  "PKG-04": "◉",
};

export function PackageCard({
  title,
  desc,
  priceFrom,
  timeline,
  tag,
  href,
}: PackageCardProps) {
  return (
    <Link
      href={href}
      className="group block border-2 border-[var(--vhs-dirt)] bg-[#141418] transition-transform hover:-translate-y-1"
    >
      <div className="flex h-14 items-center justify-center border-b border-white/10 bg-gradient-to-r from-[var(--vhs-red)]/10 to-transparent">
        <span className="font-mono text-2xl text-[var(--vhs-acid)]">
          {icons[tag] ?? "●"}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-muted)]">
            {tag}
          </span>
          <span className="font-mono text-[9px] font-bold text-[var(--vhs-terminal)]">
            от {priceFrom}
          </span>
        </div>
        <h3 className="font-display text-xl uppercase text-[var(--vhs-white)] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)]">
          {desc}
        </p>
        <p className="mt-3 font-mono text-[9px] text-[var(--vhs-beige)]">
          Срок: {timeline}
        </p>
        <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
          Подробнее →
        </span>
      </div>
    </Link>
  );
}
