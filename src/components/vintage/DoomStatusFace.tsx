"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Pixel = "on" | "blood" | "off" | "skin" | "hair";

const FACES: Record<string, Pixel[][]> = {
  idle: [
    ["off", "hair", "hair", "hair", "hair", "hair", "off"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["hair", "skin", "on", "skin", "on", "skin", "hair"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["hair", "skin", "on", "on", "on", "skin", "hair"],
    ["hair", "skin", "skin", "off", "skin", "skin", "hair"],
    ["off", "hair", "hair", "hair", "hair", "hair", "off"],
  ],
  grunt: [
    ["off", "hair", "hair", "hair", "hair", "hair", "off"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["hair", "skin", "blood", "skin", "blood", "skin", "hair"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["hair", "skin", "on", "on", "on", "skin", "hair"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["off", "hair", "hair", "hair", "hair", "hair", "off"],
  ],
  hurt: [
    ["blood", "hair", "hair", "hair", "hair", "hair", "blood"],
    ["hair", "skin", "blood", "skin", "blood", "skin", "hair"],
    ["hair", "skin", "skin", "skin", "skin", "skin", "hair"],
    ["hair", "skin", "on", "on", "on", "skin", "hair"],
    ["hair", "skin", "off", "skin", "off", "skin", "hair"],
    ["hair", "skin", "skin", "off", "skin", "skin", "hair"],
    ["off", "hair", "hair", "hair", "hair", "hair", "off"],
  ],
};

const FACE_CYCLE = ["idle", "grunt", "idle", "hurt", "idle"] as const;

type DoomStatusFaceProps = {
  variant?: "bezel" | "hud";
};

export function DoomStatusFace({ variant = "hud" }: DoomStatusFaceProps) {
  const reduced = useReducedMotion();
  const [faceIndex, setFaceIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setFaceIndex((i) => (i + 1) % FACE_CYCLE.length);
    }, 1400);
    return () => clearInterval(id);
  }, [reduced]);

  const face = FACES[FACE_CYCLE[faceIndex]] ?? FACES.idle;

  return (
    <div
      className={`doom-status-face doom-status-face--${variant}${
        reduced ? "" : " doom-status-face--pulse"
      }`}
      aria-hidden
      title="STATUS"
    >
      {face.flat().map((pixel, i) => (
        <span
          key={i}
          className={`doom-status-face__pixel${
            pixel === "on"
              ? " doom-status-face__pixel--on"
              : pixel === "blood"
                ? " doom-status-face__pixel--blood"
                : pixel === "skin"
                  ? " doom-status-face__pixel--skin"
                  : pixel === "hair"
                    ? " doom-status-face__pixel--hair"
                    : ""
          }`}
        />
      ))}
    </div>
  );
}
