"use client";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Guide } from "@/content/guides";
import { VhsCassette3D } from "@/components/animations/VhsCassette3D";

function cassetteLabel(guide: Guide, locale: Locale): string {
  const title = guide.title[locale];
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length <= 2) return title.slice(0, 18);
  return words
    .slice(0, 2)
    .map((w) => w.replace(/[^\p{L}\p{N}]/gu, ""))
    .join(" ")
    .slice(0, 16);
}

type Props = {
  guides: Guide[];
  locale: Locale;
  readLabel: string;
};

export function GuideTapeArchive({ guides, locale, readLabel }: Props) {
  return (
    <div className="vhs-tape-row -mx-4 flex gap-4 overflow-x-auto px-4 pb-3 snap-x snap-mandatory sm:mx-0 sm:flex-wrap sm:justify-start sm:overflow-visible sm:px-0">
      {guides.map((guide) => (
        <Link
          key={guide.slug}
          href={`/guides/${guide.slug}`}
          className="group shrink-0 snap-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--vhs-acid)]"
          aria-label={`${guide.title[locale]} — ${readLabel}`}
        >
          <VhsCassette3D
            label={cassetteLabel(guide, locale)}
            subtitle={guide.tape}
            interactive
            className="vhs-c3d--link"
          />
          <p className="mt-2 max-w-[8.5rem] text-center font-mono text-[8px] uppercase leading-tight tracking-widest text-[var(--vhs-muted)] group-hover:text-[var(--vhs-acid)]">
            {guide.channel}
          </p>
        </Link>
      ))}
    </div>
  );
}
