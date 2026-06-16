type TimelineStep = {
  step: string;
  title: string;
  desc: string;
};

export function ProcessTimeline({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <div className="relative">
      {/* VHS tape strip */}
      <div
        className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--vhs-red)] via-[var(--vhs-dirt)] to-[var(--vhs-red)] sm:left-6"
        aria-hidden
      />

      <ol className="space-y-6 sm:space-y-8">
        {steps.map((step) => (
          <li key={step.step} className="relative pl-10 sm:pl-14">
            {/* Tape reel dot */}
            <div
              className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--vhs-red)] bg-[#111] sm:left-4.5"
              aria-hidden
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--vhs-red)]" />
            </div>

            <div className="border-2 border-[var(--vhs-dirt)] bg-[#121216] p-4 sm:p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--vhs-red)] sm:text-sm">
                  STEP {step.step}
                </span>
                <span className="font-mono text-[9px] text-[var(--vhs-muted)]">
                  ═══════
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg uppercase text-[var(--vhs-white)] sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)]">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
