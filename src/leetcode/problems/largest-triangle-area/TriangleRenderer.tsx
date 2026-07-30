import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TriangleData } from "./algorithm";

export function TriangleRenderer({ step }: RendererProps<TriangleData>) {
  const { points, tri, area, best, bestTri, answer } = step.data;
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const W = 260;
  const pad = 24;
  const sx = (x: number) => pad + ((x - minX) / Math.max(1, maxX - minX)) * (W - 2 * pad);
  const sy = (y: number) => W - pad - ((y - minY) / Math.max(1, maxY - minY)) * (W - 2 * pad);

  const showTri = answer !== null ? bestTri : tri;
  const triPts = showTri ? showTri.map((idx) => `${sx(points[idx][0])},${sy(points[idx][1])}`).join(" ") : "";
  const triSet = new Set(showTri ?? []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={W} height={W} viewBox={`0 0 ${W} ${W}`} className="rounded border border-border">
        {triPts && <polygon points={triPts} className={answer !== null ? "fill-role-sorted/30 stroke-role-sorted" : "fill-role-current/25 stroke-role-current"} strokeWidth="2" />}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={sx(p[0])} cy={sy(p[1])} r={triSet.has(i) ? 6 : 4} className={triSet.has(i) ? (answer !== null ? "fill-role-sorted" : "fill-role-current") : "fill-role-active"} />
            <text x={sx(p[0]) + 8} y={sy(p[1]) - 4} className="fill-muted-foreground text-[9px]">({p[0]},{p[1]})</text>
          </g>
        ))}
      </svg>

      <div className="flex items-center gap-3 text-sm">
        {area !== null && <span className="rounded-md border px-3 py-1">area {area.toFixed(2)}</span>}
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{(answer ?? best).toFixed(2)}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Point" }, { role: "current", label: "Current triangle" }, { role: "sorted", label: "Largest" }]} />
    </div>
  );
}
