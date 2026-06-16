"use client";

import { VintageBulletList } from "@/components/vintage/VintagePage";

type Props = {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  before: string[];
  after: string[];
  accent?: string;
  afterLabelClass?: string;
};

export function BeforeAfterBlock({
  title,
  beforeLabel,
  afterLabel,
  before,
  after,
  accent = "bg-[var(--vhs-terminal)]",
  afterLabelClass = "text-[var(--vhs-terminal)]",
}: Props) {
  return (
    <div className="border-2 border-[var(--vhs-dirt)] bg-[#121216]">
      <h2 className="border-b border-white/10 px-5 py-4 font-display text-lg uppercase tracking-wide text-[var(--vhs-white)] sm:px-6 sm:text-xl">
        {title}
      </h2>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-red)]">
            {beforeLabel}
          </p>
          <VintageBulletList items={before} accent="bg-[var(--vhs-red)]" />
        </div>
        <div className="p-5 sm:p-6">
          <p className={`mb-4 font-mono text-[10px] uppercase tracking-[0.3em] ${afterLabelClass}`}>
            {afterLabel}
          </p>
          <VintageBulletList items={after} accent={accent} />
        </div>
      </div>
    </div>
  );
}
