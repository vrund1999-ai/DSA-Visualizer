import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CountMaxData } from "./algorithm";

export function CountMaxRenderer({ step }: RendererProps<CountMaxData>) {
  const { nums, mx, k, left, right, count, total, answer } = step.data;

  const roleFor = (idx: number) => {
    if (nums[idx] === mx) {
      if (right !== null && idx >= left && idx <= right) return "pivot";
      return "target";
    }
    if (right !== null && idx >= left && idx <= right) return "active";
    if (right !== null && idx < left) return "visited";
    return "default";
  };
  const topLabel = (idx: number) => (idx === left ? "L" : idx === right ? "R" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">max element = {mx}, need ≥ {k} in a subarray</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">maxes in window: {count}</span>
        <span className="rounded-md border px-3 py-1">valid starts: {left}</span>
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "pivot", label: "Max in window" }, { role: "target", label: "Max (outside)" }, { role: "active", label: "Window" }, { role: "visited", label: "Valid starts" }]} />
    </div>
  );
}
