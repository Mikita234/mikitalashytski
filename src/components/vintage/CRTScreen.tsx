"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  crtChannels,
  crtProjectChannels,
  type CRTChannelType,
} from "@/content/home-vintage";
import { projectVisuals } from "@/content/project-visuals";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ProjectMiniPreview } from "./ProjectMiniPreview";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { DoomStatusFace } from "./DoomStatusFace";
import { DoomCorridorOverlay } from "./DoomCorridorOverlay";

function TerminalChannel() {
  const t = useTranslations("home");
  const lines = t.raw("terminal") as string[];

  return (
    <div className="flex h-full flex-col bg-black p-4 font-mono text-[10px] leading-relaxed text-[var(--vhs-terminal)] sm:p-5 sm:text-xs">
      <div className="mt-1">
        {lines.map((line, i) => (
          <div key={i} className={i === lines.length - 1 ? "animate-pulse" : ""}>
            {line}
          </div>
        ))}
        <span className="inline-block w-2 animate-pulse bg-[var(--vhs-terminal)]">_</span>
      </div>
    </div>
  );
}

function NoSignalChannel() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-black">
      <p className="font-mono text-lg font-bold tracking-widest text-white sm:text-2xl">
        NO SIGNAL
      </p>
      <div className="h-1 w-3/4 bg-white/20" />
      <p className="font-mono text-[9px] text-white/40">ADJUST ANTENNA</p>
    </div>
  );
}

function Win98Channel() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#008080] p-4">
      <div className="w-full max-w-[200px] border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] p-3">
        <p className="font-mono text-[10px] text-black">Loading vibe.dll…</p>
        <div className="mt-2 h-3 w-full border border-[#404040] bg-white">
          <div className="win98-progress h-full w-2/3" />
        </div>
      </div>
    </div>
  );
}

function ProjectChannel({ slug }: { slug: string }) {
  const ch = crtProjectChannels.find((c) => c.slug === slug) ?? crtProjectChannels[0];
  const v = projectVisuals[ch.slug];

  return (
    <div className="flex h-full flex-col bg-[#0a0a0a] p-2 sm:p-3">
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="font-mono text-[8px] text-[var(--vhs-terminal)] sm:text-[9px]">
          CH · {ch.label}
        </span>
        <span className="font-mono text-[7px] text-[var(--vhs-muted)]" style={{ color: v.accent }}>
          {v.channel}
        </span>
      </div>
      <Link
        href={ch.href}
        className="group relative flex-1 overflow-hidden border border-[var(--vhs-terminal)]/40 bg-black transition-colors hover:border-[var(--vhs-acid)]"
      >
        <ProjectMiniPreview
          slug={ch.slug}
          className="h-full rounded-none border-0 shadow-none"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/85 px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="font-mono text-[8px] text-[var(--vhs-terminal)]">{v.domain}</span>
          <span className="font-mono text-[7px] text-[var(--vhs-acid)]">OPEN →</span>
        </div>
      </Link>
    </div>
  );
}

function DoomStaticFallback() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#120806]">
      <p className="font-mono text-sm tracking-widest text-[var(--doom-red)] sm:text-base">
        MARS LINK
      </p>
      <p className="mt-2 font-mono text-[9px] text-white/40">STANDBY</p>
    </div>
  );
}

function ChannelLayer({
  type,
  projectSlug,
  doomActive,
}: {
  type: CRTChannelType;
  projectSlug: string;
  doomActive: boolean;
}) {
  if (type === "doom") {
    return doomActive ? (
      <DoomCorridorOverlay active />
    ) : (
      <DoomStaticFallback />
    );
  }

  if (type === "terminal") return <TerminalChannel />;
  if (type === "project") return <ProjectChannel slug={projectSlug} />;
  if (type === "nosignal") return <NoSignalChannel />;
  if (type === "win98") return <Win98Channel />;
  return null;
}

