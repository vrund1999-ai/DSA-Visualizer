import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MaxAvgData } from "./algorithm";

export function MaxAvgRenderer({ step }: RendererProps<MaxAvgData>) {
  const { nums, k, sum, bestSum } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">window size k</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{k}</span>
        <span className="text-muted-foreground">current sum</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{sum}</span>
        <span className="text-muted-foreground">best avg</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{(bestSum / k).toFixed(2)}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />

      <Legend
        items={[
          { role: "active", label: "Current window" },
          { role: "target", label: "Best window" },
        ]}
      />
    </div>
  );
}
