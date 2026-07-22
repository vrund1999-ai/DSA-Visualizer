import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { LISData } from "./algorithm";

export function LISRenderer({ step }: RendererProps<LISData>) {
  const { nums, dp, i, j, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Longest so far</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">{best}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : idx === j ? "j" : "")} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (LIS length ending here)</span>
        <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "i" },
          { role: "compared", label: "j (extends)" },
          { role: "visited", label: "j (too big)" },
          { role: "target", label: "dp[i] improved" },
          { role: "sorted", label: "dp[i] finalized" },
        ]}
      />
    </div>
  );
}
