import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ContinuousData } from "./algorithm";

export function ContinuousRenderer({ step }: RendererProps<ContinuousData>) {
  const { nums, left, right, curMax, curMin, total, answer } = step.data;

  const roleFor = (idx: number) => {
    if (right !== null && idx >= left && idx <= right) {
      if (nums[idx] === curMax) return "target";
      if (nums[idx] === curMin) return "pivot";
      return "active";
    }
    return "default";
  };
  const topLabel = (idx: number) => (idx === left ? "L" : idx === right ? "R" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">count subarrays where max − min ≤ 2</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        {curMax !== null && <span className="rounded-md border px-3 py-1">max {curMax} − min {curMin} = {curMax - (curMin ?? 0)}</span>}
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "target", label: "Window max" }, { role: "pivot", label: "Window min" }, { role: "active", label: "Window" }]} />
    </div>
  );
}
