"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FPS = 20;

export function DoomCorridorOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 1000 / FPS) return;
      last = now;
      frame += 1;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h * 0.55;
      const scroll = (frame * 0.035) % 1;

      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, w, h);

      const depth = 10;
      ctx.lineWidth = 1;

      for (let i = 0; i < depth; i++) {
        const t = (i / depth + scroll) % 1;
        const scale = 0.15 + t * 0.85;
        const hw = w * scale * 0.42;
        const hh = h * scale * 0.38;
        const top = cy - hh;
        const alpha = 0.08 + t * 0.35;

        ctx.strokeStyle = `rgba(51, 255, 102, ${alpha})`;
        ctx.strokeRect(cx - hw, top, hw * 2, hh * 2);

        ctx.beginPath();
        ctx.moveTo(cx - hw, top);
        ctx.lineTo(cx, cy - hh * 0.15);
        ctx.lineTo(cx + hw, top);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - hw, top + hh * 2);
        ctx.lineTo(cx, cy + hh * 0.35);
        ctx.lineTo(cx + hw, top + hh * 2);
        ctx.stroke();

        const gridStep = hw / 3;
        for (let g = 1; g < 3; g++) {
          const gx = cx - hw + gridStep * g;
          ctx.beginPath();
          ctx.moveTo(gx, top);
          ctx.lineTo(cx + (gx - cx) * 0.15, cy);
          ctx.lineTo(gx, top + hh * 2);
          ctx.strokeStyle = `rgba(51, 255, 102, ${alpha * 0.5})`;
          ctx.stroke();
        }
      }

      const bob = Math.sin(frame * 0.12) * 3;
      ctx.fillStyle = "rgba(180, 180, 180, 0.12)";
      ctx.beginPath();
      ctx.moveTo(cx - 18, h - 8 + bob);
      ctx.lineTo(cx - 8, h - 28 + bob);
      ctx.lineTo(cx + 14, h - 22 + bob);
      ctx.lineTo(cx + 22, h - 6 + bob);
      ctx.closePath();
      ctx.fill();
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
      className="doom-corridor-overlay pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
    />
  );
}
