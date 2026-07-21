import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ClimbData } from "./algorithm";

export function ClimbRenderer({ step }: RendererProps<ClimbData>) {
  const { n, dp } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <p className="text-center text-sm text-muted-foreground">
        dp[i] = number of distinct ways to reach step i (climbing {n} steps)
      </p>

      <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} />

      <p className="text-center text-xs text-muted-foreground">
        Index labels are the step number.
      </p>

      <Legend
        items={[
          { role: "compared", label: "dp[i-1], dp[i-2]" },
          { role: "target", label: "dp[i] just filled" },
          { role: "sorted", label: "Base cases" },
        ]}
      />
    </div>
  );
}
