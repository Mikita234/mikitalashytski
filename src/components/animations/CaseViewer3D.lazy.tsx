"use client";

type Props = {
  onRequest?: () => void;
};

/** Phase 2 stub — Three.js loads only after explicit user click. */
export function CaseViewer3DLazy({ onRequest }: Props) {
  return (
    <button
      type="button"
      onClick={onRequest}
      className="flex h-full w-full items-center justify-center border border-dashed border-[var(--vhs-terminal)]/30 bg-black/60 p-4 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] transition-colors hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"
      aria-label="Load 3D case view"
    >
      3D view loads on click
    </button>
  );
}
