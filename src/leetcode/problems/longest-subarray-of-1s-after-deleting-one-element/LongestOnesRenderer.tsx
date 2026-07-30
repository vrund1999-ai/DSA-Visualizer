import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LongestOnesData } from "./algorithm";

export function LongestOnesRenderer({ step }: RendererProps<LongestOnesData>) {
  const { nums, left, right, zeros, best, answer } = step.data;

  const roleFor = (idx: number) => {
    if (right !== null && idx >= left && idx <= right) return nums[idx] === 0 ? "swapped" : "active";
    if (right !== null && idx < left) return "visited";
    return "default";
  };
  const topLabel = (idx: number) => (idx === left ? "L" : idx === right ? "R" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">longest run of 1s after deleting exactly one element</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">zeros in window = {zeros}</span>
        <span className="rounded-md border border-role-sorted px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "1 in window" }, { role: "swapped", label: "The one 0 (deleted)" }, { role: "visited", label: "Dropped" }]} />
    </div>
  );
}
