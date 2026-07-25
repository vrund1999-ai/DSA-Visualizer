import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ReversePairsData } from "./algorithm";

export function ReversePairsRenderer({ step }: RendererProps<ReversePairsData>) {
  const { nums, lo, mid, hi, added, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (lo === null || hi === null || mid === null) return "default";
    if (i >= lo && i <= mid) return "current";
    if (i > mid && i <= hi) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-3 text-sm">
        {added !== null && <span className="rounded-md border px-3 py-1">this merge: +{added} pair(s)</span>}
        <span className="rounded-md border px-3 py-1">reverse pairs = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Left half (sorted)" }, { role: "compared", label: "Right half (sorted)" }]} />
    </div>
  );
}
