import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
}: {
  tag?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      }
    >
      {tag && <Tag>{tag}</Tag>}
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base text-muted sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

const sourceColors: Record<string, string> = {
  allegro: "text-orange-300 border-orange-400/20 bg-orange-400/5",
  ops: "text-emerald-300 border-emerald-400/20 bg-emerald-400/5",
  gsc: "text-sky-300 border-sky-400/20 bg-sky-400/5",
  lighthouse: "text-amber-300 border-amber-400/20 bg-amber-400/5",
  schema: "text-violet-300 border-violet-400/20 bg-violet-400/5",
  analytics: "text-cyan-300 border-cyan-400/20 bg-cyan-400/5",
};

export function SourceChip({
  source,
  label,
}: {
  source: string;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        sourceColors[source] ?? "text-muted border-border"
      }`}
    >
      {label}
    </span>
  );
}

export function MetricCard({
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
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {value}
        </span>
        {isPlaceholder && (
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-amber-400/70"
            title="placeholder"
          />
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
      <div className="mt-3">
        <SourceChip source={source} label={source} />
      </div>
    </div>
  );
}
