import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { ShortestPathData } from "./algorithm";

export function ShortestPathRenderer({ step }: RendererProps<ShortestPathData>) {
  const { grid, dist, cur, frontier, answer } = step.data;

  const isFrontier = (r: number, c: number) => frontier.some(([fr, fc]) => fr === r && fc === c);

  const cellRole = (r: number, c: number) => {
    if (grid[r][c] === 1) return "wall";
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (isFrontier(r, c)) return "active";
    if (dist[r][c] > 0) return "visited";
    return "default";
  };

  const cellValue = (r: number, c: number) => {
    if (grid[r][c] === 1) return "■";
    return dist[r][c] > 0 ? dist[r][c] : "·";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">8-directional BFS · cell shows distance from start</div>

      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === -1 ? "text-role-target" : "text-role-visited"}`}>
          {answer === -1 ? "no clear path (-1)" : `shortest path length = ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Expanding" }, { role: "active", label: "Frontier" }, { role: "visited", label: "Reached" }, { role: "wall", label: "Blocked" }]} />
    </div>
  );
}
