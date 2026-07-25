import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BallsData } from "./algorithm";

export function BallsRenderer({ step }: RendererProps<BallsData>) {
  const { nums, maxOps, lo, hi, mid, perBag, ops, feasible, answer } = step.data;

  const roleFor = (i: number) => {
    if (perBag.length && perBag[i] > 0) return "compared";
    if (perBag.length) return "sorted";
    return "default";
  };

  const badge = (i: number) => (perBag.length ? `+${perBag[i]}` : `${nums[i]}`);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">maxOps = <b className="tabular-nums">{maxOps}</b></span>
        <span className="rounded-md border px-3 py-1">search [{lo}, {hi}]</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">penalty = {mid}</span>}
      </div>

      <ArrayCells values={nums} roleFor={roleFor} badge={badge} showIndex={false} cellWidth="w-12" />

      {ops !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          total splits = {ops} {feasible ? "≤" : ">"} {maxOps} → {feasible ? "feasible" : "infeasible"}
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min penalty = {answer}</div>}

      <Legend items={[{ role: "compared", label: "Bag needs splitting" }, { role: "sorted", label: "Fits under cap" }]} />
    </div>
  );
}
