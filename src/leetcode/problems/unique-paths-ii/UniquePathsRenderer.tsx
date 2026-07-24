import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { UniquePathsData } from "./algorithm";

export function UniquePathsRenderer({ step }: RendererProps<UniquePathsData>) {
  const { grid, dp, filled, cur, from } = step.data;

  const eq = (a: [number, number] | null, r: number, c: number) => a !== null && a[0] === r && a[1] === c;
  const isFrom = (r: number, c: number) => from.some(([fr, fc]) => fr === r && fc === c);

  const cellRole = (r: number, c: number) => {
    if (grid[r][c] === 1) return "wall";
    if (eq(cur, r, c)) return "current";
    if (isFrom(r, c)) return "compared";
    if (filled[r][c]) return "visited";
    return "default";
  };

  const cellValue = (r: number, c: number) => {
    if (grid[r][c] === 1) return "■";
    return filled[r][c] ? dp[r][c] : "·";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />
      <Legend items={[{ role: "current", label: "Computing" }, { role: "compared", label: "Summed from" }, { role: "visited", label: "Path count" }, { role: "wall", label: "Obstacle" }]} />
    </div>
  );
}
