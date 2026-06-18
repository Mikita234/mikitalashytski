import type { ReactNode } from "react";
import { DoomCornerFrame } from "./DoomCornerFrame";

export function VintagePageHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="border-b-2 border-[var(--doom-stone)] bg-[#0c0c0e] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="type-tag text-[var(--vhs-terminal)]">
          ● {tag}
        </p>
        <h1 className="type-h1 mt-5">{title}</h1>
        {subtitle && (
          <p className="type-subtitle mt-5 max-w-2xl">{subtitle}</p>
        )}
        <div className="doom-stone-divider mt-8 max-w-md" aria-hidden />
      </div>
    </header>
  );
}

export function VintageSectionHeader({
  tag,
  title,
  subtitle,
  tagClassName = "text-[var(--doom-red)]",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  tagClassName?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className={`type-tag ${tagClassName}`}>● {tag}</p>
      <h2 className="type-h2 mt-3">{title}</h2>
      {subtitle && (
        <p className="type-subtitle mt-3 max-w-lg">{subtitle}</p>
      )}
      <div className="doom-stone-divider mt-6 max-w-xs" aria-hidden />
    </div>
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
    <DoomCornerFrame>
      <div
        className={`border-2 border-[var(--doom-stone)] bg-[#121216] p-5 sm:p-6 ${className}`}
      >
        <h3 className="type-h3 border-b border-[var(--doom-stone)]/60 pb-3">
          {title}
        </h3>
        <div className="mt-4">{children}</div>
      </div>
    </DoomCornerFrame>
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
        <li key={i} className="flex gap-3 type-body">
          <span
            className={`mt-2.5 h-1.5 w-1.5 shrink-0 ${accent}`}
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
  estimatedLabel,
}: {
  value: string;
  label: string;
  source: string;
  isPlaceholder?: boolean;
  estimatedLabel?: string;
}) {
  return (
    <DoomCornerFrame>
      <div className="border-2 border-[var(--doom-stone)] bg-[#141418] p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="type-h2 text-[var(--doom-ammo)]">{value}</span>
          {isPlaceholder && estimatedLabel && (
            <span className="font-mono text-[8px] uppercase tracking-wide text-[var(--vhs-yellow)]">
              {estimatedLabel}
            </span>
          )}
        </div>
        <p className="type-body mt-2 text-sm">{label}</p>
        <span className="doom-metric mt-3 inline-block border border-[var(--doom-border)] bg-[var(--doom-panel)] px-2 py-0.5">
          {source}
        </span>
      </div>
    </DoomCornerFrame>
  );
}

export function VintageSchemaTag({ label }: { label: string }) {
  return (
    <span className="border border-[var(--vhs-terminal)]/30 bg-[var(--vhs-terminal)]/5 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-terminal)]">
      {label}
    </span>
  );
}
