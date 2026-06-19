"use client";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Guide } from "@/content/guides";
import { VhsCassette3D } from "@/components/animations/VhsCassette3D";

type Props = {
  guides: Guide[];
  locale: Locale;
  readLabel: string;
};

export function GuideTapeArchive({ guides, locale, readLabel }: Props) {
  return (
    <div className="vhs-tape-row -mx-4 flex gap-6 overflow-x-auto px-6 pb-4 pt-2 snap-x snap-mandatory sm:mx-0 sm:px-2">
      {guides.map((guide) => (
        <Link
          key={guide.slug}
          href={`/guides/${guide.slug}`}
          className="vhs-tape-item group shrink-0 snap-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--vhs-acid)]"
          aria-label={`${guide.title[locale]} — ${readLabel}`}
        >
          <VhsCassette3D
            label={guide.channel}
            interactive
            showPlay
            className="vhs-c3d--link"
          />
          <p className="vhs-tape-item__title">{guide.title[locale]}</p>
          <p className="vhs-tape-item__code">{guide.tape}</p>
        </Link>
      ))}
    </div>
  );
}
