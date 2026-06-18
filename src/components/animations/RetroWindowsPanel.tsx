"use client";

import { useTranslations } from "next-intl";
import type { CaseTape } from "@/content/case-tapes";
import type { PlaybackState } from "./VhsWorkstation";

type Props = {
  selectedCase: CaseTape | null;
  playbackState: PlaybackState;
};

function WinPanel({
  title,
  lines,
  active,
}: {
  title: string;
  lines: string[];
  active: boolean;
}) {
  return (
    <div
      className={`border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-black transition-opacity ${
        active ? "opacity-100" : "opacity-60"
      }`}
    >
      <div className="flex items-center gap-1 border-b border-[#808080] bg-gradient-to-r from-[#000080] to-[#1084d0] px-1.5 py-0.5">
        <span className="font-mono text-[8px] font-bold text-white">{title}</span>
      </div>
      <div className="space-y-0.5 p-2 font-mono text-[8px] leading-snug">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export function RetroWindowsPanel({ selectedCase, playbackState }: Props) {
  const t = useTranslations("home.workstation");
  const active = playbackState === "playing" && !!selectedCase;

  const stackLines = active && selectedCase
    ? selectedCase.windowsPanels.stack.map((s) => `· ${s}`)
    : ["· awaiting tape...", "· —", "· —"];

  const outputLines = active && selectedCase
    ? selectedCase.windowsPanels.output.map((s) => `> ${s}`)
    : ["> no output yet", "> insert + play case"];

  const systemLines = active && selectedCase
    ? selectedCase.windowsPanels.system.map((s) => `→ ${s}`)
    : ["→ system idle", "→ —"];

  return (
    <div className="grid gap-2 sm:grid-cols-3" aria-hidden={!active}>
      <WinPanel title={t("stackDll")} lines={stackLines} active={active} />
      <WinPanel title={t("outputLog")} lines={outputLines} active={active} />
      <WinPanel title={t("systemDll")} lines={systemLines} active={active} />
    </div>
  );
}
