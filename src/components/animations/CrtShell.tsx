"use client";

import type { ReactNode } from "react";
import { ScanlineOverlay } from "@/components/vintage/ScanlineOverlay";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  label: string;
  status: string;
  children: ReactNode;
  trackingNoise?: boolean;
};

export function CrtShell({ label, status, children, trackingNoise = false }: Props) {
  const reduced = useReducedMotion();

  return (
    <div className="crt-shell mx-auto w-full max-w-md">
      <div className="crt-shell__header">
        <span>{label}</span>
        <span className="crt-shell__status">{status}</span>
      </div>

      <div className={`crt-shell__bezel ${reduced ? "" : "crt-flicker"}`}>
        <div className="crt-shell__screen">
          {children}

          {trackingNoise && !reduced && (
            <div className="crt-shell__tracking-noise" aria-hidden />
          )}

          <ScanlineOverlay />

          {!reduced && (
            <div className="crt-shell__tracking-line" aria-hidden />
          )}

          <div className="crt-shell__vignette" aria-hidden />
        </div>
      </div>
    </div>
  );
}
