import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FairPairsData } from "./algorithm";

export function FairPairsRenderer({ step }: RendererProps<FairPairsData>) {
  const { nums, lower, upper, phase, l, r, count, leUpper, leLower, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === l) return "current";
    if (i === r) return "compared";
    if (l !== null && r !== null && i > l && i < r) return "active";
    return "default";
  };

  const topLabel = (i: number) => (i === l ? "l" : i === r ? "r" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">fair sum ∈ [{lower}, {upper}]</span>
        <span className="rounded-md border px-3 py-1">
          counting sum ≤ {phase === "lowerMinus1" ? lower - 1 : upper}
        </span>
      </div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">running c = <b className="tabular-nums">{count}</b></span>
        {leUpper !== null && <span className="rounded-md border px-3 py-1">LE(upper) = {leUpper}</span>}
        {leLower !== null && <span className="rounded-md border px-3 py-1">LE(lower−1) = {leLower}</span>}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">fair pairs = {answer}</div>}

      <Legend items={[{ role: "current", label: "l" }, { role: "compared", label: "r" }, { role: "active", label: "Pairs counted with l" }]} />
    </div>
  );
}
