"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const soundtrackSrc = "/audio/site-sound.mp3";

export function SiteSoundtrack() {
  const t = useTranslations("home.nav");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleSoundtrack() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <>
      {/* Music contains no spoken content that requires captions. */}
      <audio
        ref={audioRef}
        src={soundtrackSrc}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={(event) => {
          event.currentTarget.currentTime = 0;
          setIsPlaying(false);
        }}
      />
      <button
        type="button"
        onClick={toggleSoundtrack}
        aria-label={isPlaying ? t("soundAriaStop") : t("soundAriaPlay")}
        aria-pressed={isPlaying}
        title={t("soundTitle")}
        className={`inline-flex h-9 items-center gap-2 whitespace-nowrap border px-2 font-mono text-[9px] uppercase tracking-[0.14em] shadow-[0_0_16px_rgba(70,220,140,0.08)] transition-all sm:px-3 ${
          isPlaying
            ? "border-[var(--vhs-acid)] bg-[var(--vhs-acid)]/10 text-[var(--vhs-acid)]"
            : "border-[var(--vhs-terminal)]/60 bg-[var(--vhs-terminal)]/[0.06] text-[var(--vhs-white)] hover:border-[var(--vhs-acid)] hover:bg-[var(--vhs-acid)]/10 hover:text-[var(--vhs-acid)]"
        }`}
      >
        <span className={isPlaying ? "animate-pulse" : ""} aria-hidden>
          {isPlaying ? "■" : "▶"}
        </span>
        <span className="lg:hidden">
          {isPlaying ? t("soundStop") : t("soundCompact")}
        </span>
        <span className="hidden lg:inline">
          {isPlaying ? t("soundStop") : t("soundPlay")}
        </span>
      </button>
    </>
  );
}
