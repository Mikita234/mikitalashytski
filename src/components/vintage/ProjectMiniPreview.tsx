"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectSlug } from "@/content/project-visuals";
import { projectVisuals, screenshotUrl } from "@/content/project-visuals";

type Props = {
  slug: string;
  className?: string;
  title?: string;
};

export function ProjectMiniPreview({ slug, className = "", title }: Props) {
  if (slug in projectVisuals) {
    return <ScreenshotPreview slug={slug as ProjectSlug} className={className} />;
  }
  return <GenericPreview title={title ?? slug} className={className} />;
}

function GenericPreview({ title, className }: { title: string; className: string }) {
  return (
    <div className={`browser-chrome overflow-hidden ${className}`}>
      <div className="browser-chrome__bar">
        <div className="browser-chrome__dots"><span /><span /><span /></div>
        <div className="browser-chrome__url">{title.toLowerCase()}</div>
        <span className="browser-chrome__live rec-blink">● BUILD</span>
      </div>
      <div className="browser-chrome__screen flex items-center justify-center bg-[#0a0a0a] p-4">
        <div className="text-center font-mono">
          <p className="text-[10px] text-[var(--vhs-terminal)]">▶ {title}</p>
          <p className="mt-2 text-[8px] text-[var(--vhs-muted)]">internal / pipeline</p>
        </div>
      </div>
    </div>
  );
}

function ScreenshotPreview({ slug, className }: { slug: ProjectSlug; className: string }) {
  const v = projectVisuals[slug];
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`browser-chrome overflow-hidden ${className}`}
      style={{ "--preview-accent": v.accent } as React.CSSProperties}
    >
      <div className="browser-chrome__bar">
        <div className="browser-chrome__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-chrome__url">{v.domain}</div>
        <span className="browser-chrome__live rec-blink">● LIVE</span>
      </div>
      <div className="browser-chrome__screen relative aspect-[16/10] bg-[#0a0a0a]">
        {!failed && (
          <Image
            src={screenshotUrl(v.url, 640)}
            alt={`Screenshot of ${v.domain}`}
            fill
            className={`object-cover object-top transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 50vw, 320px"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            unoptimized
          />
        )}
        {(!loaded || failed) && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f14]">
            <div className="text-center font-mono">
              <p className="text-[10px]" style={{ color: v.accent }}>
                {v.domain}
              </p>
              <p className="mt-1 text-[8px] text-[var(--vhs-muted)]">
                {failed ? "preview unavailable" : "loading…"}
              </p>
            </div>
          </div>
        )}
        <div className="browser-chrome__scanlines" aria-hidden />
      </div>
    </div>
  );
}
