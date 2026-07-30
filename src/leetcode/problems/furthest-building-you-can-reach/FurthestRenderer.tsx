import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FurthestData } from "./algorithm";

export function FurthestRenderer({ step }: RendererProps<FurthestData>) {
  const { heights, at, ladderClimbs, brickClimbs, bricksLeft, ladders, answer } = step.data;
  const maxH = Math.max(...heights, 1);
  const ladderSet = new Set(ladderClimbs);
  const brickSet = new Set(brickClimbs);

  const barClass = (i: number) => {
    if (i === at) return "bg-role-current";
    if (ladderSet.has(i)) return "bg-role-sorted";
    if (brickSet.has(i)) return "bg-role-target";
    return "bg-role-active/50";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-end gap-1" style={{ height: "170px" }}>
        {heights.map((h, i) => (
          <div key={i} className="flex flex-col items-center justify-end gap-1">
            <div className={`w-7 rounded-t ${barClass(i)}`} style={{ height: `${(h / maxH) * 140 + 6}px` }} />
            <span className={`text-[10px] tabular-nums ${i === at ? "font-bold text-role-current" : "text-muted-foreground"}`}>{h}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-sorted px-3 py-1">ladders: {ladders - ladderClimbs.length}/{ladders} free</span>
        <span className="rounded-md border border-role-target px-3 py-1">bricks left: {bricksLeft}</span>
        <span className="rounded-md border px-3 py-1">furthest = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current building" }, { role: "sorted", label: "Ladder climb" }, { role: "target", label: "Brick climb" }]} />
    </div>
  );
}
