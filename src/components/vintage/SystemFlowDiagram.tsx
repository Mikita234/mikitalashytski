"use client";

type Props = {
  title: string;
  steps: string[];
  accent?: string;
};

export function SystemFlowDiagram({
  title,
  steps,
  accent = "var(--vhs-terminal)",
}: Props) {
  return (
    <div className="relative overflow-hidden border-2 border-[var(--vhs-dirt)] bg-[#0a0a0e]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 4px)",
        }}
        aria-hidden
      />

      <div className="relative border-b border-white/10 px-4 py-3 sm:px-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--vhs-red)] rec-blink">
          ● REC — SYSTEM FLOW
        </p>
        <h3 className="mt-1 font-display text-lg uppercase tracking-wide text-[var(--vhs-white)] sm:text-xl">
          {title}
        </h3>
      </div>

      <div className="relative px-4 py-6 sm:px-6 sm:py-8">
        <ol className="mx-auto flex max-w-md flex-col items-stretch gap-0">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col items-center">
              <div
                className="w-full border-2 px-4 py-3 text-center font-mono text-[11px] uppercase leading-snug tracking-wide text-[var(--vhs-beige)] sm:text-xs"
                style={{
                  borderColor: `${accent}66`,
                  background: `linear-gradient(135deg, ${accent}18, #121216 60%)`,
                  boxShadow: `0 0 20px -8px ${accent}`,
                }}
              >
                <span className="mr-2 text-[var(--vhs-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </div>
              {i < steps.length - 1 && (
                <span
                  className="my-1 font-mono text-lg leading-none text-[var(--vhs-acid)]"
                  aria-hidden
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center font-mono text-[8px] uppercase tracking-[0.25em] text-[var(--vhs-muted)]">
          automation-first · PL / UA / EN
        </p>
      </div>
    </div>
  );
}
