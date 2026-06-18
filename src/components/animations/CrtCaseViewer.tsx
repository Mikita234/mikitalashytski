"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseTape } from "@/content/case-tapes";
import { getCaseTapeThumbnail } from "@/content/case-tapes";
import { CrtShell } from "./CrtShell";

type Props = {
  label: string;
  selectedCase: CaseTape | null;
};

function CasePreview({ tape }: { tape: CaseTape }) {
  const t = useTranslations("home.workstation");
  const thumb = getCaseTapeThumbnail(tape);
  const terminalLines = tape.terminalLines.slice(0, 3);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p
              className="truncate font-mono text-sm font-bold uppercase tracking-[0.08em] phosphor-text sm:text-base"
              style={{ color: tape.accent }}
            >
              {tape.label}
            </p>
            <p className="mt-1 font-mono text-[11px] leading-snug phosphor-text phosphor-text--muted sm:text-xs">
              {tape.type}
            </p>
          </div>
          <span
            className="shrink-0 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
            style={{
              borderColor: `${tape.accent}66`,
              color: tape.accent,
            }}
          >
            {tape.status}
          </span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
          <p>
            <span className="phosphor-text phosphor-text--muted">IN:</span>{" "}
            <span className="phosphor-text">{tape.input}</span>
          </p>
          <p>
            <span className="phosphor-text phosphor-text--muted">OUT:</span>{" "}
            <span className="phosphor-text">{tape.output}</span>
          </p>
        </div>

        {thumb && (
          <div className="relative mt-3 h-20 overflow-hidden border border-[var(--vhs-terminal)]/25 sm:h-24">
            <Image
              src={thumb}
              alt=""
              fill
              className="object-cover object-top opacity-80"
              sizes="360px"
              unoptimized
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.75))]"
              aria-hidden
            />
          </div>
        )}
      </div>

      <div className="crt-terminal-strip">
        <p className="crt-terminal-strip__title">{t("terminalTitle")}</p>
        <div className="crt-terminal-strip__body">
          {terminalLines.map((line) => (
            <div key={line} className="truncate phosphor-text text-[10px] sm:text-[11px]">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdleScreen() {
  const t = useTranslations("home.workstation");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
      <p className="phosphor-text font-mono text-xs uppercase tracking-[0.3em] sm:text-sm">
        {t("insertTape")}
      </p>
      <p className="font-mono text-[11px] phosphor-text phosphor-text--muted">
        {t("selectTape")}
      </p>
    </div>
  );
}

export function CrtCaseViewer({ label, selectedCase }: Props) {
  return (
    <CrtShell label={label} status="● CASE PREVIEW" trackingNoise={false}>
      <AnimatePresence mode="wait">
        {selectedCase ? (
          <motion.div
            key={selectedCase.slug}
            className="absolute inset-0 z-[2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CasePreview tape={selectedCase} />
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            className="absolute inset-0 z-[2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IdleScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </CrtShell>
  );
}
