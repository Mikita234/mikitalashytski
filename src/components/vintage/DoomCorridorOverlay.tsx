"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FPS_DESKTOP = 20;
const FPS_MOBILE = 12;

/** Doom E1M1 / Mars base palette */
const SKY_TOP = [210, 175, 125];
const SKY_MID = [175, 130, 85];
const SKY_HORIZON = [130, 90, 58];
const MOUNTAIN_FAR = [75, 52, 36];
const MOUNTAIN_NEAR = [55, 36, 24];
const CEILING = [48, 32, 22];
const FLOOR_FAR = [108, 82, 62];
const FLOOR_NEAR = [78, 58, 44];
const WALL_DARK = [68, 50, 38];
const WALL_MID = [88, 66, 50];
const WALL_LIGHT = [108, 82, 62];
const MORTAR = [42, 30, 22];
const LAVA = [200, 70, 20];
const LAVA_GLOW = [255, 140, 40];

type PistolPixel = "." | "M" | "D" | "S" | "H";

const PISTOL: PistolPixel[][] = [
  ["M","M","M","M",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],
  [".","M","M","M","M","M",".",".",".",".",".",".",".",".",".",".",".",".",".","."],
  [".",".","M","M","M","M","M","M","M",".",".",".",".",".",".",".",".",".",".","."],
  [".",".",".","M","M","M","M","M","M","M","M","M",".",".",".",".",".",".",".","."],
  [".",".",".",".","M","M","M","M","M","M","M","M","M","M","M",".",".",".",".","."],
  [".",".",".",".",".","M","M","M","M","M","M","M","M","M","M","M","M",".",".","."],
  [".",".",".",".",".",".","D","M","M","M","M","M","M","M","M","M","M","M",".","."],
  [".",".",".",".",".","D","D","M","M","M","M","M","M","M","M","M","M","M","M","."],
  [".",".",".",".","S","S","D","D","M","M","M","M","M","M","M","M","M","M","M","M"],
  [".",".",".","S","S","S","S","D","D","M","M","M","M","M","M","M","M","M","M","M"],
  [".",".","S","S","S","S","S","S","D","D","M","M","M","M","M","M","M","M","M","M"],
  [".",".","S","S","S","S","S","S","S","D","D","M","M","M","M","M","M","M","M","."],
  [".",".",".","S","S","S","S","S","S","S","D","D","M","M","M","M","M",".",".","."],
  [".",".",".",".","S","S","S","S","S","S","S","D","D","M","M",".",".",".",".","."],
  [".",".",".",".",".","S","S","S","S","S","S","S","D","D",".",".",".",".",".","."],
];

const PISTOL_COLORS: Record<Exclude<PistolPixel, ".">, string> = {
  M: "rgb(118, 108, 92)",
  D: "rgb(58, 48, 40)",
  S: "rgb(168, 128, 96)",
  H: "rgb(148, 138, 118)",
};

