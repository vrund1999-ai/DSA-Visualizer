import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ContainsDupData } from "./algorithm";

export function ContainsDupRenderer({ step }: RendererProps<ContainsDupData>) {
  const { nums, i, seen, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Seen set</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {seen.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            seen.map((v) => (
              <span key={v} className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs tabular-nums">
                {v}
              </span>
            ))
          )}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-swapped" : "text-role-sorted"}`}>
          {result ? "Contains a duplicate ✓" : "All unique ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "Added" },
          { role: "compared", label: "First occurrence" },
          { role: "swapped", label: "Duplicate" },
        ]}
      />
    </div>
  );
}
