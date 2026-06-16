import type { Project } from "@/content/projects";

export function ProjectTeletextPanel({
  project,
  category,
  channel,
}: {
  project: Project;
  category: string;
  channel: string;
}) {
  return (
    <aside
      className="teletext-grid shrink-0 border-2 border-[#00f] p-3 font-mono text-[10px] leading-relaxed sm:p-4 sm:text-xs"
      aria-label="Project teletext"
    >
      <div className="bg-[#00f] px-2 py-1 text-center font-bold text-white">
        {channel} {project.name}
      </div>
      <div className="mt-2 space-y-0.5">
        <p className="bg-[#f00] px-1 text-white">▶ TYPE: {category}</p>
        <p className="bg-[#ff0] px-1 text-black">▶ YEAR: {project.year}</p>
        <p className="bg-[#0f0] px-1 text-black">
          ▶ DOMAINS: {project.domains.length}
        </p>
        <p className="bg-[#f0f] px-1 text-white">
          ▶ STACK: {project.stack.length} tech
        </p>
      </div>
      <div className="mt-3 border-t border-white/20 pt-2 text-[#ccc]">
        {project.domains.map((d) => (
          <p key={d}>▶ {d}</p>
        ))}
      </div>
      <div className="mt-2 text-[#ccc]">
        <p>SCHEMA: {project.schema.length} types</p>
        <p>METRICS: {project.metrics.length} live</p>
      </div>
      <p className="mt-2 text-[#0f0]">█ SIGNAL LOCKED</p>
    </aside>
  );
}
