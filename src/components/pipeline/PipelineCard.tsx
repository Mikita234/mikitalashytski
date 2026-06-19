import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { ProjectPipeline } from "@/data/pipelines";
import { pipelineLabels } from "@/content/pipeline";

export function PipelineCard({
  pipeline,
  locale,
}: {
  pipeline: ProjectPipeline;
  locale: Locale;
}) {
  const labels = pipelineLabels[locale];

  return (
    <Link
      href={`/pipeline/${pipeline.id}`}
      className="group relative min-h-[240px] overflow-hidden border-2 border-[var(--doom-stone)] bg-[#141418] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--vhs-acid)]"
    >
      <div className="absolute inset-x-0 top-0 h-8 border-b border-black/40 bg-[repeating-linear-gradient(90deg,#1e1e24_0,#1e1e24_14px,#0a0a0a_14px,#0a0a0a_18px)]" />
      <div className="relative pt-8">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
            {pipeline.tag}
          </span>
          {pipeline.isDefault && (
            <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--vhs-acid)]">
              DEFAULT
            </span>
          )}
        </div>
        <h2 className="mt-5 font-display text-2xl uppercase leading-none text-[var(--vhs-white)] sm:text-3xl">
          {pipeline.title[locale]}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--vhs-muted)]">
          {pipeline.description[locale]}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {pipeline.recommendedStack.slice(0, 3).map((stack) => (
            <span
              key={stack}
              className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]"
            >
              {stack}
            </span>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
          {labels.readMore}
        </p>
      </div>
    </Link>
  );
}
