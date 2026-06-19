"use client";

import { NoiseOverlay } from "./NoiseOverlay";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { CursorMascot } from "./CursorMascot";
import { VHSNav } from "./VHSNav";
import { VintageFooter } from "./VintageFooter";
import { ConfusionTracker } from "@/components/feedback/ConfusionTracker";

export function VintageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseOverlay />
      <ScanlineOverlay global />
      <CursorMascot />
      <VHSNav />
      <main>{children}</main>
      <VintageFooter />
      <ConfusionTracker />
    </>
  );
}
