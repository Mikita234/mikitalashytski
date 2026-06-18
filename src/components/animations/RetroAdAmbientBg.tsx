"use client";

import { AnimatePresence, motion } from "framer-motion";
import { retroCommercials } from "@/content/retro-commercials";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTvChannel } from "./tv-channel-context";

export function RetroAdAmbientBg() {
  const { index } = useTvChannel();
  const reduced = useReducedMotion();
  const ad = retroCommercials[index];
  const showStarburst =
    ad.visualStyle === "starburst" || ad.visualStyle === "infomercial";

  return (
    <div className="retro-ad-ambient" aria-hidden>
      <AnimatePresence mode="wait">
        <motion.div
          key={ad.id}
          className={`retro-ad-ambient__wash retro-ad-ambient--${ad.era} retro-ad-ambient--${ad.visualStyle}${
            reduced ? " retro-ad-ambient--static" : ""
          }`}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {showStarburst && (
        <div
          className={`retro-ad-ambient__starburst${
            reduced ? " retro-ad-ambient__starburst--static" : ""
          }`}
        />
      )}
    </div>
  );
}
