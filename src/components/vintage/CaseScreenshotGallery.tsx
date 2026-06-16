"use client";

import Image from "next/image";
import { useState } from "react";

interface CaseScreenshotGalleryProps {
  screenshots: string[];
  projectName: string;
  title: string;
  placeholderNote: string;
}

export function CaseScreenshotGallery({
  screenshots,
  projectName,
  title,
  placeholderNote,
}: CaseScreenshotGalleryProps) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  if (!screenshots.length) return null;

  const current = screenshots[active];
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
            <Image
              src={current}
              alt={`${projectName} screenshot ${active + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
              onError={() => setFailed((prev) => ({ ...prev, [active]: true }))}
            />
          )}
        </div>
        {screenshots.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {screenshots.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
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
