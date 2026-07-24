import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CombinationData } from "./algorithm";

export function CombinationRenderer({ step }: RendererProps<CombinationData>) {
  const { candidates, target, path, remain, considering, results, found } = step.data;

  const roleFor = (i: number) => {
    if (path.includes(i)) return "active";
    if (i === considering) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>target = {target}</span>
        <span>remaining = <b className="tabular-nums text-foreground">{remain}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">candidates (sorted)</span>
        <ArrayCells values={candidates} roleFor={roleFor} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current path</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{path.map((i) => candidates[i]).join(", ")}]</div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">results ({results.length})</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className={`rounded-md border px-2 py-1 font-mono text-xs ${found && k === results.length - 1 ? "border-role-visited bg-role-visited/20" : "bg-muted/30"}`}>[{r.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "active", label: "In path" }, { role: "current", label: "Considering" }, { role: "visited", label: "New result" }]} />
    </div>
  );
}
