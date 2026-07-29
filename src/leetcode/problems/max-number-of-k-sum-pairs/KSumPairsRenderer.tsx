import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KSumPairsData } from "./algorithm";

export function KSumPairsRenderer({ step }: RendererProps<KSumPairsData>) {
  const { nums, k, l, r, sum, removed, ops, answer } = step.data;

  const roleFor = (i: number) => {
    if (removed.includes(i)) return "sorted";
    if (i === l) return "current";
    if (i === r) return "compared";
    if (l !== null && r !== null && i > l && i < r) return "active";
    return "default";
  };

  const topLabel = (i: number) => (i === l ? "l" : i === r ? "r" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {sum !== null && <span className="rounded-md border px-3 py-1">sum = {sum}</span>}
        <span className="rounded-md border px-3 py-1">operations = <b className="tabular-nums">{answer ?? ops}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "l" }, { role: "compared", label: "r" }, { role: "sorted", label: "Matched pair" }, { role: "active", label: "Remaining" }]} />
    </div>
  );
}
