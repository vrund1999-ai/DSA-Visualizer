import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { Search2DData } from "./algorithm";

export function Search2DRenderer({ step }: RendererProps<Search2DData>) {
  const { matrix, target, found } = step.data;
  const roleForRef = roleLookup(step.highlights);
  const R = matrix.length;
  const C = R ? matrix[0].length : 0;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">{target}</span>
        {found !== null && (
          <span className={`ml-2 font-semibold ${found ? "text-role-sorted" : "text-role-swapped"}`}>{found ? "found ✓" : "not found ✗"}</span>
        )}
      </div>

      <Grid rows={R} cols={C} cellRole={(r, c) => roleForRef(`${r},${c}`)} cellValue={(r, c) => matrix[r][c]} size="size-12" />

      <Legend
        items={[
          { role: "swapped", label: "Middle (discarded)" },
          { role: "visited", label: "Out of range" },
          { role: "target", label: "Found" },
        ]}
      />
    </div>
  );
}
