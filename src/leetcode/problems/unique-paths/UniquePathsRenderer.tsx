import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { UniquePathsData } from "./algorithm";

export function UniquePathsRenderer({ step }: RendererProps<UniquePathsData>) {
  const { dp } = step.data;
  const roleForRef = roleLookup(step.highlights);
  const R = dp.length;
  const C = R ? dp[0].length : 0;

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">dp[r][c] = number of paths reaching that cell</p>

      <Grid rows={R} cols={C} cellRole={(r, c) => roleForRef(`${r},${c}`)} cellValue={(r, c) => dp[r][c]} size="size-12" />

      <Legend
        items={[
          { role: "compared", label: "From above / left" },
          { role: "target", label: "Cell filled" },
        ]}
      />
    </div>
  );
}
