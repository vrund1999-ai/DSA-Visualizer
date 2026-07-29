import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxSubseqData } from "./algorithm";

export function MaxSubseqRenderer({ step }: RendererProps<MaxSubseqData>) {
  const { nums, k, keep, idx, res, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (keep.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="rounded-md border px-3 py-1 text-sm">
        subsequence = [{(answer ?? res).join(", ")}] · sum {(answer ?? res).reduce((a, b) => a + b, 0)}
      </div>

      <Legend items={[{ role: "sorted", label: "Kept (top-k value)" }, { role: "current", label: "Appending" }]} />
    </div>
  );
}
