import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { accentClasses, type Project } from "@/content/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const t = useTranslations(`projects.${project.slug}`);
  const common = useTranslations("common");
  const accent = accentClasses[project.accent];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 sm:p-8 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      } ${accent.glow}`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent.gradient} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-25`}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}
          >
            {t("category")}
          </span>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3
          className={`mt-5 font-display font-bold tracking-tight ${
            featured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {project.name}
        </h3>

        <p
          className={`mt-3 text-muted ${
            featured ? "max-w-lg text-base sm:text-lg" : "text-sm"
          }`}
        >
          {t("tagline")}
        </p>
      </div>

      <div className="relative mt-8 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.domains.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {d}
            </span>
          ))}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium ${accent.text}`}
        >
          {common("viewCase")}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
