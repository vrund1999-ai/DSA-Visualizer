import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { UniqueOccData } from "./algorithm";

export function UniqueOccRenderer({ step }: RendererProps<UniqueOccData>) {
  const { counts, seenCounts, checking, duplicate, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value → occurrences</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {counts.map(([v, c]) => (
            <span key={v} className={`flex flex-col items-center rounded-md border-2 px-2 py-1 font-mono text-xs tabular-nums ${c === checking ? (duplicate ? "border-role-target bg-role-target/15" : "border-role-current bg-role-current/15") : "border-border bg-card"}`}>
              <span>{v}</span>
              <span className="text-muted-foreground">×{c}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">distinct counts seen</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {seenCounts.length === 0 ? <span className="text-xs text-muted-foreground">none</span> : seenCounts.map((c, i) => (
            <span key={i} className="flex size-9 items-center justify-center rounded-md border-2 border-role-visited bg-role-visited/10 font-mono text-sm tabular-nums">{c}</span>
          ))}
        </div>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "all counts unique ✓" : "duplicate count ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Checking count" }, { role: "visited", label: "Distinct so far" }, { role: "target", label: "Duplicate" }]} />
    </div>
  );
}
