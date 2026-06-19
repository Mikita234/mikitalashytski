"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseTape } from "@/content/case-tapes";
import { getCaseTapeThumbnail } from "@/content/case-tapes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { PlaybackState } from "@/hooks/use-vhs-playback";
import { CrtShell } from "./CrtShell";

type Props = {
  label: string;
  selectedCase: CaseTape | null;
  playbackState: PlaybackState;
  showTrackingNoise?: boolean;
};

function WireframeFlow({ tape }: { tape: CaseTape }) {
  const nodeMap = Object.fromEntries(tape.flowNodes.map((n) => [n.id, n]));
  return (
    <svg viewBox="0 0 100 80" className="h-14 w-full opacity-80 sm:h-16" aria-hidden>
      {tape.flowEdges.map((edge) => {
        const from = nodeMap[edge.from];
        const to = nodeMap[edge.to];
        if (!from || !to) return null;
        return (
          <line key={`${edge.from}-${edge.to}`} x1={from.x} y1={from.y + 4} x2={to.x} y2={to.y + 4} stroke={tape.accent} strokeWidth="0.4" strokeDasharray="2 1" opacity="0.55" />
        );
      })}
      {tape.flowNodes.map((node) => (
        <g key={node.id}>
          <rect x={node.x - 9} y={node.y} width="18" height="8" fill="none" stroke={tape.accent} strokeWidth="0.5" rx="0.5" />
          <text x={node.x} y={node.y + 5} textAnchor="middle" fill={tape.accent} fontSize="2.8" fontFamily="monospace">
            {node.label.length > 10 ? `${node.label.slice(0, 9)}…` : node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CaseHud({ tape, dimmed }: { tape: CaseTape; dimmed?: boolean }) {
  const t = useTranslations("home.workstation");
  const thumb = getCaseTapeThumbnail(tape);
  const rows = [
    { key: t("hudCase"), value: tape.label },
    { key: t("hudType"), value: tape.type },
    { key: t("hudInput"), value: tape.input },
    { key: t("hudSystem"), value: tape.system },
    { key: t("hudOutput"), value: tape.output },
    { key: t("hudStatus"), value: tape.status },
  ];
  return (
    <div className={`flex h-full flex-col p-2 sm:p-3 ${dimmed ? "opacity-80" : ""}`}>
      <div className="space-y-0.5 font-mono text-[11px] leading-relaxed sm:text-[13px]">
        {rows.map((row) => (
          <div key={row.key} className="flex gap-2">
            <span className="shrink-0 phosphor-text phosphor-text--muted">{row.key}:</span>
            <span className={row.key === t("hudStatus") ? "phosphor-text phosphor-text--amber" : "phosphor-text"} style={row.key === t("hudStatus") ? { color: tape.accent } : undefined}>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border border-[var(--vhs-terminal)]/20 bg-black/40 p-1.5">
        <p className="mb-1 font-mono text-[9px] uppercase tracking-widest phosphor-text phosphor-text--muted">{t("flowSchema")}</p>
        <WireframeFlow tape={tape} />
      </div>
      {thumb && (
        <div className="relative mt-2 h-12 overflow-hidden border border-[var(--vhs-terminal)]/30 sm:h-14">
          <Image src={thumb} alt="" fill className="object-cover object-top opacity-75" sizes="320px" unoptimized />
        </div>
      )}
    </div>
  );
}

function IdleScreen() {
  const t = useTranslations("home.workstation");
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
      <p className="phosphor-text font-mono text-xs uppercase tracking-[0.35em] sm:text-sm">{t("selectTapeIdle")}</p>
      <p className="font-mono text-[10px] phosphor-text phosphor-text--muted sm:text-[11px]">{t("selectTape")}</p>
    </div>
  );
}

function LoadingScreen() {
  const t = useTranslations("home.workstation");
  const reduced = useReducedMotion();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
      <p className={`phosphor-text phosphor-text--amber font-mono text-xs uppercase tracking-widest ${reduced ? "" : "animate-pulse"}`}>{t("loadingCase")}</p>
      <div className="h-1 w-3/4 overflow-hidden border border-[var(--vhs-terminal)]/30 bg-black">
        <motion.div className="h-full bg-[var(--vhs-terminal)]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "easeInOut" }} />
      </div>
    </div>
  );
}

export function CrtCaseViewer({ label, selectedCase, playbackState, showTrackingNoise = false }: Props) {
  const reduced = useReducedMotion();
  const t = useTranslations("home.workstation");
  const status =
    playbackState === "playing"
      ? t("statusLive")
      : selectedCase
        ? t("statusLoaded")
        : t("statusStandby");
  return (
    <CrtShell label={label} status={status} trackingNoise={showTrackingNoise && !reduced}>
      <AnimatePresence mode="wait">
        {playbackState === "loading" ? (
          <motion.div key="loading" className="absolute inset-0 z-[2]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><LoadingScreen /></motion.div>
        ) : selectedCase ? (
          <motion.div key={selectedCase.slug} className="absolute inset-0 z-[2]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><CaseHud tape={selectedCase} dimmed={playbackState === "idle"} /></motion.div>
        ) : (
          <motion.div key="idle" className="absolute inset-0 z-[2]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><IdleScreen /></motion.div>
        )}
      </AnimatePresence>
    </CrtShell>
  );
}
