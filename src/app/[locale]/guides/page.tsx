import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  VintagePageHeader,
  VintageSectionHeader,
  VintageBulletList,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import {
  guideIntro,
  guideLabels,
  guideRoadmap,
  guideTopicExpansion,
  guides,
} from "@/content/guides";
import { guidesPipelineUpdate, pipelineHub, marketingHub } from "@/content/pipeline";
import { marketingPipelines } from "@/data/marketing-pipelines";
import { site } from "@/content/site";
import { GuideTapeArchive } from "@/components/guides/GuideTapeArchive";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const gp = guidesPipelineUpdate[l];
  return {
    title: gp.heroTitle,
    description: gp.heroSubtitle,
    alternates: buildAlternates(locale, "/guides"),
  };
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "home.nav" });
  const intro = guideIntro[l];
  const labels = guideLabels[l];
  const roadmap = guideRoadmap[l];
  const topicExpansion = guideTopicExpansion[l];
  const gp = guidesPipelineUpdate[l];
  const hub = pipelineHub[l];
  const mkt = marketingHub[l];

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: gp.heroTitle,
    description: gp.heroSubtitle,
    url: `${site.url}${l === routing.defaultLocale ? "" : `/${l}`}/guides`,
    inLanguage: l,
    author: { "@type": "Person", name: site.name, url: site.url },
    hasPart: guides.map((guide) => ({
      "@type": "Article",
      headline: guide.title[l],
      description: guide.description[l],
      url: `${site.url}${l === routing.defaultLocale ? "" : `/${l}`}/guides/${guide.slug}`,
    })),
  };

  const readyItems = [
    { code: "READY-01", title: hub.cardsTitle, href: "/pipeline", body: hub.subtitle },
    { code: "READY-02", title: hub.ctaBeginner, href: "/pipeline/beginner", body: hub.outcomeTitle },
    { code: "READY-03", title: mkt.title, href: "/pipeline/marketing", body: mkt.subtitle },
    { code: "READY-04", title: guides.find((g) => g.slug === "website-launch-checklist-full")!.title[l], href: "/guides/website-launch-checklist-full", body: guides.find((g) => g.slug === "website-launch-checklist-full")!.description[l] },
    { code: "READY-05", title: guides.find((g) => g.slug === "google-search-console-setup")!.title[l], href: "/guides/google-search-console-setup", body: guides.find((g) => g.slug === "google-search-console-setup")!.description[l] },
    { code: "READY-06", title: guides.find((g) => g.slug === "frameworks-pick-2026")!.title[l], href: "/guides/frameworks-pick-2026", body: guides.find((g) => g.slug === "frameworks-pick-2026")!.description[l] },
  ];

  const marketingCards = marketingPipelines.slice(0, 6).map((p) => ({
    code: p.tag,
    title: p.title[l],
    href: `/pipeline/marketing/${p.id}`,
    body: p.honestNote[l],
  }));

  const publishedMarketingGuides = [
    guides.find((g) => g.slug === "tiktok-for-small-business")!,
    guides.find((g) => g.slug === "google-ads-starter")!,
    guides.find((g) => g.slug === "yandex-for-ru-market")!,
  ];

  return (
    <>
      <JsonLd data={collectionLd} />
      <VintagePageHeader
        tag={gp.heroTag}
        title={gp.heroTitle}
        subtitle={gp.heroSubtitle}
      />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div className="border-l-4 border-[var(--vhs-acid)] pl-4">
            <p className="type-tag text-[var(--vhs-acid)]">
              ● {hub.defaultNote}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--vhs-body)] sm:text-lg">
              {hub.outcomeTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {hub.outcomeItems.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--vhs-muted)]">
                  <span className="text-[var(--vhs-acid)]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col flex-wrap items-stretch gap-3 lg:items-end">
            <VHSButton href="/pipeline" variant="primary">
              {gp.ctaPipeline} →
            </VHSButton>
            <VHSButton href="/pipeline/beginner" variant="secondary">
              {gp.ctaBeginner}
            </VHSButton>
            <VHSButton href="/order" variant="secondary">
              {intro.secondary}
            </VHSButton>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={gp.personasTag}
            title={gp.personasTitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: gp.persona1Title, body: gp.persona1Body, code: "P-01" },
              { title: gp.persona2Title, body: gp.persona2Body, code: "P-02" },
              { title: gp.persona3Title, body: gp.persona3Body, code: "P-03" },
            ].map((persona) => (
              <div
                key={persona.code}
                className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                  {persona.code}
                </span>
                <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--vhs-white)]">
                  {persona.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {persona.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={gp.readyTag}
            title={gp.readyTitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {readyItems.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                className="border border-white/10 bg-[#101014] p-5 hover:border-[var(--vhs-acid)]"
              >
                <span className="font-mono text-[10px] uppercase text-[var(--vhs-terminal)]">
                  {item.code}
                </span>
                <h2 className="mt-3 font-display text-xl uppercase text-[var(--vhs-white)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--vhs-muted)]">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={gp.marketingTag}
            title={gp.marketingTitle}
            subtitle={gp.marketingSubtitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketingCards.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                className="border border-white/10 bg-[#101014] p-5 hover:border-[var(--vhs-acid)]"
              >
                <span className="font-mono text-[10px] uppercase text-[var(--vhs-terminal)]">
                  {item.code}
                </span>
                <h2 className="mt-3 font-display text-xl uppercase text-[var(--vhs-white)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--vhs-muted)]">{item.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <VHSButton href="/pipeline/marketing" variant="primary">
              {mkt.title} →
            </VHSButton>
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={gp.comingTag}
            title={gp.comingTitle}
            subtitle={gp.marketingSubtitle}
            tagClassName="text-[var(--doom-ammo)]"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedMarketingGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5 hover:border-[var(--vhs-acid)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {guide.tape}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-acid)]">
                    {gp.comingTag}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--vhs-white)]">
                  {guide.title[l]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {guide.description[l]}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={roadmap.tag}
            title={roadmap.modulesTitle}
            subtitle={roadmap.subtitle}
            tagClassName="text-[var(--doom-ammo)]"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {roadmap.modules.slice(0, 4).map((module) => (
              <div
                key={module.code}
                className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5 opacity-90"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {module.code}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-muted)]">
                    {roadmap.tag}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--vhs-white)]">
                  {module.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {module.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={gp.whereBreaks}
            title={gp.whereBreaks}
            subtitle={gp.whereBreaksBody}
            tagClassName="text-[var(--vhs-red)]"
          />
          <VintageBulletList
            items={guides[3].mistakes[l]}
            accent="bg-[var(--vhs-red)]"
          />
          <div className="mt-8">
            <VHSButton href="/pipeline/rescue" variant="primary">
              {gp.ctaAfterBreaks}
            </VHSButton>
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={topicExpansion.tag}
            title={topicExpansion.title}
            subtitle={topicExpansion.subtitle}
            tagClassName="text-[var(--doom-ammo)]"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topicExpansion.items.slice(0, 6).map((topic) => (
              <div
                key={topic.code}
                className="border border-white/10 bg-[#101014] p-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--doom-ammo)]">
                  {topic.code}
                </span>
                <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--vhs-white)]">
                  {topic.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <VintageSectionHeader
          tag={labels.all}
          title={t("guides")}
          subtitle={intro.subtitle}
          tagClassName="text-[var(--vhs-terminal)]"
        />

        <section className="mb-10 border-2 border-[var(--doom-stone)] bg-[#0c0c0e] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--vhs-terminal)]">
            ● Tape archive
          </p>
          <p className="mt-2 max-w-2xl text-sm text-[var(--vhs-muted)]">
            {intro.subtitle}
          </p>
          <div className="mt-6">
            <GuideTapeArchive
              guides={guides}
              locale={l}
              readLabel={labels.read}
            />
          </div>
        </section>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group relative min-h-[260px] overflow-hidden border-2 border-[var(--doom-stone)] bg-[#141418] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--vhs-acid)]"
            >
              <div className="absolute inset-x-0 top-0 h-8 border-b border-black/40 bg-[repeating-linear-gradient(90deg,#1e1e24_0,#1e1e24_14px,#0a0a0a_14px,#0a0a0a_18px)]" />
              <div className="relative pt-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {guide.tape}
                  </span>
                  <span className="font-mono text-[9px] uppercase text-[var(--vhs-muted)]">
                    {guide.minutes} {labels.minutes}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl uppercase leading-none text-[var(--vhs-white)]">
                  {guide.title[l]}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {guide.description[l]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-acid)]">
                  {labels.read} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
