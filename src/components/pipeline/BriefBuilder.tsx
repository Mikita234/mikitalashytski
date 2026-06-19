"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { getPipeline } from "@/data/pipelines";
import { getStackById } from "@/data/stack-options";
import {
  briefPage,
  buildBriefMarkdown,
  recommendPipeline,
  type BriefFormData,
} from "@/content/pipeline";
import { pipelineLabels } from "@/content/pipeline";
import { VHSButton } from "@/components/vintage/VHSButton";
import { VintageBulletList } from "@/components/vintage/VintagePage";

const defaultForm: BriefFormData = {
  businessType: "",
  sitePurpose: "",
  contentEditor: "me",
  needsPayments: false,
  paymentType: "none",
  needsAuth: false,
  needsDashboard: false,
  languages: "one",
  priority: "cheap",
  budget: "minimal",
  maintenance: "minimal",
};

export function BriefBuilder({ locale }: { locale: Locale }) {
  const copy = briefPage[locale];
  const labels = pipelineLabels[locale];
  const [form, setForm] = useState<BriefFormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const pipelineId = recommendPipeline(form);
  const pipeline = getPipeline(pipelineId);
  const markdown = buildBriefMarkdown(form, pipelineId, locale);

  function update<K extends keyof BriefFormData>(key: K, value: BriefFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  }

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
  }

  function downloadMd() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "project-brief.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  const fieldClass =
    "w-full border border-white/15 bg-[#101014] px-3 py-2.5 text-sm text-[var(--vhs-body)] outline-none focus:border-[var(--vhs-acid)]";

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.businessType}
          </span>
          <input
            className={fieldClass}
            value={form.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            placeholder="Plumber in Warsaw / Online course / Event agency"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.sitePurpose}
          </span>
          <textarea
            className={`${fieldClass} min-h-[88px]`}
            value={form.sitePurpose}
            onChange={(e) => update("sitePurpose", e.target.value)}
            placeholder="Show services, collect leads, sell tickets..."
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.contentEditor}
          </span>
          <select
            className={fieldClass}
            value={form.contentEditor}
            onChange={(e) =>
              update("contentEditor", e.target.value as BriefFormData["contentEditor"])
            }
          >
            <option value="me">{copy.options.editorMe}</option>
            <option value="team">{copy.options.editorTeam}</option>
            <option value="developer">{copy.options.editorDev}</option>
          </select>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.needsPayments}
            onChange={(e) => {
              update("needsPayments", e.target.checked);
              if (!e.target.checked) update("paymentType", "none");
            }}
            className="h-4 w-4 accent-[var(--vhs-acid)]"
          />
          <span className="text-sm text-[var(--vhs-body)]">{copy.fields.needsPayments}</span>
        </label>

        {form.needsPayments && (
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
              {copy.fields.paymentType}
            </span>
            <select
              className={fieldClass}
              value={form.paymentType}
              onChange={(e) =>
                update("paymentType", e.target.value as BriefFormData["paymentType"])
              }
            >
              <option value="shop">{copy.options.payShop}</option>
              <option value="events">{copy.options.payEvents}</option>
              <option value="subscription">{copy.options.paySub}</option>
            </select>
          </label>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.needsAuth}
              onChange={(e) => update("needsAuth", e.target.checked)}
              className="h-4 w-4 accent-[var(--vhs-acid)]"
            />
            <span className="text-sm text-[var(--vhs-body)]">{copy.fields.needsAuth}</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.needsDashboard}
              onChange={(e) => update("needsDashboard", e.target.checked)}
              className="h-4 w-4 accent-[var(--vhs-acid)]"
            />
            <span className="text-sm text-[var(--vhs-body)]">{copy.fields.needsDashboard}</span>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.languages}
          </span>
          <select
            className={fieldClass}
            value={form.languages}
            onChange={(e) =>
              update("languages", e.target.value as BriefFormData["languages"])
            }
          >
            <option value="one">{copy.options.langOne}</option>
            <option value="few">{copy.options.langFew}</option>
            <option value="many">{copy.options.langMany}</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.priority}
          </span>
          <select
            className={fieldClass}
            value={form.priority}
            onChange={(e) =>
              update("priority", e.target.value as BriefFormData["priority"])
            }
          >
            <option value="cheap">{copy.options.priCheap}</option>
            <option value="fast">{copy.options.priFast}</option>
            <option value="seo">{copy.options.priSeo}</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.budget}
          </span>
          <select
            className={fieldClass}
            value={form.budget}
            onChange={(e) =>
              update("budget", e.target.value as BriefFormData["budget"])
            }
          >
            <option value="minimal">{copy.options.budMinimal}</option>
            <option value="moderate">{copy.options.budModerate}</option>
            <option value="serious">{copy.options.budSerious}</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-terminal)]">
            {copy.fields.maintenance}
          </span>
          <select
            className={fieldClass}
            value={form.maintenance}
            onChange={(e) =>
              update("maintenance", e.target.value as BriefFormData["maintenance"])
            }
          >
            <option value="minimal">{copy.options.maintMinimal}</option>
            <option value="monthly">{copy.options.maintMonthly}</option>
            <option value="hands-on">{copy.options.maintHands}</option>
          </select>
        </label>

        <VHSButton variant="primary" onClick={() => setSubmitted(true)}>
          {copy.submit} →
        </VHSButton>
      </form>

      {submitted && pipeline && (
        <aside className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-acid)]">
            ● {copy.resultTitle}
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase text-[var(--vhs-white)]">
            {pipeline.title[locale]}
          </h2>
          <p className="mt-3 text-sm text-[var(--vhs-muted)]">
            {pipeline.description[locale]}
          </p>

          <div className="mt-5">
            <p className="font-mono text-[9px] uppercase text-[var(--vhs-terminal)]">
              {labels.recommendedStack}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {pipeline.recommendedStack.map((id) => (
                <span
                  key={id}
                  className="border border-[var(--vhs-acid)]/30 px-2 py-1 font-mono text-[9px] uppercase text-[var(--vhs-acid)]"
                >
                  {getStackById(id)?.name ?? id}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <VintageBulletList
              items={pipeline.risks[locale]}
              accent="bg-[var(--vhs-red)]"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <VHSButton variant="secondary" onClick={copyMarkdown}>
              {labels.copyMarkdown}
            </VHSButton>
            <VHSButton variant="secondary" onClick={downloadMd}>
              Download .md
            </VHSButton>
            <VHSButton href={`/pipeline/${pipeline.id}`} variant="primary">
              {labels.openPipeline} →
            </VHSButton>
          </div>

          <pre className="mt-6 max-h-48 overflow-auto border border-white/10 bg-[#0c0c0e] p-3 font-mono text-[10px] text-[var(--vhs-muted)]">
            {markdown}
          </pre>
        </aside>
      )}
    </div>
  );
}
