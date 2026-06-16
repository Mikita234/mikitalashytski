"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  VintageBlock,
  VintageBulletList,
  VintageMetricCard,
  VintageSchemaTag,
} from "@/components/vintage/VintagePage";
import { GlitchText } from "@/components/vintage/GlitchText";
import { MarqueeTicker } from "@/components/vintage/MarqueeTicker";
import { ProjectLiveFrame } from "@/components/vintage/ProjectLiveFrame";
import { ProjectMiniPreview } from "@/components/vintage/ProjectMiniPreview";
import { ProjectTeletextPanel } from "@/components/vintage/ProjectTeletextPanel";
import { VintageProjectCard } from "@/components/vintage/VintageProjectCard";
import { BeforeAfterBlock } from "@/components/vintage/BeforeAfterBlock";
import { SystemFlowDiagram } from "@/components/vintage/SystemFlowDiagram";
import { CaseScreenshotGallery } from "@/components/vintage/CaseScreenshotGallery";
import { VHSButton } from "@/components/vintage/VHSButton";
import { projectVisuals, type ProjectSlug } from "@/content/project-visuals";
import { vintageWorks } from "@/content/home-vintage";
import { site } from "@/content/site";
import {
  projects,
  type Project,
  type AccentKey,
} from "@/content/projects";

const accentMap: Record<AccentKey, string> = {
  violet: "bg-[var(--vhs-terminal)]",
  amber: "bg-[var(--vhs-acid)]",
  cyan: "bg-[#00bfff]",
  rose: "bg-[var(--vhs-red)]",
};

const accentText: Record<AccentKey, string> = {
  violet: "text-[var(--vhs-terminal)]",
  amber: "text-[var(--vhs-acid)]",
  cyan: "text-[#00bfff]",
  rose: "text-[var(--vhs-red)]",
};

const accentGlow: Record<AccentKey, string> = {
  violet: "section-glow-terminal",
  amber: "from-amber-500/10",
  cyan: "from-cyan-500/10",
  rose: "section-glow-red",
};

const cardStyle: Record<string, "vhs" | "tv" | "teletext" | "ad" | "win98"> = {
  kayer: "vhs",
  "mnsk7-tools": "tv",
  popular: "teletext",
  alesyatakun: "ad",
  "event-bot": "win98",
  "baselinker-reports": "ad",
  "lead-scraping": "vhs",
  astrologichnaya: "teletext",
};

