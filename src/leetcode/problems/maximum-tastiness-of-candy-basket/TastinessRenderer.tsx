import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TastinessData } from "./algorithm";

export function TastinessRenderer({ step }: RendererProps<TastinessData>) {
  const { sorted, k, lo, hi, mid, picked, count, feasible, answer } = step.data;
  const pickedSet = new Set(picked);

  const roleFor = (i: number) => {
    if (pickedSet.has(i)) return feasible === false ? "swapped" : "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={sorted} roleFor={roleFor} showIndex={false} />

      <div className="flex flex-col items-center gap-1 rounded-md border px-4 py-2 text-sm">
        <div className="flex gap-4 tabular-nums">
          <span>lo = {lo}</span>
          <span className="font-semibold text-role-current">gap = {mid ?? "—"}</span>
          <span>hi = {hi}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {count === null ? `target k = ${k}` : `picked ${count} (need ${k})`}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        maximum tastiness = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "picked (feasible)" }, { role: "swapped", label: "picked (infeasible)" }]} />
    </div>
  );
}
