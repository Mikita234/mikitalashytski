"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { getCaseTape, type CaseTape, type CaseTapeSlug } from "@/content/case-tapes";
export type PlaybackState = "idle" | "loading" | "playing";
function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600); const m = Math.floor((totalSeconds % 3600) / 60); const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}
export function useVhsPlayback() {
  const [loadedSlug, setLoadedSlug] = useState<CaseTapeSlug | null>(null);
  const [insertingSlug, setInsertingSlug] = useState<CaseTapeSlug | null>(null);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("idle");
  const [seconds, setSeconds] = useState(0);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectedCase: CaseTape | null = loadedSlug ? getCaseTape(loadedSlug) ?? null : null;
  const clearLoadingTimer = useCallback(() => { if (loadingTimer.current) { clearTimeout(loadingTimer.current); loadingTimer.current = null; } }, []);
  useEffect(() => () => clearLoadingTimer(), [clearLoadingTimer]);
  useEffect(() => { if (playbackState !== "playing") return; const id = setInterval(() => setSeconds((s) => s + 1), 1000); return () => clearInterval(id); }, [playbackState]);
  const selectTape = useCallback((slug: CaseTapeSlug) => {
    if (insertingSlug) return; clearLoadingTimer(); setPlaybackState("idle"); setSeconds(0); setInsertingSlug(slug);
    setTimeout(() => { setLoadedSlug(slug); setInsertingSlug(null); }, 300);
  }, [clearLoadingTimer, insertingSlug]);
  const play = useCallback(() => {
    if (!loadedSlug || playbackState === "loading") return; clearLoadingTimer(); setPlaybackState("loading"); setSeconds(0);
    loadingTimer.current = setTimeout(() => { setPlaybackState("playing"); loadingTimer.current = null; }, 900);
  }, [clearLoadingTimer, loadedSlug, playbackState]);
  const rewind = useCallback(() => { clearLoadingTimer(); setPlaybackState("idle"); setSeconds(0); }, [clearLoadingTimer]);
  const eject = useCallback(() => { clearLoadingTimer(); setLoadedSlug(null); setInsertingSlug(null); setPlaybackState("idle"); setSeconds(0); }, [clearLoadingTimer]);
  const canPlay = !!loadedSlug && playbackState !== "playing" && playbackState !== "loading";
  return { loadedSlug, insertingSlug, selectedCase, playbackState, timeCounter: formatTime(seconds), canPlay, selectTape, play, rewind, eject };
}
