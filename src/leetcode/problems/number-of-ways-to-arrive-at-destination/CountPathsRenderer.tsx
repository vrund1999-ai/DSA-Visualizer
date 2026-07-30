import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CountPathsData } from "./algorithm";

const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

export function CountPathsRenderer({ step }: RendererProps<CountPathsData>) {
  const { n, roads, dist, ways, settled, relaxed, answer } = step.data;
  const cx = 155;
  const cy = 140;
  const R = 105;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <svg width="310" height="290" viewBox="0 0 310 290">
        {roads.map(([u, v, w], i) => {
          const pu = pos(u);
          const pv = pos(v);
          return (
            <g key={i}>
              <line x1={pu.x} y1={pu.y} x2={pv.x} y2={pv.y} className="stroke-border" strokeWidth="1.5" />
              <text x={(pu.x + pv.x) / 2} y={(pu.y + pv.y) / 2} className="fill-muted-foreground text-[8px]">{w}</text>
            </g>
          );
        })}
        {Array.from({ length: n }).map((_, i) => {
          const p = pos(i);
          const fill = i === settled ? "fill-role-current stroke-role-current" : i === relaxed ? "fill-role-compared stroke-role-compared" : i === n - 1 ? "fill-role-target/40 stroke-role-target" : i === 0 ? "fill-role-pivot/40 stroke-role-pivot" : dist[i] !== Infinity ? "fill-role-visited/20 stroke-role-visited" : "fill-muted stroke-border";
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="15" className={fill} strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className={`text-xs font-bold ${i === settled || i === relaxed ? "fill-white" : "fill-foreground"}`}>{i}</text>
              <text x={p.x} y={p.y - 20} textAnchor="middle" className="fill-muted-foreground text-[9px]">{fmt(dist[i])}·{ways[i]}w</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">shortest paths to {n - 1} = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "pivot", label: "Source" }, { role: "target", label: "Destination" }, { role: "current", label: "Settling" }, { role: "compared", label: "Relaxing" }]} />
    </div>
  );
}
