"use client";
import { useTranslations } from "next-intl";
import { useVhsPlayback } from "@/hooks/use-vhs-playback";
import { CaseTapeRow } from "./CaseTapeRow";
import { CrtCaseViewer } from "./CrtCaseViewer";
import { TerminalStrip } from "./TerminalStrip";
import { VhsDeckControls } from "./VhsDeckControls";
export function HeroWorkstation() {
  const t = useTranslations("home.workstation");
  const { loadedSlug, insertingSlug, selectedCase, playbackState, timeCounter, canPlay, selectTape, play, rewind, eject } = useVhsPlayback();
  return (
    <div id="case-archive" className="hero-workstation flex w-full flex-col gap-4 lg:max-w-lg" aria-label={t("workstationLabel")}>
      <div className="order-1 lg:order-3 lg:hidden"><CaseTapeRow selectedSlug={loadedSlug} insertingSlug={insertingSlug} onSelect={selectTape} /></div>
      <div className="order-2 lg:order-1">
        <CrtCaseViewer label={t("crtLabel")} selectedCase={selectedCase} playbackState={playbackState} showTrackingNoise={!!insertingSlug || playbackState === "loading"} />
        <TerminalStrip selectedCase={selectedCase} playbackState={playbackState} />
      </div>
      <div className="order-3 lg:order-2"><VhsDeckControls loadedSlug={loadedSlug} playbackState={playbackState} timeCounter={timeCounter} canPlay={canPlay} onPlay={play} onRewind={rewind} onEject={eject} /></div>
      <div className="order-4 hidden lg:order-3 lg:block"><CaseTapeRow selectedSlug={loadedSlug} insertingSlug={insertingSlug} onSelect={selectTape} /></div>
    </div>
  );
}
