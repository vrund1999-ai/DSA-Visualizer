import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CombinationsData } from "./algorithm";

export function CombinationsRenderer({ step }: RendererProps<CombinationsData>) {
  const { n, k, path, considering, results, found } = step.data;

  const pool = Array.from({ length: n }, (_, i) => i + 1);
  const roleFor = (i: number) => {
    const v = i + 1;
    if (path.includes(v)) return "active";
    if (v === considering) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">choose k = <b className="tabular-nums text-foreground">{k}</b> from 1..{n}</div>

      <ArrayCells values={pool} roleFor={roleFor} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current path</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{path.join(", ")}]</div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">results ({results.length})</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, idx) => (
            <span key={idx} className={`rounded-md border px-2 py-1 font-mono text-xs ${found && idx === results.length - 1 ? "border-role-visited bg-role-visited/20" : "bg-muted/30"}`}>[{r.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "active", label: "In path" }, { role: "current", label: "Considering" }, { role: "visited", label: "New result" }]} />
    </div>
  );
}
