export function TeletextPanel() {
  return (
    <aside
      className="teletext-grid border-2 border-[#00f] p-3 font-mono text-[10px] leading-relaxed sm:p-4 sm:text-xs"
      aria-label="Teletext info"
    >
      <div className="bg-[#00f] px-2 py-1 text-center text-white font-bold">
        P404 VIBE CODER INFO
      </div>
      <div className="mt-2 space-y-0.5">
        <p className="bg-[#f00] px-1 text-white">▶ WHAT: sites / bots / auto</p>
        <p className="bg-[#ff0] px-1 text-black">▶ HOW: fast + weird + selling</p>
        <p className="bg-[#0f0] px-1 text-black">▶ WHERE: remote / EU / BY</p>
        <p className="bg-[#f0f] px-1 text-white">▶ STATUS: accepting builds</p>
      </div>
      <div className="mt-3 border-t border-white/20 pt-2 text-[#ccc]">
        <p>STACK: NEXT.JS TS</p>
        <p>MODE: OLD SIGNAL</p>
        <p>CH:404 LIVE 24/7</p>
      </div>
      <p className="mt-2 text-[8px] text-[#666]">
        PRESS ▶ TO CONTINUE
      </p>
    </aside>
  );
}
