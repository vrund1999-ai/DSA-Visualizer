import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxPointsData } from "./algorithm";

export function MaxPointsRenderer({ step }: RendererProps<MaxPointsData>) {
  const { points, anchor, bestLine, best, answer } = step.data;
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs) - 1;
  const maxX = Math.max(...xs) + 1;
  const minY = Math.min(...ys) - 1;
  const maxY = Math.max(...ys) + 1;
  const S = 240;
  const px = (x: number) => ((x - minX) / (maxX - minX)) * S;
  const py = (y: number) => S - ((y - minY) / (maxY - minY)) * S;

  const linePts = bestLine.map((i) => points[i]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="rounded-md border bg-muted/10">
        {linePts.length >= 2 && (
          <line x1={px(linePts[0][0])} y1={py(linePts[0][1])} x2={px(linePts[linePts.length - 1][0])} y2={py(linePts[linePts.length - 1][1])} className="stroke-role-sorted" strokeWidth={2} />
        )}
        {points.map((p, i) => {
          const onLine = bestLine.includes(i);
          const isAnchor = i === anchor;
          return (
            <g key={i}>
              <circle cx={px(p[0])} cy={py(p[1])} r={7} className={isAnchor ? "fill-role-current" : onLine ? "fill-role-sorted" : "fill-role-active/60 stroke-border"} />
              <text x={px(p[0])} y={py(p[1]) - 10} textAnchor="middle" className="fill-muted-foreground text-[9px]">{p[0]},{p[1]}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">max points on a line = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Anchor" }, { role: "sorted", label: "Best collinear line" }, { role: "active", label: "Point" }]} />
    </div>
  );
}
