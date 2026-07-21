import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SubsetsData } from "./algorithm";

export function SubsetsRenderer({ step }: RendererProps<SubsetsData>) {
  const { nums, chosen, results } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Current subset</span>
        <span className="rounded-md border border-role-path bg-role-path/15 px-2.5 py-1 font-mono">
          [{chosen.map((i) => nums[i]).join(", ")}]
        </span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Subsets found ({results.length})
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.map((r, k) => (
            <span key={k} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">
              [{r.join(", ")}]
            </span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "path", label: "In current subset" },
          { role: "current", label: "Just included" },
          { role: "swapped", label: "Backtracked" },
        ]}
      />
    </div>
  );
}
