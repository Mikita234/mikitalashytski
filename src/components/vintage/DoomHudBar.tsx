type DoomHudBarProps = {
  label: string;
  value?: string;
  fill?: number;
  variant?: "health" | "ammo";
  className?: string;
};

export function DoomHudBar({
  label,
  value,
  fill = 100,
  variant = "health",
  className = "",
}: DoomHudBarProps) {
  const clamped = Math.min(100, Math.max(0, fill));

  return (
    <div
      className={`doom-hud flex items-center gap-2 border border-[var(--doom-red)]/60 bg-[var(--doom-panel)] px-2 py-1.5 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-wider sm:text-[9px] ${className}`}
    >
      <span className="shrink-0 text-[var(--doom-red)]">{label}</span>
      <div className="doom-hud__bar">
        <div
          className={`doom-hud__bar-fill${variant === "ammo" ? " doom-hud__bar-fill--ammo" : ""}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {value && (
        <span className="shrink-0 text-[var(--doom-health)]">{value}</span>
      )}
    </div>
  );
}
