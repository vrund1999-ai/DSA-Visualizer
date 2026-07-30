import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ErasureData } from "./algorithm";

export function ErasureRenderer({ step }: RendererProps<ErasureData>) {
  const { nums, left, right, sum, best, answer } = step.data;

  const roleFor = (idx: number) => {
    if (right !== null && idx >= left && idx <= right) return "active";
    if (right !== null && idx < left) return "visited";
    return "default";
  };
  const topLabel = (idx: number) => (idx === left ? "L" : idx === right ? "R" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">max sum of a subarray with all-unique elements</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">window sum = {sum}</span>
        <span className="rounded-md border border-role-sorted px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Unique window" }, { role: "visited", label: "Dropped" }]} />
    </div>
  );
}
