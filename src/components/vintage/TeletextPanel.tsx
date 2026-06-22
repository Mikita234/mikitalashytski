export function TeletextPanel() {
  return (
    <aside
      className="teletext-grid border-2 border-[#00f] p-3 font-mono text-[10px] leading-relaxed sm:p-4 sm:text-xs"
      aria-hidden
    >
      <div className="bg-[#00f] px-2 py-1 text-center text-white font-bold">
        BUILDER INFO
      </div>
      <div className="mt-2 space-y-0.5">
        <p className="teletext-badge--hot px-1">▶ WHAT: sites / bots / auto</p>
        <p className="bg-[#ff0] px-1 text-black">▶ HOW: fast + clear + selling</p>
        <p className="bg-[#0f0] px-1 text-black">▶ WHERE: remote / EU</p>
        <p className="teletext-badge--magenta px-1">▶ STATUS: accepting builds</p>
      </div>
      <div className="mt-3 border-t border-white/20 pt-2 text-[#ccc]">
        <p>STACK: NEXT.JS TS</p>
        <p>MODE: VHS DECO</p>
      </div>
    </aside>
  );
}
