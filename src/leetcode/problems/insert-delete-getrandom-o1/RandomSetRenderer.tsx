import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RandomSetData } from "./algorithm";

export function RandomSetRenderer({ step }: RendererProps<RandomSetData>) {
  const { arr, idx, op, result, swapped } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">{op}</span>
        {result && <span className="text-muted-foreground">→ {result}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Array (dense, O(1) random)</span>
        <ArrayCells values={arr.length ? arr : ["∅"]} roleFor={(i) => (i === swapped ? "swapped" : "default")} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value → index map</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {idx.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : idx.map((e) => (
            <span key={e.value} className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs tabular-nums">{e.value}→{e.index}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "swapped", label: "Swapped-in on remove" }]} />
    </div>
  );
}
