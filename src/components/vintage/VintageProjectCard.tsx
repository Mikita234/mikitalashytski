"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ProjectStatus } from "@/content/home-vintage";
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
  const t = useTranslations("home.works");
  const isWin98 = style === "win98";
  const isHash = href.startsWith("#");
  const isExternal = href.startsWith("http");

  const inner = (
    <>
      <ProjectMiniPreview slug={slug} title={title} className="mb-4" />

      <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <span
          className={`shrink-0 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase ${statusColors[status]}`}
        >
          {status}
        </span>
        <span className="truncate font-mono text-[9px] tracking-wide text-[var(--vhs-muted)]">
          {domain}
        </span>
        {style === "vhs" && (
          <span className="font-mono text-[8px] text-[var(--vhs-red)] rec-blink">
            ● REC
          </span>
        )}
      </div>

      <h3
        className={`font-display text-2xl uppercase leading-none tracking-wide sm:text-3xl ${
          isWin98 ? "text-black" : "text-[var(--vhs-white)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 min-h-[4.5rem] text-xs leading-relaxed sm:text-sm ${
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
        className={`mt-5 inline-flex items-center gap-2 border-t border-current/20 pt-3 font-mono text-[10px] uppercase tracking-widest ${
          isWin98 ? "text-[#000080]" : "text-[var(--vhs-acid)]"
        }`}
      >
        {isExternal ? t("visitLive") : t("openCase")} <span aria-hidden>↗</span>
      </span>
    </>
  );

  const cls = `group block min-h-full overflow-hidden border-2 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--vhs-acid)] hover:shadow-[0_18px_50px_-24px_rgba(212,196,122,0.45)] ${styleClasses[style]} ${
    style === "vhs" ? "vhs-card-tape" : ""
  }`;

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

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
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
