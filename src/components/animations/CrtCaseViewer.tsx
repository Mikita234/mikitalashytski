"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseTape } from "@/content/case-tapes";
import { getCaseTapeThumbnail } from "@/content/case-tapes";
import { ScanlineOverlay } from "@/components/vintage/ScanlineOverlay";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { PlaybackState } from "./VhsWorkstation";

type Props = {
  label: string;
  selectedCase: CaseTape | null;
  playbackState: PlaybackState;
};

function WireframeFlow({ tape }: { tape: CaseTape }) {
  const nodeMap = Object.fromEntries(tape.flowNodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 100 80"
      className="h-16 w-full opacity-80 sm:h-20"
      aria-hidden
    >
      {tape.flowEdges.map((edge) => {
        const from = nodeMap[edge.from];
        const to = nodeMap[edge.to];
        if (!from || !to) return null;
        return (
          <line
            key={`${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y + 4}
            x2={to.x}
            y2={to.y + 4}
            stroke={tape.accent}
            strokeWidth="0.4"
            strokeDasharray="2 1"
            opacity="0.6"
          />
        );
      })}
      {tape.flowNodes.map((node) => (
        <g key={node.id}>
          <rect
            x={node.x - 9}
            y={node.y}
            width="18"
            height="8"
            fill="none"
            stroke={tape.accent}
            strokeWidth="0.5"
            rx="0.5"
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            fill={tape.accent}
            fontSize="2.8"
            fontFamily="monospace"
          >
            {node.label.length > 10 ? node.label.slice(0, 9) + "…" : node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CaseHud({ tape }: { tape: CaseTape }) {
  const t = useTranslations("home.workstation");
  const thumb = getCaseTapeThumbnail(tape);

  const rows: { key: string; value: string }[] = [
    { key: "CASE", value: tape.label },
    { key: "TYPE", value: tape.type },
    { key: "INPUT", value: tape.input },
    { key: "SYSTEM", value: tape.system },
    { key: "OUTPUT", value: tape.output },
    { key: "STATUS", value: tape.status },
  ];

  return (
    <div className="flex h-full flex-col p-2 font-mono text-[8px] leading-relaxed text-[var(--vhs-terminal)] sm:p-3 sm:text-[9px]">
      <div className="space-y-0.5">
        {rows.map((row) => (
          <div key={row.key} className="flex gap-2">
            <span className="shrink-0 text-[var(--vhs-muted)]">{row.key}:</span>
            <span style={{ color: row.key === "STATUS" ? tape.accent : undefined }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 border border-[var(--vhs-terminal)]/20 bg-black/40 p-1.5">
        <p className="mb-1 text-[7px] uppercase tracking-widest text-[var(--vhs-muted)]">
          {t("flowSchema")}
        </p>
        <WireframeFlow tape={tape} />
      </div>

      {thumb && (
        <div className="relative mt-2 h-14 overflow-hidden border border-[var(--vhs-terminal)]/30 sm:h-16">
          <Image
            src={thumb}
            alt=""
            fill
            className="object-cover object-top opacity-70"
            sizes="320px"
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_60%,rgba(0,0,0,0.8))]"
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}

function IdleScreen({ hasTape }: { hasTape: boolean }) {
  const t = useTranslations("home.workstation");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-black p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--vhs-terminal)] sm:text-xs">
        {hasTape ? t("pressPlay") : t("insertTape")}
      </p>
      {!hasTape && (
        <p className="font-mono text-[8px] text-[var(--vhs-muted)]">{t("selectTape")}</p>
      )}
      <div className="mt-2 h-px w-2/3 bg-[var(--vhs-terminal)]/20" aria-hidden />
    </div>
  );
}

function LoadingScreen() {
  const t = useTranslations("home.workstation");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-black p-4">
      <motion.p
        className="font-mono text-xs uppercase tracking-widest text-[var(--vhs-acid)]"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        {t("loadingCase")}
      </motion.p>
      <div className="h-1 w-3/4 overflow-hidden border border-[var(--vhs-terminal)]/30 bg-black">
        <motion.div
          className="h-full bg-[var(--vhs-terminal)]"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export function CrtCaseViewer({ label, selectedCase, playbackState }: Props) {
  const reduced = useReducedMotion();
  const isGlitch = playbackState === "loading" && !reduced;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="crt-tv-frame">
        <div className="crt-tv-frame__label">
          <span>{label}</span>
          <span className="rec-blink text-[var(--vhs-red)]">
            {playbackState === "playing" ? "● CASE LIVE" : "● STANDBY"}
          </span>
        </div>

        <div className={`crt-tv-frame__bezel ${reduced ? "" : "crt-flicker"}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              {playbackState === "loading" ? (
                <motion.div
                  key="loading"
                  className="absolute inset-0 z-[2]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LoadingScreen />
                </motion.div>
              ) : playbackState === "playing" && selectedCase ? (
                <motion.div
                  key={selectedCase.slug}
                  className="absolute inset-0 z-[2]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <CaseHud tape={selectedCase} />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  className="absolute inset-0 z-[2]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <IdleScreen hasTape={!!selectedCase} />
                </motion.div>
              )}
            </AnimatePresence>

            {isGlitch && (
              <div
                className="pointer-events-none absolute inset-0 z-[3] animate-pulse bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)]"
                aria-hidden
              />
            )}

            <ScanlineOverlay />

            {!reduced && (
              <div
                className="vhs-tracking-line pointer-events-none absolute left-0 right-0 z-[4] h-px bg-white/20"
                aria-hidden
              />
            )}

            <div
              className="pointer-events-none absolute inset-0 z-[4] shadow-[inset_0_0_40px_rgba(51,255,102,0.08),inset_0_0_60px_rgba(0,0,0,0.6)]"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
