import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
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

  return buildSeoMetadata({
    locale,
    path: `/projects/${slug}`,
    title,
    description,
    type: "article",
  });
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
