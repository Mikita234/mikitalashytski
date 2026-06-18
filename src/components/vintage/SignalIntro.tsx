"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { vintagePopups } from "@/content/home-vintage";
import { PopupWindow } from "./PopupWindow";

export function SignalIntro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(true);
  const [phase, setPhase] = useState<"search" | "flash" | "popups">("search");
  const [showPopups, setShowPopups] = useState(false);

  useEffect(() => {
    if (reduced) {
      onDone();
      setActive(false);
      return;
    }

    const seen = sessionStorage.getItem("vhs-intro-seen");
    if (seen) {
      onDone();
      setActive(false);
      return;
    }

    const t1 = setTimeout(() => setPhase("flash"), 700);
    const t2 = setTimeout(() => {
      setPhase("popups");
      setShowPopups(true);
    }, 1100);
    const t3 = setTimeout(() => {
      sessionStorage.setItem("vhs-intro-seen", "1");
      setActive(false);
      onDone();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduced, onDone]);

  if (!active) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {phase === "search" && (
          <motion.p
            className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--vhs-terminal)] sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.7, 1] }}
            transition={{ duration: 0.7 }}
          >
            SEARCHING FOR SIGNAL…
          </motion.p>
        )}
        {phase === "flash" && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0] }}
            transition={{ duration: 0.35 }}
          />
        )}
        {showPopups && (
          <>
            <PopupWindow
              title={vintagePopups[0].title}
              text={vintagePopups[0].text}
              position="bottom-right"
              delay={0}
              storageKey={vintagePopups[0].id}
            />
            <PopupWindow
              title={vintagePopups[1].title}
              text={vintagePopups[1].text}
              position="bottom-left"
              delay={200}
              storageKey={vintagePopups[1].id}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
