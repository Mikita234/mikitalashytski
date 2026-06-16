"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function DVDLogoBouncer() {
  const reduced = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 10, y: 10, vx: 1.1, vy: 0.8 });

  useEffect(() => {
    if (reduced) return;
    const box = boxRef.current;
    const logo = logoRef.current;
    if (!box || !logo) return;

    let frame: number;
    const tick = () => {
      const cw = box.clientWidth - logo.offsetWidth;
      const ch = box.clientHeight - logo.offsetHeight;
      const s = state.current;
      s.x += s.vx;
      s.y += s.vy;
      if (s.x <= 0 || s.x >= cw) {
        s.vx *= -1;
        s.x = Math.max(0, Math.min(cw, s.x));
      }
      if (s.y <= 0 || s.y >= ch) {
        s.vy *= -1;
        s.y = Math.max(0, Math.min(ch, s.y));
      }
      logo.style.left = `${s.x}px`;
      logo.style.top = `${s.y}px`;
      logo.style.color = `hsl(${(s.x + s.y) % 360}, 60%, 55%)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <div
      ref={boxRef}
      className="relative h-28 overflow-hidden border-2 border-[var(--vhs-dirt)] bg-black sm:h-32"
      aria-hidden
    >
      <div
        ref={logoRef}
        className="absolute font-mono text-[10px] font-bold uppercase tracking-widest"
        style={{ left: 10, top: 10, color: "#666" }}
      >
        VIBE
      </div>
      <p className="absolute bottom-1 right-2 font-mono text-[8px] text-[var(--vhs-muted)]">
        screensaver.exe
      </p>
    </div>
  );
}
