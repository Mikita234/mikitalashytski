"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { DoomStatusFace } from "./DoomStatusFace";
import { DoomCorridorOverlay } from "./DoomCorridorOverlay";
import { DoomHudBar } from "./DoomHudBar";

function StaticFallback() {
  return (
    <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center bg-[#120806]">
      <p className="font-mono text-sm tracking-widest text-[var(--doom-red)] sm:text-base">
        MARS LINK
      </p>
      <p className="mt-2 font-mono text-[9px] text-white/40">STANDBY</p>
    </div>
  );
}

export function CRTScreen({ label }: { label: string }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="crt-tv-frame">
        <div className="crt-tv-frame__label">
          <span>{label}</span>
          <div className="flex items-center gap-2">
            <DoomStatusFace />
            <span className="rec-blink text-[var(--vhs-red)]">● ON AIR</span>
          </div>
        </div>

        <div className="crt-tv-frame__bezel crt-flicker">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#120806]">
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_60%_at_50%_40%,rgba(220,80,30,0.22),transparent_65%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[rgba(255,90,0,0.18)] to-transparent"
              aria-hidden
            />

            {reduced ? <StaticFallback /> : <DoomCorridorOverlay />}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex gap-1 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-6">
              <DoomHudBar label="HP" value="100%" fill={100} className="flex-1" />
              <DoomHudBar label="AMMO" value="∞" fill={88} variant="ammo" className="flex-1" />
            </div>

            <ScanlineOverlay />

            {!reduced && (
              <div
                className="vhs-tracking-line pointer-events-none absolute left-0 right-0 z-[4] h-px bg-white/30"
                aria-hidden
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 z-[4] shadow-[inset_0_0_50px_rgba(170,34,34,0.2),inset_0_-20px_40px_rgba(255,90,0,0.12)]"
              aria-hidden
            />
          </div>
        </div>

        <div className="crt-tv-frame__controls">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-[var(--vhs-muted)]">
              CH 01 · DOOM
            </span>
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
