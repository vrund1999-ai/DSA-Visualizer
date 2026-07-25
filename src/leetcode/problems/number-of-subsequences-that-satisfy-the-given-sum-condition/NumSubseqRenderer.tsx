import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NumSubseqData } from "./algorithm";

export function NumSubseqRenderer({ step }: RendererProps<NumSubseqData>) {
  const { nums, target, lo, hi, pairSum, added, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === lo) return "current";
    if (i === hi) return "compared";
    if (i > lo && i < hi) return "active";
    return "default";
  };

  const topLabel = (i: number) => (i === lo && i === hi ? "lo/hi" : i === lo ? "lo" : i === hi ? "hi" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">target = <b className="tabular-nums">{target}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {pairSum !== null && <span className="rounded-md border px-3 py-1">min+max = {pairSum}</span>}
        {added !== null && <span className="rounded-md border border-role-active px-3 py-1">+2^gap = {added}</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "lo (min)" }, { role: "compared", label: "hi (max)" }, { role: "active", label: "free elements (2^gap)" }]} />
    </div>
  );
}
