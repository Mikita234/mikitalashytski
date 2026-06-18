"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import {
  getCaseTape,
  type CaseTape,
  type CaseTapeSlug,
} from "@/content/case-tapes";
import { CaseTapeArchive } from "./CaseTapeArchive";
import { VhsDeck } from "./VhsDeck";

const CrtCaseViewer = dynamic(
  () => import("./CrtCaseViewer").then((m) => ({ default: m.CrtCaseViewer })),
  { loading: () => <div className="mx-auto aspect-[4/3] w-full max-w-md animate-pulse rounded-lg bg-[#111]" /> },
);

const TerminalPanel = dynamic(
  () => import("./TerminalPanel").then((m) => ({ default: m.TerminalPanel })),
  { loading: () => <div className="h-[88px] animate-pulse bg-black/60" /> },
);

const RetroWindowsPanel = dynamic(
  () =>
    import("./RetroWindowsPanel").then((m) => ({
      default: m.RetroWindowsPanel,
    })),
  { loading: () => <div className="h-20 animate-pulse bg-[#c0c0c0]/20" /> },
);

export type PlaybackState = "idle" | "loading" | "playing";

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export function VhsWorkstation() {
  const t = useTranslations("home.workstation");
  const [loadedSlug, setLoadedSlug] = useState<CaseTapeSlug | null>(null);
  const [insertingSlug, setInsertingSlug] = useState<CaseTapeSlug | null>(null);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("idle");
  const [seconds, setSeconds] = useState(0);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedCase: CaseTape | null = loadedSlug
    ? getCaseTape(loadedSlug) ?? null
    : null;

  const clearLoadingTimer = useCallback(() => {
    if (loadingTimer.current) {
      clearTimeout(loadingTimer.current);
      loadingTimer.current = null;
    }
  }, []);

  useEffect(() => () => clearLoadingTimer(), [clearLoadingTimer]);

  useEffect(() => {
    if (playbackState !== "playing") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [playbackState]);

  const handleSelectTape = useCallback(
    (tape: CaseTape) => {
      if (insertingSlug) return;
      clearLoadingTimer();
      setPlaybackState("idle");
      setSeconds(0);
      setInsertingSlug(tape.slug);

      setTimeout(() => {
        setLoadedSlug(tape.slug);
        setInsertingSlug(null);
      }, 600);
    },
    [clearLoadingTimer, insertingSlug],
  );

  const handlePlay = useCallback(() => {
    if (!loadedSlug || playbackState === "loading") return;
    clearLoadingTimer();
    setPlaybackState("loading");
    setSeconds(0);

    loadingTimer.current = setTimeout(() => {
      setPlaybackState("playing");
      loadingTimer.current = null;
    }, 1400);
  }, [clearLoadingTimer, loadedSlug, playbackState]);

  const handleStop = useCallback(() => {
    clearLoadingTimer();
    setPlaybackState("idle");
    setSeconds(0);
  }, [clearLoadingTimer]);

  const handleRewind = useCallback(() => {
    clearLoadingTimer();
    setPlaybackState("idle");
    setSeconds(0);
  }, [clearLoadingTimer]);

  const handleEject = useCallback(() => {
    clearLoadingTimer();
    setLoadedSlug(null);
    setInsertingSlug(null);
    setPlaybackState("idle");
    setSeconds(0);
  }, [clearLoadingTimer]);

  const canPlay = !!loadedSlug && playbackState !== "playing" && playbackState !== "loading";

  return (
    <div
      id="case-archive"
      className="vhs-workstation flex w-full flex-col gap-4 lg:max-w-lg"
      aria-label={t("workstationLabel")}
    >
      <CrtCaseViewer
        label={t("crtLabel")}
        selectedCase={selectedCase}
        playbackState={playbackState}
      />

      <VhsDeck
        loadedSlug={loadedSlug}
        playbackState={playbackState}
        timeCounter={formatTime(seconds)}
        canPlay={canPlay}
        onPlay={handlePlay}
        onStop={handleStop}
        onRewind={handleRewind}
        onEject={handleEject}
      />

      <CaseTapeArchive
        selectedSlug={loadedSlug}
        insertingSlug={insertingSlug}
        onSelect={handleSelectTape}
      />

      <div className="hidden flex-col gap-3 sm:flex">
        <TerminalPanel selectedCase={selectedCase} playbackState={playbackState} />
        <RetroWindowsPanel selectedCase={selectedCase} playbackState={playbackState} />
      </div>

      <div className="flex flex-col gap-3 sm:hidden">
        <TerminalPanel selectedCase={selectedCase} playbackState={playbackState} />
      </div>
    </div>
  );
}
