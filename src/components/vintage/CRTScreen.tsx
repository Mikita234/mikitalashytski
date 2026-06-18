"use client";

import { useCallback, useEffect, useState, type FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import {
  crtStates,
  crtProjectChannels,
} from "@/content/home-vintage";
import { projectVisuals } from "@/content/project-visuals";
import { formatPriceFrom } from "@/lib/pricing";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ProjectMiniPreview } from "./ProjectMiniPreview";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { DoomStatusFace } from "./DoomStatusFace";
import { DoomCorridorOverlay } from "./DoomCorridorOverlay";
import { DoomHudBar } from "./DoomHudBar";

function TerminalScreen() {
  const t = useTranslations("home");
  const lines = t.raw("terminal") as string[];

  return (
    <div className="relative z-[2] h-full bg-black/45 p-3 font-mono text-[10px] leading-relaxed text-[var(--vhs-terminal)] sm:p-4 sm:text-xs">
      {lines.map((line, i) => (
        <div key={i} className={i === lines.length - 1 ? "animate-pulse" : ""}>
          {line}
        </div>
      ))}
      <span className="inline-block w-2 animate-pulse bg-[var(--vhs-terminal)]">_</span>
    </div>
  );
}

function NoSignalScreen() {
  return (
    <div className="relative z-[2] flex h-full flex-col items-center justify-center gap-2 bg-black/40">
      <p className="font-mono text-lg font-bold tracking-widest text-white sm:text-2xl">
        NO SIGNAL
      </p>
      <div className="h-1 w-3/4 bg-white/20" />
      <p className="font-mono text-[9px] text-white/40">ADJUST ANTENNA</p>
    </div>
  );
}

function BuildingScreen() {
  return (
    <div className="relative z-[2] flex h-full items-center justify-center bg-black/40 p-4">
      <p className="animate-pulse font-mono text-xs uppercase tracking-[0.2em] text-[var(--vhs-beige)] sm:text-sm">
        BUILDING WEBSITE…
      </p>
    </div>
  );
}

function OrderScreen() {
  const locale = useLocale();
  const crossedPrice = formatPriceFrom(5000, locale);

  return (
    <Link
      href="/order"
      className="relative z-[2] flex h-full flex-col items-center justify-center bg-[var(--vhs-red)]/70 p-4 text-center transition-filter hover:brightness-110"
    >
      <p className="font-display text-2xl uppercase text-white sm:text-4xl">
        ORDER NOW
      </p>
      <p className="mt-2 font-mono text-[10px] text-[var(--vhs-yellow)]">
        ☎ {site.telegramHandle}
      </p>
      <p className="mt-1 font-mono text-[9px] text-white/60 line-through">
        {crossedPrice}
      </p>
      <p className="font-mono text-sm font-bold text-[var(--vhs-acid)]">
        VIBE BUILD
      </p>
    </Link>
  );
}

function GridScreen() {
  return (
    <div className="relative z-[2] grid h-full grid-cols-2 gap-1 bg-black/30 p-1.5">
      {crtProjectChannels.map((ch) => {
        const v = projectVisuals[ch.slug];
        return (
          <Link
            key={ch.slug}
            href={ch.href}
            className="crt-grid-cell group relative overflow-hidden border border-[var(--vhs-terminal)]/30 bg-black/60 transition-colors hover:border-[var(--vhs-acid)] hover:bg-black/80"
          >
            <div className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-90">
              <ProjectMiniPreview slug={ch.slug} className="h-full scale-[0.85] origin-top rounded-none border-0 shadow-none" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/80 px-1.5 py-1">
              <span className="font-mono text-[8px] text-[var(--vhs-terminal)] sm:text-[9px]">
                {ch.label}
              </span>
              <span className="font-mono text-[7px] text-[var(--vhs-acid)] opacity-0 transition-opacity group-hover:opacity-100">
                OPEN →
              </span>
            </div>
            <span
              className="absolute right-1 top-1 font-mono text-[7px] text-[var(--vhs-muted)]"
              style={{ color: v.accent }}
            >
              {v.channel}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function TeletextScreen() {
  return (
    <div className="teletext-grid h-full p-2 font-mono text-[9px] leading-tight sm:text-[10px]">
      <div className="bg-[#00f] px-1 text-white">P100 DIGITAL BUILDER</div>
      <div className="mt-1 text-[#ff0]">▶ SITES</div>
      <div className="text-[#0f0]">▶ BOTS</div>
      <div className="text-[#f0f]">▶ AUTO</div>
      <div className="mt-2 text-[#ccc]">4 LIVE PROJECTS</div>
      <div className="text-[#ccc]">CH:404 BROADCAST</div>
    </div>
  );
}

function Win98Screen() {
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

function RewindScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 bg-black">
      <p className="font-mono text-xl tracking-widest text-white/80 sm:text-2xl">
        ◀◀ REW
      </p>
      <div className="flex gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-1 bg-white/20"
            style={{ opacity: 1 - i * 0.07 }}
          />
        ))}
      </div>
    </div>
  );
}

const screens: Record<string, FC> = {
  terminal: TerminalScreen,
  nosignal: NoSignalScreen,
  building: BuildingScreen,
  order: OrderScreen,
  grid: GridScreen,
  teletext: TeletextScreen,
  win98: Win98Screen,
  rewind: RewindScreen,
};

export function CRTScreen({ label }: { label: string }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const cycle = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => {
        const next = i + dir;
        if (next < 0) return crtStates.length - 1;
        if (next >= crtStates.length) return 0;
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % crtStates.length);
    }, 3200);
    return () => clearInterval(id);
  }, [reduced, paused]);

  const state = crtStates[reduced ? 0 : index];
  const Screen = screens[state.type];

  return (
    <div
      className="relative mx-auto w-full max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="crt-tv-frame">
        <div className="crt-tv-frame__label">
          <span>{label}</span>
          <div className="flex items-center gap-2">
            <DoomStatusFace />
            <span className="rec-blink text-[var(--vhs-red)]">● ON AIR</span>
          </div>
        </div>

        <div className="crt-tv-frame__bezel crt-flicker">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0806]">
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_70%_at_50%_55%,rgba(74,124,35,0.12),transparent_70%)]" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={state.id}
                className="absolute inset-0 z-[2]"
                initial={{ opacity: 0, filter: "brightness(1.5)" }}
                animate={{ opacity: 1, filter: "brightness(1)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
            <DoomCorridorOverlay />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] flex gap-1 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-6">
              <DoomHudBar label="HP" value="100%" fill={100} className="flex-1" />
              <DoomHudBar label="AMMO" value="∞" fill={88} variant="ammo" className="flex-1" />
            </div>
            <ScanlineOverlay />
            {!reduced && (
              <div
                className="vhs-tracking-line pointer-events-none absolute left-0 right-0 z-[5] h-px bg-white/30"
                aria-hidden
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 z-[5] shadow-[inset_0_0_40px_rgba(74,124,35,0.15)]"
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
              {String(index + 1).padStart(2, "0")}/{String(crtStates.length).padStart(2, "0")}
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
