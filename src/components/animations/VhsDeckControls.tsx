"use client";
import { useTranslations } from "next-intl";
import type { CaseTapeSlug } from "@/content/case-tapes";
import type { PlaybackState } from "@/hooks/use-vhs-playback";
type Props = { loadedSlug: CaseTapeSlug | null; playbackState: PlaybackState; timeCounter: string; canPlay: boolean; onPlay: () => void; onRewind: () => void; onEject: () => void };
function DeckButton({ label, onClick, disabled, active, ariaLabel }: { label: string; onClick: () => void; disabled?: boolean; active?: boolean; ariaLabel: string }) {
  return (<button type="button" onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={`vhs-deck-btn px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${active ? "border-[var(--vhs-acid)] bg-[#2a2a10] text-[var(--vhs-acid)]" : "border-[#555] bg-[#222] text-[var(--vhs-muted)] hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"}`}>{label}</button>);
}
export function VhsDeckControls({ loadedSlug, playbackState, timeCounter, canPlay, onPlay, onRewind, onEject }: Props) {
  const t = useTranslations("home.workstation");
  const isPlaying = playbackState === "playing";
  const isLoading = playbackState === "loading";
  return (
    <div className="vhs-deck mx-auto w-full max-w-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--vhs-muted)]">{t("deckLabel")}</span>
        <span className={`font-mono text-sm tabular-nums tracking-widest ${isPlaying ? "text-[var(--vhs-red)] rec-blink" : "text-[var(--vhs-terminal)]"}`} aria-live="polite">{timeCounter}</span>
      </div>
      <div className="vhs-deck__slot" aria-hidden>{loadedSlug ? (<div className="flex items-center justify-center gap-2"><div className={`vhs-deck__tape ${isPlaying ? "vhs-deck-tape--playing" : ""}`} /><span className="font-mono text-[8px] text-[var(--vhs-terminal)]">{loadedSlug.toUpperCase()}</span></div>) : (<span className="font-mono text-[8px] text-[var(--vhs-muted)]">{t("noCase")}</span>)}</div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <DeckButton label={t("play")} onClick={onPlay} disabled={!canPlay || isLoading} active={isPlaying} ariaLabel={t("play")} />
        <DeckButton label={t("rewind")} onClick={onRewind} disabled={!loadedSlug} ariaLabel={t("rewind")} />
        <DeckButton label={t("eject")} onClick={onEject} disabled={!loadedSlug} ariaLabel={t("eject")} />
      </div>
    </div>
  );
}
