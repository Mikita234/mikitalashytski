"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectSlug } from "@/content/project-visuals";
import { projectVisuals, screenshotUrl } from "@/content/project-visuals";
import { ProjectMiniPreview } from "./ProjectMiniPreview";
import { ScanlineOverlay } from "./ScanlineOverlay";

type Props = {
  slug: ProjectSlug;
  className?: string;
};

export function ProjectLiveFrame({ slug, className = "" }: Props) {
  const v = projectVisuals[slug];
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="crt-tv-frame">
        <div className="crt-tv-frame__label">
          <span>{v.channel} — {v.domain}</span>
          <span className="rec-blink text-[var(--vhs-red)]">● ON AIR</span>
        </div>
        <div className="crt-tv-frame__bezel crt-flicker">
          <div className="browser-chrome browser-chrome--live">
            <div className="browser-chrome__bar">
              <div className="browser-chrome__dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-chrome__url">{v.url}</div>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="browser-chrome__open"
              >
                OPEN ↗
              </a>
            </div>
            <div className="browser-chrome__screen browser-chrome__screen--live relative aspect-[16/10]">
              {!failed && (
                <Image
                  src={screenshotUrl(v.url, 1200)}
                  alt={`Screenshot of ${v.domain}`}
                  fill
                  className={`object-cover object-top transition-opacity duration-700 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 900px"
                  onLoad={() => setLoaded(true)}
                  onError={() => setFailed(true)}
                  unoptimized
                />
              )}
              {(!loaded || failed) && (
                <div className="absolute inset-0">
                  <ProjectMiniPreview slug={slug} className="h-full rounded-none border-0 shadow-none" />
                </div>
              )}
              <ScanlineOverlay />
              <div
                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(51,255,102,0.06)]"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="crt-tv-frame__controls" aria-hidden>
          <div className="crt-tv-frame__dial" />
          <div className="crt-tv-frame__dial crt-tv-frame__dial--sm" />
          <div className="crt-tv-frame__sliders">
            <span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  );
}
