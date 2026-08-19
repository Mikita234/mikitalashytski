"use client";

import Image from "next/image";
import { useState } from "react";

interface CaseScreenshotGalleryProps {
  screenshots: string[];
  projectName: string;
  title: string;
  placeholderNote: string;
  captions?: string[];
  fit?: "cover" | "contain";
}

export function CaseScreenshotGallery({
  screenshots,
  projectName,
  title,
  placeholderNote,
  captions,
  fit = "cover",
}: CaseScreenshotGalleryProps) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  if (!screenshots.length) return null;

  const current = screenshots[active];
  const currentCaption = captions?.[active];
  const showPlaceholder = failed[active];

  return (
    <div className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-red)]">
        ● {title}
      </p>
      <div className="mt-4 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] p-2">
        <div className="relative aspect-video overflow-hidden border border-[#808080] bg-[#1a1a1e]">
          {showPlaceholder ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
              <p className="font-mono text-xs uppercase text-[var(--vhs-muted)]">
                {projectName}
              </p>
              <p className="font-mono text-[10px] text-[var(--vhs-muted)]">
                {placeholderNote}
              </p>
              <p className="font-mono text-[9px] text-[var(--vhs-terminal)]">
                {current}
              </p>
            </div>
          ) : (
            <>
              <Image
                src={current}
                alt={currentCaption ? "" : `${projectName} screenshot ${active + 1}`}
                fill
                className={fit === "contain" ? "object-contain" : "object-cover object-top"}
                sizes="(max-width: 768px) 100vw, 800px"
                onError={() => setFailed((prev) => ({ ...prev, [active]: true }))}
              />
              <a
                href={current}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={currentCaption ?? `${projectName} screenshot ${active + 1}`}
              >
                <span className="absolute right-2 top-2 border border-white/30 bg-black/70 px-2 py-1 font-mono text-[9px] text-white">
                  ↗
                </span>
              </a>
            </>
          )}
        </div>
        {currentCaption && (
          <p className="border-x border-b border-[#808080] bg-white px-3 py-2 font-mono text-[10px] leading-relaxed text-[#202020]">
            {currentCaption}
          </p>
        )}
        {screenshots.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {screenshots.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={captions?.[i] ?? `${projectName} screenshot ${i + 1}`}
                className={`border px-2 py-1 font-mono text-[9px] uppercase ${
                  i === active
                    ? "border-[#000080] bg-[#000080] text-white"
                    : "border-[#808080] bg-white text-black hover:bg-[#dfdfdf]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
