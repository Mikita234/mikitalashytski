"use client";

import { Link } from "@/i18n/navigation";
import type { ProjectStatus } from "@/content/home-vintage";
import type { ProjectSlug } from "@/content/project-visuals";
import { projectVisuals } from "@/content/project-visuals";
import { ProjectMiniPreview } from "./ProjectMiniPreview";

const statusColors: Record<ProjectStatus, string> = {
  LIVE: "bg-[var(--vhs-terminal)] text-black",
  EXPERIMENT: "bg-[var(--vhs-acid)] text-black",
  SOLD: "bg-[var(--vhs-beige)] text-black",
  "IN PROGRESS": "bg-[#ff6600] text-black",
};

const styleClasses = {
  vhs: "border-[var(--vhs-red)]/40 bg-gradient-to-br from-[#1a1010] to-[#141418]",
  tv: "border-[var(--vhs-blue)]/40 bg-gradient-to-br from-[#101828] to-[#141418]",
  teletext: "teletext-grid border-[#00f]/40",
  win98: "border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-black",
  ad: "border-[var(--vhs-yellow)]/40 bg-gradient-to-br from-[#1a1810] to-[#141418]",
};

type VintageWorkCardProps = {
  slug: string;
  title: string;
  desc: string;
  tags: readonly string[];
  status: ProjectStatus;
  href: string;
  style: keyof typeof styleClasses;
  domain: string;
};

export function VintageProjectCard({
  slug,
  title,
  desc,
  tags,
  status,
  href,
  style,
  domain,
}: VintageWorkCardProps) {
  const isWin98 = style === "win98";
  const isHash = href.startsWith("#");

  const inner = (
    <>
      <ProjectMiniPreview slug={slug} title={title} className="mb-4" />

      <div className="mb-3 flex items-start justify-between gap-2">
        <span
          className={`shrink-0 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase ${statusColors[status]}`}
        >
          {status}
        </span>
        <span className="font-mono text-[8px] text-[var(--vhs-muted)]">{domain}</span>
        {style === "vhs" && (
          <span className="font-mono text-[8px] text-[var(--vhs-red)] rec-blink">
            ● REC
          </span>
        )}
      </div>

      <h3
        className={`font-display text-lg uppercase tracking-wide sm:text-xl ${
          isWin98 ? "text-black" : "text-[var(--vhs-white)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-xs leading-relaxed sm:text-sm ${
          isWin98 ? "text-[#333]" : "text-[var(--vhs-muted)]"
        }`}
      >
        {desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`border px-1.5 py-0.5 font-mono text-[8px] uppercase ${
              isWin98
                ? "border-[#808080] text-black"
                : "border-white/15 text-[var(--vhs-muted)]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest ${
          isWin98 ? "text-[#000080]" : "text-[var(--vhs-acid)]"
        }`}
      >
        OPEN SIGNAL →
      </span>
    </>
  );

  const cls = `group block overflow-hidden border-2 transition-transform hover:-translate-y-1 ${styleClasses[style]}`;

  const body = (
    <div className="p-4 sm:p-5">{inner}</div>
  );

  if (isHash) {
    return (
      <a href={href} className={cls}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}
