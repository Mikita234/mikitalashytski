"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FPS_DESKTOP = 20;
const FPS_MOBILE = 12;

const MARS_SKY = "200, 70, 25";
const MARS_HORIZON = "120, 35, 12";
const MARS_STONE = "82, 62, 48";
const MARS_STONE_LT = "118, 92, 68";
const MARS_LAVA = "255, 90, 0";
const MARS_FIRE = "255, 170, 40";
const MARS_GLOW = "220, 60, 20";
const MARS_BLOOD = "170, 34, 34";

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

    const drawMarsSky = (w: number, h: number, flicker: number) => {
      const horizonY = h * 0.38;
      const grad = ctx.createLinearGradient(0, 0, 0, horizonY);
      grad.addColorStop(0, `rgb(${MARS_SKY})`);
      grad.addColorStop(0.55, `rgb(${MARS_HORIZON})`);
      grad.addColorStop(1, `rgb(40, 15, 8)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, horizonY);

      ctx.fillStyle = `rgba(${MARS_GLOW}, ${0.08 + flicker * 0.04})`;
      ctx.fillRect(0, horizonY - 8, w, 16);

      ctx.fillStyle = `rgba(40, 15, 8, 0.95)`;
      ctx.fillRect(0, horizonY, w, h - horizonY);
    };

    const drawFireStrip = (w: number, h: number, flicker: number) => {
      const baseY = h - 2;
      const flameCount = Math.max(6, Math.floor(w / 18));

      for (let i = 0; i < flameCount; i++) {
        const x = (i / flameCount) * w + w / flameCount / 2;
        const phase = frame * 0.22 + i * 1.7;
        const fh = 14 + Math.sin(phase) * 8 + flicker * 10;
        const fw = 10 + Math.sin(phase * 0.7) * 4;

        const fg = ctx.createLinearGradient(x, baseY - fh, x, baseY);
        fg.addColorStop(0, `rgba(${MARS_FIRE}, 0)`);
        fg.addColorStop(0.35, `rgba(${MARS_FIRE}, ${0.55 + flicker * 0.25})`);
        fg.addColorStop(0.7, `rgba(${MARS_LAVA}, ${0.75 + flicker * 0.2})`);
        fg.addColorStop(1, `rgba(${MARS_BLOOD}, 0.9)`);
        ctx.fillStyle = fg;
        ctx.beginPath();
        ctx.moveTo(x - fw / 2, baseY);
        ctx.quadraticCurveTo(x - fw * 0.3, baseY - fh * 0.6, x, baseY - fh);
        ctx.quadraticCurveTo(x + fw * 0.3, baseY - fh * 0.6, x + fw / 2, baseY);
        ctx.closePath();
        ctx.fill();
      }

      ctx.fillStyle = `rgba(${MARS_LAVA}, ${0.35 + flicker * 0.15})`;
      ctx.fillRect(0, h - 4, w, 4);
    };

    const drawSideGlow = (w: number, h: number, flicker: number) => {
      const lg = ctx.createLinearGradient(0, 0, w * 0.18, 0);
      lg.addColorStop(0, `rgba(${MARS_LAVA}, ${0.25 + flicker * 0.12})`);
      lg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = lg;
      ctx.fillRect(0, h * 0.3, w * 0.18, h * 0.7);

      const rg = ctx.createLinearGradient(w, 0, w * 0.82, 0);
      rg.addColorStop(0, `rgba(${MARS_LAVA}, ${0.25 + flicker * 0.12})`);
      rg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(w * 0.82, h * 0.3, w * 0.18, h * 0.7);
    };

    const drawPistol = (cx: number, h: number, bob: number) => {
      const baseY = h - 4 + bob;
      const s = Math.max(1, h / 200);

      ctx.fillStyle = `rgba(160, 150, 130, 0.75)`;
      ctx.strokeStyle = `rgba(90, 70, 55, 0.9)`;
      ctx.lineWidth = 1.2 * s;

      ctx.beginPath();
      ctx.moveTo(cx - 8 * s, baseY - 2 * s);
      ctx.lineTo(cx - 6 * s, baseY - 28 * s);
      ctx.lineTo(cx - 2 * s, baseY - 32 * s);
      ctx.lineTo(cx + 14 * s, baseY - 30 * s);
      ctx.lineTo(cx + 38 * s, baseY - 22 * s);
      ctx.lineTo(cx + 48 * s, baseY - 14 * s);
      ctx.lineTo(cx + 52 * s, baseY - 6 * s);
      ctx.lineTo(cx + 48 * s, baseY);
      ctx.lineTo(cx + 20 * s, baseY - 4 * s);
      ctx.lineTo(cx + 4 * s, baseY - 8 * s);
      ctx.lineTo(cx - 4 * s, baseY - 6 * s);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = `rgba(60, 50, 42, 0.85)`;
      ctx.fillRect(cx - 10 * s, baseY - 10 * s, 18 * s, 12 * s);

      ctx.fillStyle = `rgba(${MARS_BLOOD}, 0.9)`;
      ctx.fillRect(cx + 30 * s, baseY - 20 * s, 10 * s, 5 * s);
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
      const flicker = 0.5 + 0.5 * Math.sin(frame * 0.31);

      ctx.clearRect(0, 0, w, h);
      drawMarsSky(w, h, flicker);
      drawSideGlow(w, h, flicker);

      const depth = 12;
      ctx.lineWidth = 2;

      for (let i = 0; i < depth; i++) {
        const t = (i / depth + scroll) % 1;
        const scale = 0.12 + t * 0.88;
        const hw = w * scale * 0.44;
        const hh = h * scale * 0.4;
        const top = cy - hh;
        const alpha = 0.32 + t * 0.58;
        const isNear = t > 0.68;

        const wallColor = isNear ? MARS_STONE_LT : MARS_STONE;
        const glowBoost = isNear ? flicker * 0.15 : 0;

        ctx.strokeStyle = `rgba(${wallColor}, ${alpha})`;
        ctx.strokeRect(cx - hw, top, hw * 2, hh * 2);

        ctx.fillStyle = `rgba(${MARS_GLOW}, ${alpha * 0.08 + glowBoost})`;
        ctx.fillRect(cx - hw + 2, top + 2, hw * 2 - 4, hh * 2 - 4);

        ctx.beginPath();
        ctx.moveTo(cx - hw, top);
        ctx.lineTo(cx, cy - hh * 0.12);
        ctx.lineTo(cx + hw, top);
        ctx.strokeStyle = `rgba(${MARS_STONE_LT}, ${alpha * 0.85})`;
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
          ctx.strokeStyle = `rgba(${MARS_STONE_LT}, ${alpha * 0.45})`;
          ctx.stroke();
        }

        if (isNear && i % 2 === 0) {
          ctx.fillStyle = `rgba(${MARS_LAVA}, ${0.12 + flicker * 0.08})`;
          ctx.fillRect(cx - hw + 4, top + hh * 1.6, hw * 0.3, hh * 0.35);
          ctx.fillRect(cx + hw * 0.55, top + hh * 1.6, hw * 0.3, hh * 0.35);
        }
      }

      drawFireStrip(w, h, flicker);

      const bob = Math.sin(frame * 0.14) * 4;
      drawPistol(cx + w * 0.08, h, bob);

      ctx.fillStyle = `rgba(${MARS_GLOW}, ${0.06 + flicker * 0.04})`;
      ctx.fillRect(0, 0, w, h);
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
      className="doom-corridor-overlay pointer-events-none absolute inset-0 z-[2]"
      aria-hidden
    />
  );
}
