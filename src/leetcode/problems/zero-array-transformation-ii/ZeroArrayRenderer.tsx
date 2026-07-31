import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ZeroArrayData } from "./algorithm";

export function ZeroArrayRenderer({ step }: RendererProps<ZeroArrayData>) {
  const { nums, queries, lo, hi, mid, avail, feasible, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums (target decrements)</span>
        <ArrayCells values={nums} roleFor={() => "target"} showIndex />
      </div>

      {avail.length > 0 && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">available decrement (k = {mid ?? lo})</span>
          <ArrayCells values={avail} roleFor={(i) => (avail[i] >= nums[i] ? "sorted" : "swapped")} showIndex={false} />
        </div>
      )}

      <div className="flex flex-col items-center gap-1 rounded-md border px-4 py-2 text-sm">
        <div className="flex gap-4 tabular-nums">
          <span>lo = {lo}</span>
          <span className="font-semibold text-role-current">mid = {mid ?? "—"}</span>
          <span>hi = {hi}</span>
        </div>
        {feasible !== null && <span className="text-xs text-muted-foreground">{feasible ? "feasible" : "not enough"}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        minimum queries = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "covered" }, { role: "swapped", label: "short" }]} />
      <span className="sr-only">{queries.length} queries</span>
    </div>
  );
}
