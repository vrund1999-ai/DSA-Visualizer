import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DelayData } from "./algorithm";

const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

export function DelayRenderer({ step }: RendererProps<DelayData>) {
  const { times, n, k, dist, settled, edge, answer } = step.data;
  const cx = 150;
  const cy = 130;
  const R = 95;
  const pos = (i: number) => {
    const ang = ((i - 1) / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const key = (u: number, v: number) => `${u}-${v}`;
  const activeKey = edge ? key(edge[0], edge[1]) : null;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width="300" height="270" viewBox="0 0 300 270">
        {times.map(([u, v, w], i) => {
          const pu = pos(u);
          const pv = pos(v);
          const active = activeKey === key(u, v);
          const mx = (pu.x + pv.x) / 2;
          const my = (pu.y + pv.y) / 2;
          return (
            <g key={i}>
              <line x1={pu.x} y1={pu.y} x2={pv.x} y2={pv.y} className={active ? "stroke-role-current" : "stroke-border"} strokeWidth={active ? 3 : 1.5} />
              <text x={mx} y={my} className="fill-muted-foreground text-[9px]">{w}</text>
            </g>
          );
        })}
        {Array.from({ length: n }).map((_, idx) => {
          const node = idx + 1;
          const p = pos(node);
          return (
            <g key={node}>
              <circle cx={p.x} cy={p.y} r="16" className={node === settled ? "fill-role-current stroke-role-current" : node === k ? "fill-role-pivot/30 stroke-role-pivot" : dist[node] !== Infinity ? "fill-role-visited/20 stroke-role-visited" : "fill-muted stroke-border"} strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className={`text-sm font-bold ${node === settled ? "fill-white" : "fill-foreground"}`}>{node}</text>
              <text x={p.x} y={p.y - 22} textAnchor="middle" className="fill-muted-foreground text-[10px]">{fmt(dist[node])}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">network delay = <b className="tabular-nums">{answer === -1 ? "-1" : answer ?? "…"}</b></div>

      <Legend items={[{ role: "pivot", label: "Source" }, { role: "current", label: "Settling / relaxing" }, { role: "visited", label: "Reached" }]} />
    </div>
  );
}
