import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BipartiteData } from "./algorithm";

export function BipartiteRenderer({ step }: RendererProps<BipartiteData>) {
  const { graph, color, cur, colored, conflict, answer } = step.data;
  const n = graph.length;
  const cx = 150;
  const cy = 130;
  const R = 95;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const conflictKey = conflict ? new Set([`${conflict[0]}-${conflict[1]}`, `${conflict[1]}-${conflict[0]}`]) : new Set<string>();

  const nodeFill = (i: number) => {
    if (i === cur) return "fill-role-current stroke-role-current";
    if (color[i] === 1) return "fill-role-active/60 stroke-role-active";
    if (color[i] === -1) return "fill-role-pivot/60 stroke-role-pivot";
    return "fill-muted stroke-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width="300" height="260" viewBox="0 0 300 260">
        {graph.flatMap((nbrs, u) =>
          nbrs.filter((v) => v > u).map((v) => {
            const pu = pos(u);
            const pv = pos(v);
            const bad = conflictKey.has(`${u}-${v}`);
            return <line key={`${u}-${v}`} x1={pu.x} y1={pu.y} x2={pv.x} y2={pv.y} className={bad ? "stroke-role-swapped" : "stroke-border"} strokeWidth={bad ? 3 : 1.5} />;
          }),
        )}
        {Array.from({ length: n }).map((_, i) => {
          const p = pos(i);
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="18" className={`${nodeFill(i)} ${i === colored ? "stroke-[3]" : ""}`} strokeWidth="2" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className={`text-sm font-bold ${color[i] !== 0 || i === cur ? "fill-white" : "fill-foreground"}`}>{i}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        bipartite = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "active", label: "Side +" }, { role: "pivot", label: "Side −" }, { role: "current", label: "Expanding" }, { role: "swapped", label: "Conflict edge" }]} />
    </div>
  );
}
