import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { StackMatrix } from "@/components/pipeline/StackMatrix";
import { VintageBlock, VintageBulletList, VintagePageHeader } from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildSeoMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { stacksPage, pipelineHub, pipelineLabels, stacksPhilosophy, stacksPractical } from "@/content/pipeline";
import { VintageSectionHeader } from "@/components/vintage/VintagePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const copy = stacksPage[l];
  return buildSeoMetadata({
    locale,
    path: "/pipeline/stacks",
    title: copy.title,
    description: copy.subtitle,
  });
}

export default async function PipelineStacksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const hub = pipelineHub[l];
  const labels = pipelineLabels[l];
  const practical = stacksPractical[l];

  return (
    <>
      <VintagePageHeader
        tag={stacksPage[l].tag}
        title={stacksPage[l].title}
        subtitle={stacksPage[l].subtitle}
      />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto max-w-6xl border-l-4 border-[var(--vhs-acid)] px-4 py-6 sm:px-6">
          <p className="text-sm leading-relaxed text-[var(--vhs-body)] sm:text-base">
            {labels.defaultStackBody}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={stacksPhilosophy[l].tag}
            title={stacksPhilosophy[l].title}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stacksPhilosophy[l].items.map((item) => (
              <div key={item.code} className="border border-white/10 bg-[#101014] p-5">
                <span className="font-mono text-[10px] uppercase text-[var(--vhs-terminal)]">
                  {item.code}
                </span>
                <h2 className="mt-3 font-display text-xl uppercase text-[var(--vhs-white)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--vhs-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={practical.tag}
            title={practical.title}
            subtitle={practical.subtitle}
            tagClassName="text-[var(--vhs-acid)]"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {practical.playbooks.map((item) => (
              <div key={item.code} className="border border-white/10 bg-[#101014] p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                    {item.code}
                  </span>
                  <span className="max-w-full border border-[var(--doom-stone)]/70 bg-[#1a1a1f] px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-muted)]">
                    {item.stack}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl uppercase text-[var(--vhs-white)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-body)]">
                  {item.useWhen}
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
                      {labels.firstSteps}
                    </p>
                    <div className="mt-3">
                      <VintageBulletList items={item.steps} />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--vhs-red)]">
                      {labels.dont}
                    </p>
                    <div className="mt-3">
                      <VintageBulletList items={item.avoid} accent="bg-[var(--vhs-red)]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-b border-[var(--doom-stone)]/50 pb-14">
          <VintageSectionHeader
            tag={practical.tag}
            title={practical.rulesTitle}
            subtitle={practical.subtitle}
            tagClassName="text-[var(--doom-red)]"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <VintageBlock title={practical.rulesTitle}>
              <VintageBulletList items={practical.rules} />
            </VintageBlock>
            <VintageBlock title={practical.upgradeTitle}>
              <VintageBulletList items={practical.upgrades} accent="bg-[var(--doom-ammo)]" />
            </VintageBlock>
            <VintageBlock title={practical.launchTitle}>
              <VintageBulletList items={practical.checklist} accent="bg-[var(--vhs-terminal)]" />
            </VintageBlock>
          </div>
        </section>

        <StackMatrix locale={l} />
        <div className="mt-10 flex flex-wrap gap-3">
          <VHSButton href="/pipeline/brief" variant="primary">
            {hub.ctaBrief} →
          </VHSButton>
          <VHSButton href="/pipeline/beginner" variant="secondary">
            {hub.ctaBeginner}
          </VHSButton>
          <VHSButton href="/pipeline/marketing" variant="secondary">
            {hub.ctaMarketing}
          </VHSButton>
        </div>
      </div>
    </>
  );
}
