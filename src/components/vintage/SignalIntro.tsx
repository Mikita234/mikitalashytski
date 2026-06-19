"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SignalIntro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const t = useTranslations("home.intro");
  const [active, setActive] = useState(true);
  const [phase, setPhase] = useState<"search" | "flash">("search");

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => {
        onDone();
        setActive(false);
      }, 0);
      return () => clearTimeout(t);
    }

    const seen = sessionStorage.getItem("vhs-intro-seen");
    if (seen) {
      const t = setTimeout(() => {
        onDone();
        setActive(false);
      }, 0);
      return () => clearTimeout(t);
    }

    const t1 = setTimeout(() => setPhase("flash"), 700);
    const t2 = setTimeout(() => {
      sessionStorage.setItem("vhs-intro-seen", "1");
      setActive(false);
      onDone();
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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
            {t("searching")}
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
      </motion.div>
    </AnimatePresence>
  );
}
