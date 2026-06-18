"use client";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import { site } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { PlaybackState } from "@/hooks/use-vhs-playback";
type Props = { selectedCase: CaseTape | null; playbackState: PlaybackState };
const IDLE = ["> archive ready", "> 5 case tapes loaded", "> deck idle", `> ${site.telegramHandle}`];
export function TerminalStrip({ selectedCase, playbackState }: Props) {
  const t = useTranslations("home.workstation");
  const reduced = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(IDLE.length);
  const lines = useMemo(() => {
    if (playbackState === "playing" && selectedCase) return selectedCase.terminalLines;
    if (playbackState === "loading") return ["> reading tape...", "> loading case preview..."];
    if (selectedCase) return [`> tape: ${selectedCase.shortLabel}`, `> type: ${selectedCase.type}`, "> press PLAY on deck"];
    return IDLE;
  }, [playbackState, selectedCase]);
  useEffect(() => {
    if (reduced) { setVisibleCount(lines.length); return; }
    setVisibleCount(0);
    const timers = lines.map((_, i) => setTimeout(() => setVisibleCount(i + 1), 100 + i * 160));
    return () => timers.forEach(clearTimeout);
  }, [lines, reduced, selectedCase?.slug, playbackState]);
  return (
    <div className="crt-terminal-strip" aria-label={t("terminalLabel")}>
      <p className="crt-terminal-strip__title">{t("terminalTitle")}</p>
      <div className="crt-terminal-strip__body">
        {lines.slice(0, visibleCount).map((line, i) => (<div key={`${line}-${i}`} className="phosphor-text text-[10px] sm:text-[11px]">{line}</div>))}
        {!reduced && visibleCount < lines.length && <span className="crt-terminal-strip__cursor" aria-hidden />}
      </div>
    </div>
  );
}
