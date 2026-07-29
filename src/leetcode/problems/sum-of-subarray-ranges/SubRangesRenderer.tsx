import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SubRangesData } from "./algorithm";

export function SubRangesRenderer({ step }: RendererProps<SubRangesData>) {
  const { nums, i, j, mn, mx, range, total, answer } = step.data;

  const roleFor = (k: number) => {
    if (i === null || j === null) return "default";
    if (nums[k] === mx && k >= i && k <= j) return "compared";
    if (nums[k] === mn && k >= i && k <= j) return "pivot";
    if (k >= i && k <= j) return "active";
    return "default";
  };

  const topLabel = (k: number) => (k === i ? "i" : k === j ? "j" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {mn !== null && <span className="rounded-md border border-role-pivot px-3 py-1">min {mn}</span>}
        {mx !== null && <span className="rounded-md border border-role-compared px-3 py-1">max {mx}</span>}
        {range !== null && <span className="rounded-md border px-3 py-1">range {range}</span>}
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Current subarray" }, { role: "pivot", label: "Min" }, { role: "compared", label: "Max" }]} />
    </div>
  );
}
