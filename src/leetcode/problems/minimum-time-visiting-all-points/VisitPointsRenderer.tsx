import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { VisitPointsData } from "./algorithm";

export function VisitPointsRenderer({ step }: RendererProps<VisitPointsData>) {
  const { points, to, legTime, time, answer } = step.data;
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs) - 1;
  const maxX = Math.max(...xs) + 1;
  const minY = Math.min(...ys) - 1;
  const maxY = Math.max(...ys) + 1;
  const W = 260;
  const H = 200;
  const px = (x: number) => ((x - minX) / (maxX - minX)) * W;
  const py = (y: number) => H - ((y - minY) / (maxY - minY)) * H;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="rounded-md border bg-muted/10">
        {points.map((p, i) => {
          if (i === 0) return null;
          const active = i === to;
          const done = to !== null && i <= to;
          return <line key={i} x1={px(points[i - 1][0])} y1={py(points[i - 1][1])} x2={px(p[0])} y2={py(p[1])} className={active ? "stroke-role-current" : done ? "stroke-role-sorted" : "stroke-border/40"} strokeWidth={active ? 3 : 2} strokeDasharray={active ? undefined : done ? undefined : "4 3"} />;
        })}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={px(p[0])} cy={py(p[1])} r={7} className={i === to ? "fill-role-current" : "fill-role-active/70 stroke-border"} />
            <text x={px(p[0])} y={py(p[1]) - 10} textAnchor="middle" className="fill-muted-foreground text-[9px]">{p[0]},{p[1]}</text>
          </g>
        ))}
      </svg>

      <div className="flex items-center gap-3 text-sm">
        {legTime !== null && <span className="rounded-md border px-3 py-1">leg = {legTime}</span>}
        <span className="rounded-md border px-3 py-1">time = <b className="tabular-nums">{answer ?? time}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current leg" }, { role: "sorted", label: "Traveled" }, { role: "active", label: "Point" }]} />
    </div>
  );
}
