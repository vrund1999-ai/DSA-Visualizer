import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { PermutationsData } from "./algorithm";

export function PermutationsRenderer({ step }: RendererProps<PermutationsData>) {
  const { nums, used, current, results } = step.data;
  const roleFor = (i: number) => {
    const hit = roleLookup(step.highlights)(i);
    if (hit !== "default") return hit;
    return used[i] ? "visited" : "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Current</span>
        <span className="rounded-md border border-role-path bg-role-path/15 px-2.5 py-1 font-mono">[{current.join(", ")}]</span>
      </div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Permutations ({results.length})</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-xs">[{r.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Chosen" },
          { role: "visited", label: "Used" },
          { role: "swapped", label: "Backtracked" },
          { role: "target", label: "Permutation" },
        ]}
      />
    </div>
  );
}
