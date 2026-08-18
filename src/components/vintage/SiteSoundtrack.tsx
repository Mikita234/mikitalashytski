"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const soundtrackSrc = "/audio/defo-site-intro.mp3";

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
        className={`inline-flex h-9 items-center gap-2 border px-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors sm:px-3 ${
          isPlaying
            ? "border-[var(--vhs-acid)] bg-[var(--vhs-acid)]/10 text-[var(--vhs-acid)]"
            : "border-white/20 text-[var(--vhs-muted)] hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"
        }`}
      >
        <span aria-hidden>{isPlaying ? "■" : "▶"}</span>
        <span className="hidden lg:inline">
          {isPlaying ? t("soundStop") : t("soundPlay")}
        </span>
      </button>
    </>
  );
}
