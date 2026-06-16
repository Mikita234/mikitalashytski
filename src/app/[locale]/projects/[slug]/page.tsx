import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { site } from "@/content/site";
import { routing } from "@/i18n/routing";
import { projects, getProject } from "@/content/projects";
import { VintageProjectContent } from "@/components/vintage/VintageProjectContent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: `projects.${slug}` });
  const title = `${project.name} — ${t("category")}`;
  const description = t("tagline");

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/projects/${slug}`),
    openGraph: {
      title,
      description,
      type: "article",
      url: `${site.url}${locale === routing.defaultLocale ? "" : `/${locale}`}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();
  return <VintageProjectContent project={project} />;
}
