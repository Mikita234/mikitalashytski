type TimelineStep = {
  step: string;
  title: string;
  desc: string;
};

export function ProcessTimeline({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <div className="relative">
      <div
        className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--doom-red)] via-[var(--doom-stone)] to-[var(--doom-red)] sm:left-6"
        aria-hidden
      />

      <ol className="space-y-8 sm:space-y-10">
        {steps.map((step) => (
          <li key={step.step} className="relative pl-10 sm:pl-14">
            <div
              className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--doom-red)] bg-[#111] sm:left-4.5"
              aria-hidden
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--doom-red)]" />
            </div>

            <div className="border-2 border-[var(--doom-stone)] bg-[#121216] p-4 sm:p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-doom)] text-[9px] text-[var(--doom-red)] sm:text-[10px]">
                  STEP {step.step}
                </span>
                <span className="doom-stone-divider flex-1 max-w-[80px]" aria-hidden />
              </div>
              <h3 className="type-h3 mt-3">{step.title}</h3>
              <p className="type-body mt-3">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
