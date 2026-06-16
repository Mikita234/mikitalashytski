export function ScanlineOverlay({ global = false }: { global?: boolean }) {
  return (
    <div
      className={global ? "vhs-scanlines-global" : "vhs-scanlines"}
      aria-hidden="true"
    />
  );
}
