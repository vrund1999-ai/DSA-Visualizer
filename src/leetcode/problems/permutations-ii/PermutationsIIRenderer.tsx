import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PermutationsIIData } from "./algorithm";

export function PermutationsIIRenderer({ step }: RendererProps<PermutationsIIData>) {
  const { nums, used, path, considering, skipped, results, found } = step.data;

  const roleFor = (i: number) => {
    if (i === skipped) return "target";
    if (i === considering) return "current";
    if (used[i]) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current path</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{path.map((i) => nums[i]).join(", ")}]</div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">results ({results.length})</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, idx) => (
            <span key={idx} className={`rounded-md border px-2 py-1 font-mono text-xs ${found && idx === results.length - 1 ? "border-role-visited bg-role-visited/20" : "bg-muted/30"}`}>[{r.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Choosing" }, { role: "active", label: "Used" }, { role: "target", label: "Skipped duplicate" }, { role: "visited", label: "New result" }]} />
    </div>
  );
}
