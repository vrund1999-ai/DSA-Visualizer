import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SummaryRangesData } from "./algorithm";

export function SummaryRangesRenderer({ step }: RendererProps<SummaryRangesData>) {
  const { nums, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ranges</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : result.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-sm">{r}</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "active", label: "Current run" },
          { role: "target", label: "Recorded range" },
        ]}
      />
    </div>
  );
}
