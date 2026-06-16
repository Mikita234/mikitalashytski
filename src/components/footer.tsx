"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export function Footer() {
  const pathname = usePathname();
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  if (pathname === "/") return null;

  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-sm font-bold text-black">
              {site.shortName}
            </span>
            <span className="font-display text-lg font-semibold">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">{t("tagline")}</p>
          <p className="mt-3 max-w-xs text-xs text-muted/70">{t("built")}</p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            {t("nav")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-muted hover:text-foreground">
                {nav("about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted hover:text-foreground">
                {nav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            {t("projects")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-muted hover:text-foreground"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </span>
          <span className="font-mono">{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
