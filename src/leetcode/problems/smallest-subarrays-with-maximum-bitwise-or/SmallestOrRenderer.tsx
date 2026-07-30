import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SmallestOrData } from "./algorithm";

export function SmallestOrRenderer({ step }: RendererProps<SmallestOrData>) {
  const { nums, ans, i, end, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (i !== null && end !== null && idx > i && idx <= end) return "active";
    return "default";
  };
  const badge = (idx: number) => nums[idx].toString(2);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums (binary below)</span>
        <ArrayCells values={nums} roleFor={roleFor} badge={badge} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">smallest subarray length</span>
        <ArrayCells values={ans} roleFor={(idx) => (idx === i ? "current" : answer ? "sorted" : "default")} />
      </div>

      <Legend items={[{ role: "current", label: "Start i" }, { role: "active", label: "Subarray to max OR" }, { role: "sorted", label: "Answer" }]} />
    </div>
  );
}
