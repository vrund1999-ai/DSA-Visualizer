import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DiffWaysData } from "./algorithm";

export function DiffWaysRenderer({ step }: RendererProps<DiffWaysData>) {
  const { expr, splitAt, results, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-0.5 font-mono text-xl">
        {expr.split("").map((c, i) => (
          <span key={i} className={`rounded px-1 py-0.5 ${i === splitAt ? "bg-role-current/30 text-role-current" : ""}`}>{c}</span>
        ))}
      </div>

      {splitAt !== null && (
        <div className="text-sm text-muted-foreground">
          splitting on '<b className="font-mono text-foreground">{expr[splitAt]}</b>' at index {splitAt}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">results ({results.length})</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, i) => (
            <span key={i} className={`rounded-md border px-2 py-1 font-mono text-sm tabular-nums ${answer ? "border-role-visited bg-role-visited/15" : "bg-muted/30"}`}>{r}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Split operator" }, { role: "visited", label: "Final results" }]} />
    </div>
  );
}
