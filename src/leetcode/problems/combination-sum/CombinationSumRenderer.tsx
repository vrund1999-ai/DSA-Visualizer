import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CombinationSumData } from "./algorithm";

export function CombinationSumRenderer({ step }: RendererProps<CombinationSumData>) {
  const { candidates, remain, current, results } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Remaining</span>
        <span className={`rounded-md border px-2.5 py-1 font-semibold tabular-nums ${remain < 0 ? "border-role-swapped bg-role-swapped/10 text-role-swapped" : remain === 0 ? "border-role-sorted bg-role-sorted/10 text-role-sorted" : "border-primary bg-primary/10 text-primary"}`}>
          {remain}
        </span>
        <span className="ml-2 text-muted-foreground">Current</span>
        <span className="rounded-md border border-role-path bg-role-path/15 px-2 py-0.5 font-mono">[{current.join(", ")}]</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Candidates</span>
        <ArrayCells values={candidates} roleFor={(idx) => roleFor(idx)} showIndex={false} />
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Combinations found ({results.length})</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-xs">[{r.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Chosen" },
          { role: "swapped", label: "Backtracked" },
          { role: "target", label: "Combination" },
        ]}
      />
    </div>
  );
}
