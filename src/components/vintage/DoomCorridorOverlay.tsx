"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FPS_DESKTOP = 20;
const FPS_MOBILE = 12;
const DOOM_GREEN = "74, 124, 35";
const DOOM_BRIGHT = "102, 204, 68";
const DOOM_BLOOD = "170, 34, 34";

export function DoomCorridorOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const fps = isMobile ? FPS_MOBILE : FPS_DESKTOP;

    let raf = 0;
    let frame = 0;
    let last = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const drawWeapon = (cx: number, h: number, bob: number) => {
      const baseY = h - 6 + bob;
      const scale = Math.max(1, h / 220);

      ctx.fillStyle = `rgba(200, 200, 200, 0.55)`;
      ctx.strokeStyle = `rgba(120, 120, 120, 0.7)`;
      ctx.lineWidth = 1.5 * scale;

      ctx.beginPath();
      ctx.moveTo(cx - 42 * scale, baseY);
      ctx.lineTo(cx - 18 * scale, baseY - 38 * scale);
      ctx.lineTo(cx - 4 * scale, baseY - 52 * scale);
      ctx.lineTo(cx + 8 * scale, baseY - 44 * scale);
      ctx.lineTo(cx + 28 * scale, baseY - 28 * scale);
      ctx.lineTo(cx + 46 * scale, baseY - 8 * scale);
      ctx.lineTo(cx + 38 * scale, baseY + 2 * scale);
      ctx.lineTo(cx + 12 * scale, baseY - 6 * scale);
      ctx.lineTo(cx - 8 * scale, baseY - 18 * scale);
      ctx.lineTo(cx - 28 * scale, baseY - 4 * scale);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = `rgba(${DOOM_BLOOD}, 0.85)`;
      ctx.fillRect(cx + 18 * scale, baseY - 36 * scale, 14 * scale, 6 * scale);
    };

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 1000 / fps) return;
      last = now;
      frame += 1;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h * 0.52;
      const scroll = (frame * 0.045) % 1;

      ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
      ctx.fillRect(0, 0, w, h);

      const depth = 12;
      ctx.lineWidth = 1.75;

      for (let i = 0; i < depth; i++) {
        const t = (i / depth + scroll) % 1;
        const scale = 0.12 + t * 0.88;
        const hw = w * scale * 0.44;
        const hh = h * scale * 0.4;
        const top = cy - hh;
        const alpha = 0.28 + t * 0.62;
        const isNear = t > 0.72;

        ctx.strokeStyle = isNear
          ? `rgba(${DOOM_BLOOD}, ${alpha * 0.85})`
          : `rgba(${DOOM_GREEN}, ${alpha})`;
        ctx.strokeRect(cx - hw, top, hw * 2, hh * 2);

        ctx.beginPath();
        ctx.moveTo(cx - hw, top);
        ctx.lineTo(cx, cy - hh * 0.12);
        ctx.lineTo(cx + hw, top);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - hw, top + hh * 2);
        ctx.lineTo(cx, cy + hh * 0.32);
        ctx.lineTo(cx + hw, top + hh * 2);
        ctx.stroke();

        const gridStep = hw / 3;
        for (let g = 1; g < 3; g++) {
          const gx = cx - hw + gridStep * g;
          ctx.beginPath();
          ctx.moveTo(gx, top);
          ctx.lineTo(cx + (gx - cx) * 0.12, cy);
          ctx.lineTo(gx, top + hh * 2);
          ctx.strokeStyle = `rgba(${DOOM_BRIGHT}, ${alpha * 0.55})`;
          ctx.stroke();
        }
      }

      const bob = Math.sin(frame * 0.14) * 5;
      drawWeapon(cx, h, bob);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="doom-corridor-overlay pointer-events-none absolute inset-0 z-[3]"
      aria-hidden
    />
  );
}
