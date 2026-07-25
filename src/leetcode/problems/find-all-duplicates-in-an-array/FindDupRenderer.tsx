import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FindDupData } from "./algorithm";

export function FindDupRenderer({ step }: RendererProps<FindDupData>) {
  const { nums, readIdx, markIdx, duplicate, result, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === markIdx) return duplicate !== null ? "compared" : "swapped";
    if (i === readIdx) return "current";
    if (nums[i] < 0) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">duplicates = [{(answer ?? result).join(", ")}]</span>
        {duplicate !== null && <span className="rounded-md border px-3 py-1 font-semibold">found {duplicate}</span>}
      </div>

      <Legend items={[{ role: "current", label: "Reading value" }, { role: "swapped", label: "Marking slot" }, { role: "compared", label: "Already marked → dup" }, { role: "visited", label: "Seen (negative)" }]} />
    </div>
  );
}
