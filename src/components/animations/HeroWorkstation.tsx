"use client";

import { useTranslations } from "next-intl";
import { useVhsPlayback } from "@/hooks/use-vhs-playback";
import { CaseTapeRow } from "./CaseTapeRow";
import { CrtCaseViewer } from "./CrtCaseViewer";
import { VhsStatusBar } from "./VhsStatusBar";

export function HeroWorkstation() {
  const t = useTranslations("home.workstation");
  const { selectedSlug, selectedCase, selectTape, timeCounter } = useVhsPlayback();

  return (
    <div
      id="case-archive"
      className="hero-workstation flex w-full flex-col gap-3 lg:max-w-lg"
      aria-label={t("workstationLabel")}
    >
      <CrtCaseViewer label={t("crtLabel")} selectedCase={selectedCase} />
      <VhsStatusBar
        tapeLabel={selectedCase?.shortLabel ?? "—"}
        status={selectedCase?.status ?? "—"}
        timeCounter={timeCounter}
      />
      <CaseTapeRow selectedSlug={selectedSlug} onSelect={selectTape} />
    </div>
  );
}
