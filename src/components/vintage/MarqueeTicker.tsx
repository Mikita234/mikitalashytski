import { vintageMarquee } from "@/content/home-vintage";

export function MarqueeTicker({ text = vintageMarquee }: { text?: string }) {
  const items = text.split("/").map((s) => s.trim()).filter(Boolean);

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[#111] py-2 sm:py-2.5"
      aria-hidden="true"
    >
      <div className="flex w-max vhs-marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] sm:text-xs"
          >
            {item}
            <span className="mx-4 text-[var(--vhs-acid)]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
