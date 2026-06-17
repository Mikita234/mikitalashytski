type DoomHudBarProps = {
  label: string;
  value?: string;
  className?: string;
};

export function DoomHudBar({ label, value, className = "" }: DoomHudBarProps) {
  return (
    <div
      className={`doom-hud flex items-center justify-between gap-2 border border-[var(--doom-red)]/40 bg-[var(--doom-panel)] px-2 py-1 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-wider text-[var(--doom-ammo)] sm:text-[9px] ${className}`}
    >
      <span className="text-[var(--doom-red)]">{label}</span>
      {value && <span className="text-[var(--doom-health)]">{value}</span>}
    </div>
  );
}
