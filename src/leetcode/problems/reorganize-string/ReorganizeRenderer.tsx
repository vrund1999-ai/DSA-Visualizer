import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ReorganizeData } from "./algorithm";

export function ReorganizeRenderer({ step }: RendererProps<ReorganizeData>) {
  const { counts, res, filled, answer, impossible } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">char frequencies (sorted)</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {counts.map(([ch, c]) => (
            <span key={ch} className="flex flex-col items-center rounded-md border px-2 py-1 font-mono text-xs">
              <span>{ch}</span>
              <span className="text-muted-foreground">×{c}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">arrangement</span>
        <ArrayCells values={res.map((v) => (v === null ? "·" : v))} roleFor={(i) => (i === filled ? "swapped" : res[i] !== null ? "visited" : "default")} />
      </div>

      {answer !== null && (
        impossible ? <div className="text-base font-semibold text-role-target">impossible (empty)</div>
          : <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">{answer}</div>
      )}

      <Legend items={[{ role: "swapped", label: "Just placed" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
