import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RobberIVData } from "./algorithm";

export function RobberIVRenderer({ step }: RendererProps<RobberIVData>) {
  const { nums, k, lo, hi, mid, robbed, count, feasible, answer } = step.data;

  const roleFor = (i: number) => {
    if (robbed.includes(i)) return "sorted";
    if (mid !== null && nums[i] <= mid) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">k = <b className="tabular-nums">{k}</b></span>
        <span className="rounded-md border px-3 py-1">search [{lo}, {hi}]</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">cap = {mid}</span>}
      </div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      {count !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          robbed {count} house(s) {feasible ? "≥" : "<"} {k} → {feasible ? "feasible" : "infeasible"}
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min capability = {answer}</div>}

      <Legend items={[{ role: "active", label: "≤ cap (affordable)" }, { role: "sorted", label: "Robbed (greedy)" }]} />
    </div>
  );
}
