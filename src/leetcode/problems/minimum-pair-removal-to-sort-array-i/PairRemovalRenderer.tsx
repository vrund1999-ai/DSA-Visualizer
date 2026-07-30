import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PairRemovalData } from "./algorithm";

export function PairRemovalRenderer({ step }: RendererProps<PairRemovalData>) {
  const { nums, pair, ops, answer } = step.data;

  const roleFor = (idx: number) => {
    if (pair !== null && (idx === pair || idx === pair + 1)) return "current";
    return "default";
  };

  const sorted = nums.every((v, i) => i === 0 || nums[i - 1] <= v);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={nums} roleFor={roleFor} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className={`rounded-md border px-3 py-1 ${sorted ? "border-role-sorted text-role-sorted" : ""}`}>{sorted ? "sorted ✓" : "not sorted"}</span>
        <span className="rounded-md border px-3 py-1">operations = <b className="tabular-nums">{answer ?? ops}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Min-sum pair (merging)" }]} />
    </div>
  );
}
