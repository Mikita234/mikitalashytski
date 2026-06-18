"use client";

import { useTranslations } from "next-intl";

type Props = {
  tapeLabel: string;
  status: string;
  timeCounter: string;
};

export function VhsStatusBar({ tapeLabel, status, timeCounter }: Props) {
  const t = useTranslations("home.workstation");

  return (
    <div className="vhs-status-bar mx-auto flex w-full max-w-md items-center gap-3 px-3 py-2">
      <span className="min-w-0 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--vhs-muted)]">
        {tapeLabel}
      </span>
      <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--vhs-red)] rec-blink">
        <span aria-hidden>●</span>
        {t("play")}
      </span>
      <span
        className="ml-auto shrink-0 font-mono text-sm tabular-nums tracking-widest text-[var(--vhs-terminal)]"
        aria-live="polite"
      >
        {timeCounter}
      </span>
      <span className="sr-only">{status}</span>
    </div>
  );
}
