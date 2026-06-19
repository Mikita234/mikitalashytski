import type { Locale } from "@/i18n/routing";
import { stackOptions, stackCategories } from "@/data/stack-options";
import { stacksPage } from "@/content/pipeline";
import { VintageSectionHeader } from "@/components/vintage/VintagePage";

const costLabels: Record<string, Record<Locale, string>> = {
  free: { en: "Free", pl: "Darmowy", ru: "Бесплатно", uk: "Безкоштовно" },
  low: { en: "Low", pl: "Niski", ru: "Низкий", uk: "Низький" },
  medium: { en: "Medium", pl: "Średni", ru: "Средний", uk: "Середній" },
  high: { en: "High", pl: "Wysoki", ru: "Высокий", uk: "Високий" },
};

const levelLabels: Record<string, Record<Locale, string>> = {
  beginner: { en: "Beginner", pl: "Początkujący", ru: "Новичок", uk: "Новачок" },
  intermediate: { en: "Intermediate", pl: "Średni", ru: "Средний", uk: "Середній" },
  advanced: { en: "Advanced", pl: "Zaawansowany", ru: "Продвинутый", uk: "Просунутий" },
};

export function StackMatrix({ locale }: { locale: Locale }) {
  const copy = stacksPage[locale];

  return (
    <section>
      <VintageSectionHeader
        tag={copy.tag}
        title={copy.title}
        subtitle={copy.subtitle}
        tagClassName="text-[var(--vhs-terminal)]"
      />

      <div className="overflow-x-auto border-2 border-[var(--doom-stone)]">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--doom-stone)] bg-[#101014]">
              <th className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)]">
                {copy.colName}
              </th>
              <th className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)]">
                {copy.colCategory}
              </th>
              <th className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)]">
                {copy.colPlain}
              </th>
              <th className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)]">
                {copy.colBest}
              </th>
              <th className="hidden px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)] lg:table-cell">
                {copy.colLevel}
              </th>
              <th className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-[var(--vhs-terminal)]">
                {copy.colCost}
              </th>
            </tr>
          </thead>
          <tbody>
            {stackOptions.map((stack) => (
              <tr
                key={stack.id}
                className="border-b border-white/5 bg-[#141418] even:bg-[#101014]"
              >
                <td className="px-4 py-4 font-display text-lg uppercase text-[var(--vhs-white)]">
                  {stack.name}
                </td>
                <td className="px-4 py-4 font-mono text-[9px] uppercase text-[var(--vhs-muted)]">
                  {stackCategories[stack.category][locale]}
                </td>
                <td className="max-w-xs px-4 py-4 text-[var(--vhs-body)]">
                  {stack.plainLanguage[locale]}
                </td>
                <td className="max-w-xs px-4 py-4 text-[var(--vhs-muted)]">
                  {stack.bestFor[locale]}
                </td>
                <td className="hidden px-4 py-4 font-mono text-[9px] uppercase text-[var(--doom-ammo)] lg:table-cell">
                  {levelLabels[stack.technicalLevel][locale]}
                </td>
                <td className="px-4 py-4 font-mono text-[9px] uppercase text-[var(--vhs-acid)]">
                  {costLabels[stack.costLevel][locale]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
