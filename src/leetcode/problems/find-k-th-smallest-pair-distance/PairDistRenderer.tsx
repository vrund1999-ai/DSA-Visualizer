import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PairDistData } from "./algorithm";

export function PairDistRenderer({ step }: RendererProps<PairDistData>) {
  const { nums, k, lo, hi, mid, count, enough, answer } = step.data;

  const roleFor = (_i: number) => "default";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">k = <b className="tabular-nums">{k}</b></span>
        <span className="rounded-md border px-3 py-1">search [{lo}, {hi}]</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">distance = {mid}</span>}
      </div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      {count !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          pairs with distance ≤ {mid}: <b className="tabular-nums">{count}</b> {enough ? "≥" : "<"} {k}
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">k-th smallest distance = {answer}</div>}

      <Legend items={[{ role: "current", label: "Candidate distance" }]} />
    </div>
  );
}
