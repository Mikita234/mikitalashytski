"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import type { BeginnerStage } from "@/content/pipeline";
import { pipelineLabels } from "@/content/pipeline";

export function StepChecklist({
  stages,
  locale,
}: {
  stages: BeginnerStage[];
  locale: Locale;
}) {
  const labels = pipelineLabels[locale];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(code: string) {
    setChecked((prev) => ({ ...prev, [code]: !prev[code] }));
  }

  const doneCount = stages.filter((s) => checked[s.code]).length;

  return (
    <div>
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)]">
        {doneCount} / {stages.length} complete
      </p>
      <div className="grid gap-4">
        {stages.map((stage) => (
          <div
            key={stage.code}
            className={`grid gap-4 border p-5 sm:grid-cols-[72px_1fr] ${
              checked[stage.code]
                ? "border-[var(--vhs-acid)]/40 bg-[var(--vhs-acid)]/5"
                : "border-white/10 bg-[#101014]"
            }`}
          >
            <div className="flex flex-col items-start gap-3">
              <span className="font-display text-4xl leading-none text-[var(--doom-ammo)]">
                {stage.code}
              </span>
              <button
                type="button"
                onClick={() => toggle(stage.code)}
                className={`border px-2 py-1 font-mono text-[8px] uppercase tracking-widest ${
                  checked[stage.code]
                    ? "border-[var(--vhs-acid)] text-[var(--vhs-acid)]"
                    : "border-white/20 text-[var(--vhs-muted)] hover:border-[var(--vhs-acid)]"
                }`}
              >
                {checked[stage.code] ? "✓ done" : "mark"}
              </button>
            </div>
            <div>
              <h3 className="type-h3">{stage.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                {stage.body[locale]}
              </p>
              <p className="mt-4 border-l-2 border-[var(--vhs-acid)] pl-3 text-sm text-[var(--vhs-body)]">
                <span className="font-mono text-[9px] uppercase text-[var(--vhs-acid)]">
                  {labels.doneWhen}:{" "}
                </span>
                {stage.doneWhen[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stage.tips[locale].map((tip) => (
                  <span
                    key={tip}
                    className="border border-[var(--vhs-terminal)]/25 bg-[var(--vhs-terminal)]/5 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-terminal)]"
                  >
                    {tip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
