import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CriticalData } from "./algorithm";

const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);

export function CriticalRenderer({ step }: RendererProps<CriticalData>) {
  const { n, edges, disc, low, cur, activeEdge, bridges, answer } = step.data;
  const finalBridges = answer ?? bridges;
  const bridgeSet = new Set(finalBridges.map(([a, b]) => key(a, b)));
  const activeKey = activeEdge ? key(activeEdge[0], activeEdge[1]) : null;

  const cx = 150;
  const cy = 140;
  const R = 105;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <svg width="300" height="290" viewBox="0 0 300 290">
        {edges.map(([a, b], i) => {
          const pa = pos(a);
          const pb = pos(b);
          const k = key(a, b);
          const isBridge = bridgeSet.has(k);
          const isActive = activeKey === k;
          return (
            <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
              className={isBridge ? "stroke-role-compared" : isActive ? "stroke-role-current" : "stroke-border"}
              strokeWidth={isBridge ? 4 : isActive ? 3 : 2}
              strokeDasharray={isBridge ? "6 3" : undefined} />
          );
        })}
        {Array.from({ length: n }).map((_, i) => {
          const p = pos(i);
          const visited = disc[i] !== -1;
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="18" className={i === cur ? "fill-role-current stroke-role-current" : visited ? "fill-role-visited/20 stroke-role-visited" : "fill-muted stroke-border"} strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className={`text-sm font-bold ${i === cur ? "fill-white" : "fill-foreground"}`}>{i}</text>
              {visited && <text x={p.x} y={p.y - 26} textAnchor="middle" className="fill-muted-foreground text-[10px]">d{disc[i]}/l{low[i]}</text>}
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        bridges = {finalBridges.length ? finalBridges.map((b) => `[${b[0]},${b[1]}]`).join(" ") : "none yet"}
      </div>

      <Legend items={[{ role: "current", label: "Active node/edge" }, { role: "compared", label: "Bridge" }, { role: "visited", label: "Visited" }]} />
    </div>
  );
}
