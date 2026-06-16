"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CursorMascot() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 80, y: 80 });
  const [hidden, setHidden] = useState(false);

  const wander = useCallback(() => {
    if (reduced || typeof window === "undefined") return;
    setPos({
      x: 40 + Math.random() * (window.innerWidth - 120),
      y: 80 + Math.random() * (window.innerHeight - 200),
    });
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(wander, 8000);
    return () => clearInterval(id);
  }, [reduced, wander]);

  useEffect(() => {
    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setHidden(true);
    };
    const onLeave = () => setHidden(false);
    document.addEventListener("mouseover", onHover);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 hidden md:block"
      animate={{ x: pos.x, y: pos.y, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      aria-hidden
    >
      {/* Classic white arrow cursor shape */}
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path
          d="M2 2 L2 22 L8 16 L12 26 L15 25 L11 15 L20 15 Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}
