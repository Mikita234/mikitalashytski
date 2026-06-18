"use client";

import { useTranslations } from "next-intl";
import type { CaseTapeSlug } from "@/content/case-tapes";
import type { PlaybackState } from "./VhsWorkstation";

type Props = {
  loadedSlug: CaseTapeSlug | null;
  playbackState: PlaybackState;
  timeCounter: string;
  canPlay: boolean;
  onPlay: () => void;
  onStop: () => void;
  onRewind: () => void;
  onEject: () => void;
};

function DeckButton({
  label,
  onClick,
  disabled,
  active,
  ariaLabel,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`vhs-deck-btn px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-[var(--vhs-acid)] bg-[#2a2a10] text-[var(--vhs-acid)]"
          : "border-[#555] bg-[#222] text-[var(--vhs-muted)] hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"
      }`}
    >
      {label}
    </button>
  );
}

export function VhsDeck({
  loadedSlug,
  playbackState,
  timeCounter,
  canPlay,
  onPlay,
  onStop,
  onRewind,
  onEject,
}: Props) {
  const t = useTranslations("home.workstation");
  const isPlaying = playbackState === "playing";
  const isLoading = playbackState === "loading";

  return (
    <div className="vhs-deck mx-auto w-full max-w-md border-2 border-[#333] bg-gradient-to-b from-[#2a2a30] to-[#1a1a1e] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--vhs-muted)]">
          {t("deckLabel")}
        </span>
        <span
          className={`font-mono text-sm tabular-nums tracking-widest ${
            isPlaying ? "text-[var(--vhs-red)] rec-blink" : "text-[var(--vhs-terminal)]"
          }`}
          aria-live="polite"
        >
          {timeCounter}
        </span>
      </div>

      <div className="relative mb-3 h-10 overflow-hidden rounded border border-[#111] bg-[#0a0a0a]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          {loadedSlug ? (
            <div className="flex items-center gap-2">
              <div className={`h-6 w-16 rounded-sm bg-[#1a1a1e] border border-[#444] ${isPlaying ? "vhs-deck-tape--playing" : ""}`}>
                <div className="mx-auto mt-1 h-1 w-10 bg-[var(--vhs-red)]/60" />
              </div>
              <span className="font-mono text-[8px] text-[var(--vhs-terminal)]">
                {loadedSlug.toUpperCase()}
              </span>
            </div>
          ) : (
            <span className="font-mono text-[8px] text-[var(--vhs-muted)]">
              {t("noCase")}
            </span>
          )}
        </div>
        {isPlaying && (
          <div
            className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(255,255,255,0.02)_4px,rgba(255,255,255,0.02)_5px)]"
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <DeckButton
          label={t("play")}
          onClick={onPlay}
          disabled={!canPlay || isLoading}
          active={isPlaying}
          ariaLabel={t("play")}
        />
        <DeckButton
          label={t("stop")}
          onClick={onStop}
          disabled={!isPlaying}
          ariaLabel={t("stop")}
        />
        <DeckButton
          label={t("rewind")}
          onClick={onRewind}
          disabled={!loadedSlug}
          ariaLabel={t("rewind")}
        />
        <DeckButton
          label={t("eject")}
          onClick={onEject}
          disabled={!loadedSlug}
          ariaLabel={t("eject")}
        />
      </div>
    </div>
  );
}
