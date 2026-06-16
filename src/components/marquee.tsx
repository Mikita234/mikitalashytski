const tokens = [
  "Next.js",
  "TypeScript",
  "Technical SEO",
  "JSON-LD",
  "schema.org",
  "llms.txt",
  "Core Web Vitals",
  "i18n / hreflang",
  "Allegro API",
  "EAN / GTIN",
  "AEO / GEO",
  "Lighthouse 100",
  "Vercel",
  "Tailwind CSS",
];

export function Marquee() {
  return (
    <div className="marquee-mask relative flex overflow-hidden border-y border-border py-5">
      <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
        {[...tokens, ...tokens].map((token, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-sm text-muted"
          >
            {token}
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
