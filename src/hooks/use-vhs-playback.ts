"use client";

import { useCallback, useEffect, useState } from "react";
import {
  caseTapes,
  getCaseTape,
  type CaseTape,
  type CaseTapeSlug,
} from "@/content/case-tapes";

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function useVhsPlayback() {
  const [selectedSlug, setSelectedSlug] = useState<CaseTapeSlug>(caseTapes[0].slug);
  const [seconds, setSeconds] = useState(0);

  const selectedCase: CaseTape | null = getCaseTape(selectedSlug) ?? null;

  useEffect(() => {
    setSeconds(0);
  }, [selectedSlug]);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const selectTape = useCallback((slug: CaseTapeSlug) => {
    setSelectedSlug(slug);
  }, []);

  return {
    selectedSlug,
    selectedCase,
    selectTape,
    timeCounter: formatTime(seconds),
  };
}
