import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MinAbsDiffData } from "./algorithm";

export function MinAbsDiffRenderer({ step }: RendererProps<MinAbsDiffData>) {
  const { arr, pair, min, phase, results } = step.data;

  const roleFor = (i: number) => {
    if (pair && (i === pair[0] || i === pair[1])) return phase === "collect" ? "sorted" : "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} showIndex={false} />

      <div className="text-sm text-muted-foreground">
        minimum adjacent difference = <b className="tabular-nums text-foreground">{Number.isFinite(min) ? min : "?"}</b>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">pairs</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border-2 border-role-sorted bg-role-sorted/10 px-2 py-1 font-mono text-xs">[{r[0]}, {r[1]}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Comparing" }, { role: "sorted", label: "Min-diff pair" }]} />
    </div>
  );
}
