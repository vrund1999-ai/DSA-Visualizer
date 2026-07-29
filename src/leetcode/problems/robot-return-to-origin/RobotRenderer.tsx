import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RobotData } from "./algorithm";

export function RobotRenderer({ step }: RendererProps<RobotData>) {
  const { moves, idx, x, y, path, answer } = step.data;
  const all = [...path, [0, 0]];
  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]);
  const minX = Math.min(-1, ...xs) - 1;
  const maxX = Math.max(1, ...xs) + 1;
  const minY = Math.min(-1, ...ys) - 1;
  const maxY = Math.max(1, ...ys) + 1;
  const W = 200;
  const H = 200;
  const px = (v: number) => ((v - minX) / (maxX - minX)) * W;
  const py = (v: number) => H - ((v - minY) / (maxY - minY)) * H;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="rounded-md border bg-muted/10">
        <line x1={0} y1={py(0)} x2={W} y2={py(0)} className="stroke-border/50" />
        <line x1={px(0)} y1={0} x2={px(0)} y2={H} className="stroke-border/50" />
        <circle cx={px(0)} cy={py(0)} r={5} className="fill-role-sorted/40 stroke-role-sorted" />
        <polyline points={path.map((p) => `${px(p[0])},${py(p[1])}`).join(" ")} className="fill-none stroke-role-current/60" strokeWidth={2} />
        <circle cx={px(x)} cy={py(y)} r={7} className="fill-role-current" />
      </svg>

      <ArrayCells values={moves.split("")} roleFor={(i) => (i === idx ? "current" : i < (idx ?? -1) ? "visited" : "default")} showIndex={false} cellWidth="w-8" />

      <div className="rounded-md border px-3 py-1 text-sm">position = ({x}, {y})</div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Returns to origin ✓" : "Does not return ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Robot" }, { role: "sorted", label: "Origin" }]} />
    </div>
  );
}
