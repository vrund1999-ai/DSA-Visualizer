import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SplitArrayData } from "./algorithm";

export function SplitArrayRenderer({ step }: RendererProps<SplitArrayData>) {
  const { nums, k, lo, hi, cap, pieces, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums (split into ≤ {k} contiguous parts)</span>
        <ArrayCells values={nums} roleFor={() => "default"} showIndex={false} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1.5">lo = <b className="tabular-nums">{lo}</b></span>
        {cap !== null && (
          <span className="rounded-md border-2 border-role-current bg-role-current/15 px-3 py-1.5">cap = <b className="tabular-nums">{cap}</b></span>
        )}
        <span className="rounded-md border px-3 py-1.5">hi = <b className="tabular-nums">{hi}</b></span>
      </div>

      <div className="text-sm text-muted-foreground">
        {pieces !== null ? (
          <>this cap needs <b className={pieces <= k ? "text-role-visited" : "text-role-target"}>{pieces}</b> piece(s) · limit {k}</>
        ) : (
          <>target: at most {k} parts</>
        )}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">Answer: {answer}</div>}

      <Legend items={[{ role: "current", label: "Candidate cap" }, { role: "visited", label: "Feasible" }, { role: "target", label: "Infeasible / answer" }]} />
    </div>
  );
}