export function CRTScreen({ label }: { label: string }) {
  const reduced = useReducedMotion();
  const [channelIndex, setChannelIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const channel = crtChannels[channelIndex];
  const isDoom = channel.type === "doom";
  const projectSlug = crtProjectChannels[projectIndex].slug;

  const cycle = useCallback((dir: 1 | -1) => {
    setChannelIndex((i) => {
      const next = i + dir;
      if (next < 0) return crtChannels.length - 1;
      if (next >= crtChannels.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (reduced || paused) return;

    const duration = crtChannels[channelIndex].durationMs;
    const id = setTimeout(() => {
      setChannelIndex((i) => {
        const next = (i + 1) % crtChannels.length;
        const nextChannel = crtChannels[next];
        if (nextChannel.type === "project") {
          setProjectIndex((p) => (p + 1) % crtProjectChannels.length);
        }
        return next;
      });
    }, duration);

    return () => clearTimeout(id);
  }, [channelIndex, reduced, paused]);

  const chLabel = channel.type === "project"
    ? crtProjectChannels[projectIndex].label
    : channel.chLabel;

  return (
    <div
      className="relative mx-auto w-full max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="crt-tv-frame">
        <div className="crt-tv-frame__label">
          <span>{label}</span>
          <span className="rec-blink text-[var(--vhs-red)]">● ON AIR</span>
        </div>

        <div className="crt-tv-frame__bezel crt-flicker">
          <div
            className={`relative aspect-[4/3] w-full overflow-hidden ${
              isDoom ? "bg-[#120806]" : "bg-black"
            }`}
          >
            {isDoom && !reduced && (
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_55%_at_50%_42%,rgba(180,130,80,0.14),transparent_68%)]"
                aria-hidden
              />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${channel.id}-${channel.type === "project" ? projectSlug : ""}`}
                className="absolute inset-0 z-[2]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChannelLayer
                  type={channel.type}
                  projectSlug={projectSlug}
                  doomActive={!reduced}
                />
              </motion.div>
            </AnimatePresence>

            {isDoom && !reduced && (
              <div className="doom-status-bar pointer-events-none absolute inset-x-0 bottom-0 z-[3]" aria-hidden>
                <div className="doom-status-bar__section doom-status-bar__section--left">
                  <span className="doom-status-bar__label">AMMO</span>
                  <span className="doom-status-bar__value doom-status-bar__value--ammo">∞</span>
                </div>
                <DoomStatusFace variant="hud" />
                <div className="doom-status-bar__section doom-status-bar__section--right">
                  <span className="doom-status-bar__label">ARMR</span>
                  <span className="doom-status-bar__value">100%</span>
                </div>
              </div>
            )}

            <ScanlineOverlay />

            {!reduced && (
              <div
                className="vhs-tracking-line pointer-events-none absolute left-0 right-0 z-[4] h-px bg-white/30"
                aria-hidden
              />
            )}
            <div
              className={`pointer-events-none absolute inset-0 z-[4] ${
                isDoom
                  ? "shadow-[inset_0_0_40px_rgba(60,40,28,0.35),inset_0_-12px_24px_rgba(130,90,55,0.1)]"
                  : "shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"
              }`}
              aria-hidden
            />
          </div>
        </div>

        <div className="crt-tv-frame__controls">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => cycle(-1)}
              className="crt-tuner-btn"
              aria-label="Previous channel"
            >
              CH−
            </button>
            <span className="font-mono text-[9px] text-[var(--vhs-muted)]">
              CH {String(channelIndex + 1).padStart(2, "0")} · {chLabel}
              {paused && <span className="text-[var(--vhs-acid)]"> PAUSE</span>}
            </span>
            <button
              type="button"
              onClick={() => cycle(1)}
              className="crt-tuner-btn"
              aria-label="Next channel"
            >
              CH+
            </button>
          </div>
          <div className="crt-tv-frame__dials" aria-hidden>
            <div className="crt-tv-frame__dial" />
            <div className="crt-tv-frame__dial crt-tv-frame__dial--sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
