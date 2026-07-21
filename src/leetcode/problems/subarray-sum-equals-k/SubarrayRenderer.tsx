import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SubarrayData } from "./algorithm";

export function SubarrayRenderer({ step }: RendererProps<SubarrayData>) {
  const { nums, k, i, sum, count, need, entries } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
        <span className="text-muted-foreground">prefix sum</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{sum}</span>
        <span className="text-muted-foreground">count</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2 py-0.5 font-semibold tabular-nums text-role-sorted">{count}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Prefix sums seen (sum → count){need !== null ? ` · need ${need}` : ""}
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {entries.map((e) => (
            <span
              key={e.key}
              className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${
                e.key === need
                  ? "border-role-sorted bg-role-sorted/15 text-foreground"
                  : "border-border bg-muted/30 text-muted-foreground"
              }`}
            >
              {e.key}→{e.val}
            </span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Current index" },
          { role: "sorted", label: "Match found" },
          { role: "visited", label: "Prefix recorded" },
        ]}
      />
    </div>
  );
}
