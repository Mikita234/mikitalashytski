"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Pixel = "on" | "blood" | "off";

const FACES: Record<string, Pixel[][]> = {
  idle: [
    ["off", "on", "on", "on", "off"],
    ["on", "blood", "on", "blood", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "blood", "on", "blood", "on"],
    ["off", "on", "off", "on", "off"],
  ],
  grunt: [
    ["off", "on", "on", "on", "off"],
    ["on", "blood", "on", "blood", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "off", "off", "on"],
  ],
  hurt: [
    ["blood", "on", "on", "on", "blood"],
    ["on", "blood", "on", "blood", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["off", "on", "off", "on", "off"],
  ],
};

const FACE_CYCLE = ["idle", "grunt", "idle", "hurt", "idle"] as const;

export function DoomStatusFace() {
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
      className={`doom-status-face${reduced ? "" : " doom-status-face--pulse"}`}
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
                : ""
          }`}
        />
      ))}
    </div>
  );
}
