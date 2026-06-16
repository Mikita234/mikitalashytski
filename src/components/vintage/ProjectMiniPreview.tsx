import type { ProjectSlug } from "@/content/project-visuals";
import { projectVisuals } from "@/content/project-visuals";

type Props = {
  slug: string;
  className?: string;
  title?: string;
};

export function ProjectMiniPreview({ slug, className = "", title }: Props) {
  if (slug in projectVisuals) {
    return <ProjectMiniPreviewInner slug={slug as ProjectSlug} className={className} />;
  }
  return <GenericPreview title={title ?? slug} className={className} />;
}

function GenericPreview({ title, className }: { title: string; className: string }) {
  return (
    <div className={`browser-chrome overflow-hidden ${className}`}>
      <div className="browser-chrome__bar">
        <div className="browser-chrome__dots"><span /><span /><span /></div>
        <div className="browser-chrome__url">{title.toLowerCase()}</div>
        <span className="browser-chrome__live rec-blink">● BUILD</span>
      </div>
      <div className="browser-chrome__screen flex items-center justify-center bg-[#0a0a0a] p-4">
        <div className="text-center font-mono">
          <p className="text-[10px] text-[var(--vhs-terminal)]">▶ {title}</p>
          <p className="mt-2 text-[8px] text-[var(--vhs-muted)]">internal / pipeline</p>
        </div>
      </div>
    </div>
  );
}

function ProjectMiniPreviewInner({ slug, className }: { slug: ProjectSlug; className: string }) {
  const v = projectVisuals[slug];

  return (
    <div
      className={`browser-chrome overflow-hidden ${className}`}
      style={{ "--preview-accent": v.accent } as React.CSSProperties}
    >
      <div className="browser-chrome__bar">
        <div className="browser-chrome__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-chrome__url">{v.domain}</div>
        <span className="browser-chrome__live rec-blink">● LIVE</span>
      </div>
      <div className="browser-chrome__screen">
        {slug === "kayer" && <KayerPreview accent={v.accent} />}
        {slug === "mnsk7-tools" && <Mnsk7Preview accent={v.accent} />}
        {slug === "popular" && <PopularPreview accent={v.accent} />}
        {slug === "alesyatakun" && <AlesyaPreview accent={v.accent} />}
        <div className="browser-chrome__scanlines" aria-hidden />
      </div>
    </div>
  );
}

function KayerPreview({ accent }: { accent: string }) {
  return (
    <div className="preview-ui preview-ui--shop" style={{ background: `linear-gradient(160deg, #1a1028 0%, #0f0f14 60%)` }}>
      <div className="preview-ui__nav" style={{ borderColor: `${accent}44` }}>
        <span style={{ color: accent }}>KAYER</span>
        <span>PL / UA</span>
        <span className="preview-ui__cta" style={{ background: accent }}>B2B</span>
      </div>
      <div className="preview-ui__hero" style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}>
        <p className="preview-ui__hero-title">Nail cosmetics</p>
        <p className="preview-ui__hero-sub">wholesale · retail · delivery</p>
      </div>
      <div className="preview-ui__grid preview-ui__grid--3">
        {["#c084fc", "#f472b6", "#a78bfa"].map((c, i) => (
          <div key={i} className="preview-ui__product">
            <div className="preview-ui__product-img" style={{ background: `linear-gradient(135deg, ${c}, ${accent})` }} />
            <div className="preview-ui__product-line" />
            <div className="preview-ui__product-line short" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Mnsk7Preview({ accent }: { accent: string }) {
  return (
    <div className="preview-ui preview-ui--market" style={{ background: "linear-gradient(160deg, #1a1408 0%, #0f0f14 60%)" }}>
      <div className="preview-ui__nav" style={{ borderColor: `${accent}44` }}>
        <span style={{ color: accent }}>MNSK7</span>
        <span>Allegro ★4.9</span>
      </div>
      <div className="preview-ui__listing">
        <div className="preview-ui__listing-img" style={{ background: `linear-gradient(135deg, ${accent}, #92400e)` }}>
          <span className="preview-ui__tool-icon">⚙</span>
        </div>
        <div className="preview-ui__listing-body">
          <div className="preview-ui__product-line" />
          <div className="preview-ui__product-line" />
          <div className="preview-ui__stars">★★★★★ 383</div>
          <div className="preview-ui__price" style={{ color: accent }}>3 500+ orders</div>
        </div>
      </div>
      <div className="preview-ui__tags">
        {["EAN", "GTIN", "CNC"].map((t) => (
          <span key={t} className="preview-ui__tag" style={{ borderColor: `${accent}55`, color: accent }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function PopularPreview({ accent }: { accent: string }) {
  return (
    <div className="preview-ui preview-ui--theater teletext-grid" style={{ background: "#000" }}>
      <div className="preview-ui__teletext-header" style={{ background: "#00f" }}>P200 POPULAR POET</div>
      <div className="preview-ui__poster" style={{ borderColor: accent }}>
        <p className="preview-ui__poster-title" style={{ color: accent }}>THEATER</p>
        <p className="preview-ui__poster-sub">Warsaw · PL / UA / RU</p>
        <div className="preview-ui__dates">
          <span>15.06</span>
          <span>22.06</span>
          <span>29.06</span>
        </div>
        <span className="preview-ui__book" style={{ background: accent, color: "#000" }}>BOOK TICKETS</span>
      </div>
      <p className="preview-ui__teletext-line" style={{ color: "#0f0" }}>▶ popularpoet.pl</p>
      <p className="preview-ui__teletext-line" style={{ color: "#ff0" }}>▶ populartickets.pl</p>
    </div>
  );
}

function AlesyaPreview({ accent }: { accent: string }) {
  return (
    <div className="preview-ui preview-ui--wellness" style={{ background: "linear-gradient(160deg, #1a0a10 0%, #0f0f14 60%)" }}>
      <div className="preview-ui__nav" style={{ borderColor: `${accent}44` }}>
        <span style={{ color: accent }}>ALESYA TAKUN</span>
        <span>BY</span>
      </div>
      <div className="preview-ui__wellness-card" style={{ borderColor: `${accent}55` }}>
        <div className="preview-ui__avatar" style={{ background: `linear-gradient(135deg, ${accent}, #fda4af)` }} />
        <div>
          <div className="preview-ui__product-line" />
          <div className="preview-ui__product-line short" />
          <p className="preview-ui__slot" style={{ color: accent }}>● Online · 3-D Secure</p>
        </div>
      </div>
      <div className="preview-ui__formats">
        <span style={{ borderColor: accent, color: accent }}>Consult</span>
        <span style={{ borderColor: accent, color: accent }}>Course</span>
      </div>
    </div>
  );
}
