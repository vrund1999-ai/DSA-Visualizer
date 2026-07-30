import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ZeroArrayData } from "./algorithm";

export function ZeroArrayRenderer({ step }: RendererProps<ZeroArrayData>) {
  const { nums, queries, capacity, qi, i, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums (need to reduce to 0)</span>
        <ArrayCells values={nums} roleFor={(idx) => (idx === i ? "current" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">capacity (decrements available)</span>
        <ArrayCells values={capacity} roleFor={(idx) => (idx === i ? (answer === false && idx === i ? "swapped" : "current") : capacity[idx] >= nums[idx] ? "sorted" : "default")} />
      </div>

      <div className="flex flex-wrap justify-center gap-1 text-xs">
        <span className="text-muted-foreground">queries:</span>
        {queries.map((q, k) => (
          <span key={k} className={`rounded border px-1.5 py-0.5 ${k === qi ? "border-role-current bg-role-current/15" : "border-border"}`}>[{q[0]},{q[1]}]</span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        can zero out = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current index/query" }, { role: "sorted", label: "Enough capacity" }, { role: "swapped", label: "Insufficient" }]} />
    </div>
  );
}
