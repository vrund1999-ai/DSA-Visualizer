import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MinCostData } from "./algorithm";

export function MinCostRenderer({ step }: RendererProps<MinCostData>) {
  const { cost, dp, i } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Step costs</span>
        <ArrayCells values={cost} roleFor={() => "default"} showIndex />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (cheapest to reach step i; top = last)</span>
        <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "compared", label: "Cheaper source" },
          { role: "visited", label: "Other source" },
          { role: "target", label: "dp[i] filled" },
        ]}
      />
    </div>
  );
}
