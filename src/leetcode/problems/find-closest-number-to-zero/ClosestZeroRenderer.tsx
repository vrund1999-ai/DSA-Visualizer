import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ClosestZeroData } from "./algorithm";

export function ClosestZeroRenderer({ step }: RendererProps<ClosestZeroData>) {
  const { nums, idx, bestIdx, best, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (i === bestIdx) return "pivot";
    return "default";
  };

  const badge = (i: number) => `|${Math.abs(nums[i])}|`;
  const topLabel = (i: number) => (i === bestIdx ? "best" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} badge={badge} showIndex cellWidth="w-12" />

      <div className="rounded-md border px-3 py-1 text-sm">closest to zero = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "pivot", label: "Best so far" }, { role: "current", label: "Examining" }]} />
    </div>
  );
}