export function VintageProjectContent({ project }: { project: Project }) {
  const t = useTranslations(`projects.${project.slug}`);
  const pp = useTranslations("projectPage");
  const common = useTranslations("common");

  const slug = project.slug;
  const visual =
    slug in projectVisuals
      ? projectVisuals[slug as ProjectSlug]
      : { channel: "CH-INT", accent: "#888", accentGlow: "rgba(0,0,0,0)", domain: project.name, url: "" };
  const work = vintageWorks.find((w) => w.slug === slug);

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const nextWork = vintageWorks.find((w) => w.slug === next.slug);
  const dot = accentMap[project.accent];
  const textAccent = accentText[project.accent];

  const role = t.raw("role") as string[];
  const ops = t.raw("ops") as string[];
  const integrations = t.raw("integrations") as string[];
  const seo = t.raw("seo") as string[];
  const ai = t.raw("ai") as string[];

  const showBeforeAfter = project.caseStudyBlocks?.includes("beforeAfter");
  const showSystemFlow = project.caseStudyBlocks?.includes("systemFlow");
  const beforeAfter = showBeforeAfter
    ? (t.raw("beforeAfter") as { before: string[]; after: string[] })
    : null;
  const systemFlow = showSystemFlow
    ? (t.raw("systemFlow") as { title?: string; steps: string[] })
    : null;

  const nextStepsRaw = t.raw("nextSteps");
  const nextStepsIsList = Array.isArray(nextStepsRaw);

  const marquee = `${project.name} / ${project.domains.join(" / ")} / LIVE SIGNAL / ${visual.channel} /`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Works",
        item: `${site.url}/#works`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.name,
        item: `${site.url}/projects/${project.slug}`,
      },
    ],
  };

  const workLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    abstract: t("tagline"),
    description: t("summary"),
    creator: { "@type": "Person", name: site.name, url: site.url },
    url: project.links[0]?.href,
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd, workLd]} />

      <section
        className={`relative overflow-hidden border-b-2 border-[var(--vhs-dirt)] bg-[#0c0c0e] ${accentGlow[project.accent]}`}
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full opacity-20 blur-[100px]"
          style={{ background: visual.accent }}
          aria-hidden
        />

        <MarqueeTicker text={marquee} />

        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] hover:text-[var(--vhs-acid)]"
          >
            ← {common("backToProjects")}
          </Link>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1 lg:max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${textAccent}`}
                >
                  {t("category")}
                </span>
                <span className="font-mono text-[10px] text-[var(--vhs-muted)]">
                  · {project.year}
                </span>
                <span className="font-mono text-[10px] text-[var(--vhs-red)] rec-blink">
                  ● LIVE SIGNAL
                </span>
                <span className="font-mono text-[10px] text-[var(--vhs-muted)]">
                  · {visual.channel}
                </span>
              </div>

              <h1 className="deathcore-title mt-4 text-[clamp(2.5rem,10vw,4.5rem)] text-[var(--vhs-white)]">
                <span className="deathcore-title__spikes" aria-hidden>
                  {project.name}
                </span>
                <GlitchText as="span" className="relative z-10 block">
                  {project.name}
                </GlitchText>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-[var(--vhs-beige)] sm:text-lg">
                {t("tagline")}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 font-mono text-[10px] uppercase text-[var(--vhs-white)] transition-colors hover:border-[var(--vhs-acid)] hover:text-[var(--vhs-acid)]"
                  >
                    <span className={`h-1.5 w-1.5 ${dot}`} />
                    {l.label} ↗
                  </a>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {project.metrics.slice(0, 4).map((m) => (
                  <div
                    key={m.key}
                    className="border border-white/10 bg-[#141418]/80 p-3"
                  >
                    <p className="font-display text-xl font-bold text-[var(--vhs-white)]">
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-[8px] uppercase text-[var(--vhs-muted)]">
                      {t(`metrics.${m.key}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 lg:sticky lg:top-24">
              {project.hasLivePreview !== false &&
              project.links[0] &&
              slug in projectVisuals ? (
                <ProjectLiveFrame slug={slug as ProjectSlug} />
              ) : (
                <ProjectMiniPreview slug={slug} title={project.name} />
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <p className="border-l-4 border-[var(--vhs-acid)] pl-4 text-base leading-relaxed text-[var(--vhs-muted)] sm:text-lg">
            {t("summary")}
          </p>
          <ProjectTeletextPanel
            project={project}
            category={t("category")}
            channel={visual.channel}
          />
        </div>

        {beforeAfter && (
          <div className="mb-8">
            <BeforeAfterBlock
              title={pp("beforeAfter")}
              beforeLabel={pp("before")}
              afterLabel={pp("after")}
              before={beforeAfter.before}
              after={beforeAfter.after}
              accent={dot}
            />
          </div>
        )}

        {systemFlow && (
          <div className="mb-8">
            <SystemFlowDiagram
              title={systemFlow.title ?? pp("systemFlow")}
              steps={systemFlow.steps}
              accent={visual.accent}
            />
          </div>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <CaseScreenshotGallery
            screenshots={project.screenshots}
            projectName={project.name}
            title={pp("screenshots")}
            placeholderNote={common("screenshotPlaceholder")}
          />
        )}

        {slug === "popular" && (
          <div className="mb-8 border border-white/10 bg-[#141418]/60 p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
              ● {pp("relatedModule")}
            </p>
            <p className="mt-2 text-sm text-[var(--vhs-muted)]">
              {pp("eventBotNote")}
            </p>
            <div className="mt-4">
              <VHSButton href="/projects/event-bot" variant="secondary">
                {pp("eventBotLink")} →
              </VHSButton>
            </div>
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-2">
          <VintageBlock title={pp("problem")}>
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {t("problem")}
            </p>
          </VintageBlock>
          <VintageBlock title={pp("whatIDid")}>
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {t("whatIDid")}
            </p>
          </VintageBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={pp("result")}>
            <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
              {t("result")}
            </p>
          </VintageBlock>
          <VintageBlock title={pp("nextSteps")}>
            {nextStepsIsList ? (
              <VintageBulletList
                items={nextStepsRaw as string[]}
                accent={dot}
              />
            ) : (
              <p className="text-sm leading-relaxed text-[var(--vhs-muted)] sm:text-base">
                {nextStepsRaw as string}
              </p>
            )}
          </VintageBlock>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-red)]">
          ● CASE STUDY DATA
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {project.metrics.map((m) => (
            <VintageMetricCard
              key={m.key}
              value={m.value}
              label={t(`metrics.${m.key}`)}
              source={common(`sources.${m.source}`)}
              isPlaceholder={m.isPlaceholder}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={pp("role")}>
            <VintageBulletList items={role} accent={dot} />
          </VintageBlock>
          <VintageBlock title={pp("ops")}>
            <VintageBulletList items={ops} accent={dot} />
          </VintageBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={pp("stack")}>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-white/15 px-2 py-1 font-mono text-[10px] text-[var(--vhs-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </VintageBlock>
          <VintageBlock title={pp("integrations")}>
            <VintageBulletList items={integrations} accent={dot} />
          </VintageBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <VintageBlock title={pp("seo")}>
            <VintageBulletList items={seo} accent={dot} />
          </VintageBlock>
          <VintageBlock title={pp("ai")}>
            <VintageBulletList items={ai} accent={dot} />
          </VintageBlock>
        </div>

        <div className="mt-4">
          <VintageBlock title={pp("schema")}>
            <p className="mb-4 text-sm text-[var(--vhs-muted)]">
              {pp("schemaNote")}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.schema.map((s) => (
                <VintageSchemaTag key={s} label={s} />
              ))}
            </div>
          </VintageBlock>
        </div>

        {nextWork && (
          <div className="mt-12">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-terminal)]">
              ● NEXT CHANNEL
            </p>
            <VintageProjectCard
              slug={next.slug}
              title={next.name}
              desc={nextWork.desc}
              tags={nextWork.tags}
              status={nextWork.status}
              href={`/projects/${next.slug}`}
              style={cardStyle[next.slug] ?? "vhs"}
              domain={nextWork.domain}
            />
          </div>
        )}

        <div className="mt-10 text-center">
          <VHSButton href="/contact" variant="primary">
            Разобрать идею →
          </VHSButton>
        </div>
      </div>
    </>
  );
}
