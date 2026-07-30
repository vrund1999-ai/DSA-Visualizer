import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RobotData } from "./algorithm";

const ARROWS = ["↑", "→", "↓", "←"];

export function RobotRenderer({ step }: RendererProps<RobotData>) {
  const { instructions, i, x, y, d, trail, answer } = step.data;
  const all = [...trail, [x, y]];
  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]);
  const minX = Math.min(-1, ...xs) - 1;
  const maxX = Math.max(1, ...xs) + 1;
  const minY = Math.min(-1, ...ys) - 1;
  const maxY = Math.max(1, ...ys) + 1;
  const cell = 26;
  const W = (maxX - minX + 1) * cell;
  const H = (maxY - minY + 1) * cell;
  const sx = (px: number) => (px - minX) * cell + cell / 2;
  const sy = (py: number) => (maxY - py) * cell + cell / 2;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-1">
        {instructions.split("").map((ch, idx) => (
          <span key={idx} className={`flex h-8 w-8 items-center justify-center rounded border font-mono ${idx === i ? "bg-role-current text-white border-role-current" : idx < (i ?? -1) ? "bg-role-visited/25 border-role-visited" : "bg-muted/40 border-border text-muted-foreground"}`}>{ch}</span>
        ))}
      </div>

      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="rounded border border-border">
        <polyline points={trail.map((p) => `${sx(p[0])},${sy(p[1])}`).join(" ")} className="fill-none stroke-role-active" strokeWidth="2" />
        <circle cx={sx(0)} cy={sy(0)} r="5" className="fill-role-pivot" />
        <g>
          <circle cx={sx(x)} cy={sy(y)} r="10" className="fill-role-current" />
          <text x={sx(x)} y={sy(y) + 4} textAnchor="middle" className="fill-white text-xs font-bold">{ARROWS[d]}</text>
        </g>
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        after 1 cycle: ({x}, {y}) facing {ARROWS[d]} · bounded = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "pivot", label: "Origin" }, { role: "current", label: "Robot" }, { role: "active", label: "Path" }]} />
    </div>
  );
}
