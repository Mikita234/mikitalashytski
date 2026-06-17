"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { vintageWorks } from "@/content/home-vintage";
import { workCategories, type WorkCategory } from "@/content/selling";
import { VintageProjectCard } from "./VintageProjectCard";

export function WorksGrid() {
  const t = useTranslations("home.works");
  const tProjects = useTranslations("projects");
  const [active, setActive] = useState<WorkCategory>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? vintageWorks
        : vintageWorks.filter((w) => w.category === active),
    [active],
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {workCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
              active === cat
                ? "border-[var(--vhs-acid)] bg-[var(--vhs-acid)] text-black"
                : "border-white/20 text-[var(--vhs-muted)] hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"
            }`}
          >
            {t(`filters.${cat}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <VintageProjectCard
            key={w.slug}
            slug={w.slug}
            title={tProjects(`${w.slug}.cardTitle`)}
            desc={tProjects(`${w.slug}.cardDesc`)}
            tags={w.tags}
            status={w.status}
            href={w.href}
            style={w.style}
            domain={w.domain}
          />
        ))}
      </div>
    </>
  );
}
