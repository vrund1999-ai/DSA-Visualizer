import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ArrayPartitionData } from "./algorithm";

export function ArrayPartitionRenderer({ step }: RendererProps<ArrayPartitionData>) {
  const { nums, pick, partner, sum, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pick) return "sorted";
    if (i === partner) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="rounded-md border px-3 py-1 text-sm">sum of pair-mins = <b className="tabular-nums">{answer ?? sum}</b></div>

      <Legend items={[{ role: "sorted", label: "Kept (pair min)" }, { role: "compared", label: "Discarded partner" }]} />
    </div>
  );
}
