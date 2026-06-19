"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import type { ProjectPipeline } from "@/data/pipelines";
import { pipelineLabels } from "@/content/pipeline";
import { VHSButton } from "@/components/vintage/VHSButton";

const PACK_FILES = [
  "01-start-here.md",
  "02-business-brief.md",
  "agent-instructions.md",
  "deploy-checklist.md",
] as const;

const packTemplates: Record<(typeof PACK_FILES)[number], string> = {
  "01-start-here.md": `# Start Here

## Your project
- Business: {{BUSINESS}}
- Pipeline: {{PIPELINE}}
- Stack: {{STACK}}

## Rules for AI agent
1. Default stack for simple sites: **Astro + Cloudflare Pages + Markdown**
2. Use Next.js + Vercel ONLY if brief requires auth, tickets, or SaaS
3. Small commits, one file at a time
4. Real copy placeholders — no lorem ipsum marketing fluff
5. Mobile-first, contact form mandatory
`,
  "02-business-brief.md": `# Business Brief

## Business
- Name:
- City / region:
- Pipeline: {{PIPELINE}}

## Offer
- Who is the customer?
- Main service/product:
- Primary CTA:

## Stack recommendation
{{STACK}}
`,
  "agent-instructions.md": `# Agent Instructions

Pipeline: {{PIPELINE}}
Stack: {{STACK}}

Do NOT use Next.js for simple brochure sites.
Do add contact form and run build before deploy.
`,
  "deploy-checklist.md": `# Deploy Checklist

Pipeline: {{PIPELINE}}
Stack: {{STACK}}

- [ ] npm run build passes
- [ ] GitHub repo pushed
- [ ] Hosting connected (Cloudflare or Vercel)
- [ ] Form tested on production
- [ ] Search Console started
`,
};

function fillTemplate(
  template: string,
  pipeline: ProjectPipeline,
): string {
  return template
    .replaceAll("{{PIPELINE}}", pipeline.id)
    .replaceAll("{{STACK}}", pipeline.recommendedStack.join(", "))
    .replaceAll("{{BUSINESS}}", "(fill from brief)");
}

export function StarterPackDownload({
  pipeline,
  locale,
}: {
  pipeline: ProjectPipeline;
  locale: Locale;
}) {
  const labels = pipelineLabels[locale];
  const [downloaded, setDownloaded] = useState(false);

  function buildPackContent() {
    return PACK_FILES.map((file) => {
      const body = fillTemplate(packTemplates[file], pipeline);
      return `# FILE: ${file}\n\n${body}`;
    }).join("\n\n---\n\n");
  }

  function downloadMd() {
    const content = buildPackContent();
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${pipeline.id}-skill-pack.md`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  }

  function downloadZipLike() {
    // Single concatenated md — zip would need extra dep; spec allows md minimum
    downloadMd();
  }

  return (
    <div className="border-2 border-[var(--doom-stone)] bg-[#141418] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--vhs-terminal)]">
        ● Skill pack
      </p>
      <ul className="mt-4 space-y-2">
        {PACK_FILES.map((file) => (
          <li
            key={file}
            className="font-mono text-[10px] uppercase text-[var(--vhs-muted)]"
          >
            {file}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <VHSButton variant="primary" onClick={downloadMd}>
          {labels.downloadPack} (.md)
        </VHSButton>
        <VHSButton variant="secondary" onClick={downloadZipLike}>
          Download all
        </VHSButton>
      </div>
      {downloaded && (
        <p className="mt-3 font-mono text-[9px] uppercase text-[var(--vhs-acid)]">
          ✓ Saved
        </p>
      )}
    </div>
  );
}
