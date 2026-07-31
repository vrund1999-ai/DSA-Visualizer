import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AlienData } from "./algorithm";

export function AlienRenderer({ step }: RendererProps<AlienData>) {
  const { chars, edges, indeg, order, active, answer } = step.data;
  const orderSet = new Set(order);
  const n = chars.length;
  const cx = 150;
  const cy = 120;
  const R = 85;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const idxOf = (c: string) => chars.indexOf(c);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <svg width="300" height="250" viewBox="0 0 300 240">
        <defs>
          <marker id="alienArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" className="fill-muted-foreground" />
          </marker>
        </defs>
        {edges.map(([a, b], i) => {
          const pa = pos(idxOf(a));
          const pb = pos(idxOf(b));
          return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} className="stroke-border" strokeWidth={1.5} markerEnd="url(#alienArrow)" />;
        })}
        {chars.map((c, i) => {
          const p = pos(i);
          const role = c === active ? "current" : orderSet.has(c) ? "sorted" : "active";
          return (
            <g key={c}>
              <circle cx={p.x} cy={p.y} r="16" className={role === "current" ? "fill-role-current/70 stroke-role-current" : role === "sorted" ? "fill-role-sorted/50 stroke-role-sorted" : "fill-role-active/30 stroke-role-active"} strokeWidth="2" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className="fill-foreground text-sm font-bold">{c}</text>
              <text x={p.x} y={p.y - 20} textAnchor="middle" className="fill-muted-foreground text-[9px]">in:{indeg[c]}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 font-mono text-sm">
        order = <b>{answer !== null ? (answer === "" ? '""' : answer) : order.join("") || "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "removing" }, { role: "sorted", label: "ordered" }]} />
    </div>
  );
}
