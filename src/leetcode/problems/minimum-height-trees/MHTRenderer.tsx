import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MHTData } from "./algorithm";

export function MHTRenderer({ step }: RendererProps<MHTData>) {
  const { n, edges, trimmed, leaves, answer } = step.data;
  const trimmedSet = new Set(trimmed);
  const leafSet = new Set(leaves);
  const answerSet = new Set(answer ?? []);
  const cx = 160;
  const cy = 145;
  const R = 110;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <svg width="320" height="300" viewBox="0 0 320 300">
        {edges.map(([a, b], i) => {
          const pa = pos(a);
          const pb = pos(b);
          const gone = trimmedSet.has(a) || trimmedSet.has(b);
          return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} className={gone ? "stroke-border/40" : "stroke-border"} strokeWidth="1.5" />;
        })}
        {Array.from({ length: n }).map((_, i) => {
          const p = pos(i);
          const fill = answerSet.has(i) ? "fill-role-sorted stroke-role-sorted" : leafSet.has(i) ? "fill-role-current stroke-role-current" : trimmedSet.has(i) ? "fill-muted/40 stroke-border" : "fill-role-active/40 stroke-role-active";
          return (
            <g key={i} opacity={trimmedSet.has(i) && !answerSet.has(i) ? 0.4 : 1}>
              <circle cx={p.x} cy={p.y} r="16" className={fill} strokeWidth="2" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className={`text-sm font-bold ${answerSet.has(i) || leafSet.has(i) ? "fill-white" : "fill-foreground"}`}>{i}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">min-height roots = [<b className="tabular-nums">{(answer ?? []).join(", ") || "…"}</b>]</div>

      <Legend items={[{ role: "current", label: "Current leaves" }, { role: "active", label: "Interior" }, { role: "sorted", label: "Centroid" }]} />
    </div>
  );
}
