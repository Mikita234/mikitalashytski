import type { ReactNode } from "react";

export function VintagePageHeader({
  tag,
  title,
  subtitle,
  channel = "CH-404",
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  channel?: string;
}) {
  return (
    <header className="border-b-2 border-[var(--vhs-dirt)] bg-[#0c0c0e] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
          ● {tag} — CHANNEL {channel}
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-[var(--vhs-white)] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--vhs-muted)] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

export function VintageBlock({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-[var(--vhs-dirt)] bg-[#121216] p-5 sm:p-6 ${className}`}
    >
      <h2 className="border-b border-white/10 pb-3 font-display text-lg uppercase tracking-wide text-[var(--vhs-white)] sm:text-xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function VintageBulletList({
  items,
  accent = "bg-[var(--vhs-acid)]",
}: {
  items: string[];
  accent?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-[var(--vhs-muted)] sm:text-base">
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 ${accent}`}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function VintageMetricCard({
  value,
  label,
  source,
  isPlaceholder,
}: {
  value: string;
  label: string;
  source: string;
  isPlaceholder?: boolean;
}) {
  return (
    <div className="border-2 border-[var(--vhs-dirt)] bg-[#141418] p-4 sm:p-5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-2xl font-bold text-[var(--vhs-white)] sm:text-3xl">
          {value}
        </span>
        {isPlaceholder && (
          <span
            className="h-2 w-2 shrink-0 bg-[var(--vhs-yellow)]"
            title="placeholder"
          />
        )}
      </div>
      <p className="mt-2 text-xs text-[var(--vhs-muted)] sm:text-sm">{label}</p>
      <span className="mt-3 inline-block border border-white/15 px-2 py-0.5 font-mono text-[9px] uppercase text-[var(--vhs-terminal)]">
        {source}
      </span>
    </div>
  );
}

export function VintageSchemaTag({ label }: { label: string }) {
  return (
    <span className="border border-[var(--vhs-terminal)]/30 bg-[var(--vhs-terminal)]/5 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-terminal)]">
      {label}
    </span>
  );
}
