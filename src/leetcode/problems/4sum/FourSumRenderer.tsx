import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { FourSumData } from "./algorithm";

export function FourSumRenderer({ step }: RendererProps<FourSumData>) {
  const { nums, target, i, j, l, r, sum, quads } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{target}</span>
        <span className="ml-2 text-muted-foreground">sum</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{sum ?? "—"}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : idx === j ? "j" : idx === l ? "L" : idx === r ? "R" : "")} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Quadruplets ({quads.length})</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {quads.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : quads.map((q, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/15 px-2 py-1 font-mono text-xs tabular-nums">[{q.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "pivot", label: "Anchors i, j" },
          { role: "current", label: "L" },
          { role: "active", label: "R" },
          { role: "target", label: "Quadruplet" },
        ]}
      />
    </div>
  );
}