const MOUNTAIN_PROFILE = [
  0.52, 0.48, 0.55, 0.44, 0.58, 0.5, 0.62, 0.46, 0.56, 0.42, 0.6, 0.48, 0.54, 0.4,
  0.58, 0.45, 0.52, 0.38, 0.55, 0.44, 0.5, 0.42, 0.56, 0.48, 0.53, 0.46, 0.57, 0.5,
  0.54, 0.47, 0.59, 0.43,
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function rgb(c: number[]) {
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

function lerpRgb(a: number[], b: number[], t: number) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}

export function DoomCorridorOverlay({ active = true }: { active?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !active) return;

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

    const drawSky = (w: number, h: number) => {
      const horizonY = h * 0.36;
      const grad = ctx.createLinearGradient(0, 0, 0, horizonY);
      grad.addColorStop(0, rgb(SKY_TOP));
      grad.addColorStop(0.45, rgb(SKY_MID));
      grad.addColorStop(1, rgb(SKY_HORIZON));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, horizonY + 2);

      const step = Math.max(3, Math.floor(w / 64));
      for (let x = 0; x < w; x += step) {
        const idx = Math.floor((x / w) * MOUNTAIN_PROFILE.length);
        const profile = MOUNTAIN_PROFILE[idx] ?? 0.5;
        const peakH = profile * h * 0.14 + 6;
        const peakY = horizonY - peakH;
        const isNear = profile > 0.52;
        ctx.fillStyle = rgb(isNear ? MOUNTAIN_NEAR : MOUNTAIN_FAR);
        ctx.fillRect(x, peakY, step, peakH + 2);
      }

      ctx.fillStyle = rgb(SKY_HORIZON);
      ctx.fillRect(0, horizonY - 1, w, 3);
    };

    const drawBrickFill = (
      x: number,
      y: number,
      bw: number,
      bh: number,
      base: number[],
      scroll: number,
      depth: number
    ) => {
      const shade = lerpRgb(base, [base[0] * 0.55, base[1] * 0.55, base[2] * 0.55], depth * 0.55);
      ctx.fillStyle = rgb(shade);
      ctx.fillRect(x, y, bw, bh);

      const brickH = Math.max(4, Math.floor(8 - depth * 3));
      const brickW = Math.max(6, Math.floor(14 - depth * 4));
      const offset = Math.floor(scroll * 40) % brickW;

      ctx.strokeStyle = rgb(MORTAR);
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.55 + depth * 0.25;

      for (let by = y; by < y + bh; by += brickH) {
        ctx.beginPath();
        ctx.moveTo(x, by);
        ctx.lineTo(x + bw, by);
        ctx.stroke();
      }

      const row = Math.floor((y - scroll * 20) / brickH);
      const rowOffset = (row % 2) * (brickW / 2);

      for (let bx = x - offset + rowOffset; bx < x + bw; bx += brickW) {
        ctx.beginPath();
        ctx.moveTo(bx, y);
        ctx.lineTo(bx, y + bh);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      const specks = Math.floor(bw * bh / 120);
      for (let s = 0; s < specks; s++) {
        const sx = x + ((s * 17 + frame) % bw);
        const sy = y + ((s * 13 + frame * 2) % bh);
        const lighter = lerpRgb(shade, WALL_LIGHT, 0.25);
        ctx.fillStyle = rgb(lighter);
        ctx.fillRect(sx, sy, 1, 1);
      }
    };

    const drawTexturedQuad = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number,
      base: number[],
      scroll: number,
      depth: number
    ) => {
      const minX = Math.min(x1, x2, x3, x4);
      const maxX = Math.max(x1, x2, x3, x4);
      const minY = Math.min(y1, y2, y3, y4);
      const maxY = Math.max(y1, y2, y3, y4);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x4, y4);
      ctx.closePath();
      ctx.clip();
      drawBrickFill(minX, minY, maxX - minX, maxY - minY, base, scroll, depth);
      ctx.restore();
    };

    const drawCorridor = (w: number, h: number, scroll: number) => {
      const cx = w / 2;
      const horizonY = h * 0.36;
      const cy = h * 0.52;
      const slices = 10;

      for (let i = slices - 1; i >= 0; i--) {
        const t = (i / slices + scroll) % 1;
        const scale = 0.1 + t * 0.9;
        const hw = w * scale * 0.46;
        const hh = h * scale * 0.38;
        const top = cy - hh;
        const bottom = cy + hh;
        const depth = 1 - t;
        const wallBase = depth > 0.55 ? WALL_DARK : depth > 0.3 ? WALL_MID : WALL_LIGHT;

        const ceilColor = lerpRgb(CEILING, WALL_DARK, t * 0.4);
        ctx.fillStyle = rgb(ceilColor);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w, 0);
        ctx.lineTo(cx + hw, top);
        ctx.lineTo(cx - hw, top);
        ctx.closePath();
        ctx.fill();

        const floorColor = lerpRgb(FLOOR_FAR, FLOOR_NEAR, t);
        ctx.fillStyle = rgb(floorColor);
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(w, h);
        ctx.lineTo(cx + hw, bottom);
        ctx.lineTo(cx - hw, bottom);
        ctx.closePath();
        ctx.fill();

        drawTexturedQuad(
          0, top, cx - hw, top, cx - hw, bottom, 0, bottom,
          wallBase, scroll + i * 0.1, depth
        );
        drawTexturedQuad(
          cx + hw, top, w, top, w, bottom, cx + hw, bottom,
          wallBase, scroll + i * 0.1 + 0.5, depth
        );

        if (t > 0.72 && i % 2 === 0) {
          const lavaAlpha = 0.18 + 0.08 * Math.sin(frame * 0.25 + i);
          ctx.fillStyle = `rgba(${LAVA.join(",")}, ${lavaAlpha})`;
          ctx.fillRect(cx - hw + 6, bottom - hh * 0.22, hw * 0.35, hh * 0.12);
          ctx.fillRect(cx + hw * 0.55, bottom - hh * 0.22, hw * 0.35, hh * 0.12);
        }

        if (i === 0) {
          ctx.fillStyle = `rgba(${LAVA_GLOW.join(",")}, 0.12)`;
          ctx.fillRect(cx - hw, top, hw * 2, 2);
        }
      }

      ctx.fillStyle = rgb(SKY_HORIZON);
      ctx.fillRect(0, horizonY - 1, w, 2);
    };

    const drawPistol = (w: number, h: number, bob: number) => {
      const px = Math.max(2, Math.floor(h / 90));
      const rows = PISTOL.length;
      const cols = PISTOL[0].length;
      const totalW = cols * px;
      const totalH = rows * px;
      const originX = w * 0.52 - totalW * 0.35;
      const originY = h - totalH - 8 + bob;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = PISTOL[r][c];
          if (cell === ".") continue;
          ctx.fillStyle = PISTOL_COLORS[cell];
          ctx.fillRect(
            Math.floor(originX + c * px),
            Math.floor(originY + r * px),
            px,
            px
          );
        }
      }
    };

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 1000 / fps) return;
      last = now;
      frame += 1;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const scroll = (frame * 0.035) % 1;
      const bob = Math.sin(frame * 0.14) * 2;

      ctx.clearRect(0, 0, w, h);
      drawSky(w, h);
      drawCorridor(w, h, scroll);
      drawPistol(w, h, bob);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced, active]);

  if (reduced || !active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="doom-corridor-overlay pointer-events-none absolute inset-0 z-[2]"
      aria-hidden
    />
  );
}
