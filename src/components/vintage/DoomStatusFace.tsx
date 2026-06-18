"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Pixel = "on" | "blood" | "off";

const FACE: Pixel[][] = [
  ["off", "on", "on", "on", "off"],
  ["on", "blood", "on", "blood", "on"],
  ["on", "on", "on", "on", "on"],
  ["on", "blood", "on", "blood", "on"],
  ["off", "on", "off", "on", "off"],
];

export function DoomStatusFace() {
  const reduced = useReducedMotion();

  return (
    <div
      className={`doom-status-face${reduced ? "" : " doom-status-face--pulse"}`}
      aria-hidden
      title="STATUS"
    >
      {FACE.flat().map((pixel, i) => (
        <span
          key={i}
          className={`doom-status-face__pixel${
            pixel === "on"
              ? " doom-status-face__pixel--on"
              : pixel === "blood"
                ? " doom-status-face__pixel--blood"
                : ""
          }`}
        />
      ))}
    </div>
  );
}
