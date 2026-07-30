import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { NetworkData } from "./algorithm";

const COMP_FILL = ["fill-role-active/60 stroke-role-active", "fill-role-pivot/60 stroke-role-pivot", "fill-role-target/60 stroke-role-target", "fill-role-sorted/60 stroke-role-sorted", "fill-amber-400/60 stroke-amber-400"];

export function NetworkRenderer({ step }: RendererProps<NetworkData>) {
  const { n, connections, root, edge, redundant, components, answer } = step.data;
  const cx = 160;
  const cy = 140;
  const R = 105;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const distinct = [...new Set(root)];
  const colorOf = (i: number) => COMP_FILL[distinct.indexOf(root[i]) % COMP_FILL.length];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <svg width="320" height="290" viewBox="0 0 320 290">
        {connections.map(([a, b], i) => {
          const pa = pos(a);
          const pb = pos(b);
          const isCur = i === edge;
          return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} className={isCur ? (redundant ? "stroke-role-swapped" : "stroke-role-current") : i < (edge ?? -1) ? "stroke-foreground/60" : "stroke-border/50"} strokeWidth={isCur ? 3 : 1.5} strokeDasharray={isCur && redundant ? "4 3" : undefined} />;
        })}
        {Array.from({ length: n }).map((_, i) => {
          const p = pos(i);
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="16" className={colorOf(i)} strokeWidth="2" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className="text-sm font-bold fill-foreground">{i}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        components: {components} · cable moves = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "Merging cable" }, { role: "swapped", label: "Redundant cable" }, { role: "active", label: "Components (colored)" }]} />
    </div>
  );
}
