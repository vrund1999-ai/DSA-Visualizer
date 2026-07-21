import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RobberData } from "./algorithm";

export function RobberRenderer({ step }: RendererProps<RobberData>) {
  const { nums, dp, i, skip, take } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-muted-foreground">skip: <span className="font-mono text-foreground">{skip ?? "—"}</span></span>
        <span className="text-muted-foreground">rob: <span className="font-mono text-foreground">{take ?? "—"}</span></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Houses (nums)</span>
        <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (best up to i)</span>
        <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "target", label: "dp[i] (robbed)" },
          { role: "current", label: "dp[i] (skipped)" },
          { role: "compared", label: "dp[i-1], dp[i-2]" },
        ]}
      />
    </div>
  );
}
