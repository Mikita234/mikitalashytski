"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import { site } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { PlaybackState } from "./VhsWorkstation";

type Props = {
  selectedCase: CaseTape | null;
  playbackState: PlaybackState;
};

const IDLE_LINES = [
  "> archive: ready",
  "> tapes: 5 loaded",
  "> deck: idle",
  `> contact: ${site.telegramHandle}`,
];

export function TerminalPanel({ selectedCase, playbackState }: Props) {
  const t = useTranslations("home.workstation");
  const reduced = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(IDLE_LINES.length);

  const lines = useMemo(() => {
    if (playbackState === "playing" && selectedCase) {
      return selectedCase.terminalLines;
    }
    if (playbackState === "loading") {
      return ["> reading tape...", "> decoding case..."];
    }
    return IDLE_LINES;
  }, [playbackState, selectedCase]);

  useEffect(() => {
    if (reduced) {
      setVisibleCount(lines.length);
      return;
    }

    setVisibleCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), 120 + i * 180),
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [lines, reduced, selectedCase?.slug, playbackState]);

  return (
    <div
      className="vhs-terminal-panel flex min-h-[88px] flex-col border border-[var(--vhs-terminal)]/30 bg-black/80 p-3 font-mono text-[9px] leading-relaxed text-[var(--vhs-terminal)] sm:text-[10px]"
      aria-label={t("terminalLabel")}
    >
      <p className="mb-2 text-[7px] uppercase tracking-[0.3em] text-[var(--vhs-muted)]">
        {t("terminalTitle")}
      </p>
      <div className="flex-1">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={`${line}-${i}`}>{line}</div>
        ))}
        {!reduced && visibleCount < lines.length && (
          <span className="inline-block w-2 animate-pulse bg-[var(--vhs-terminal)]">
            {" "}
          </span>
        )}
        {reduced && (
          <span className="inline-block w-2 bg-[var(--vhs-terminal)]">_</span>
        )}
      </div>
    </div>
  );
}
