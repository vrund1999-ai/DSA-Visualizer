import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ContainsDupIIData } from "./algorithm";

export function ContainsDupIIRenderer({ step }: RendererProps<ContainsDupIIData>) {
  const { nums, k, i, last, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Max gap k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Last seen index (value → index)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {last.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : last.map((e) => (
            <span key={e.value} className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs tabular-nums">{e.value}→{e.index}</span>
          ))}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-target" : "text-role-sorted"}`}>{result ? "Nearby duplicate ✓" : "None within k ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Recorded" },
          { role: "compared", label: "Previous index" },
          { role: "target", label: "Nearby duplicate" },
        ]}
      />
    </div>
  );
}
