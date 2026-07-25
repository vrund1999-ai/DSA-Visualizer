import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { FoodPathData } from "./algorithm";

export function FoodPathRenderer({ step }: RendererProps<FoodPathData>) {
  const { grid, dist, cur, frontier, answer } = step.data;

  const isFrontier = (r: number, c: number) => frontier.some(([fr, fc]) => fr === r && fc === c);

  const cellRole = (r: number, c: number) => {
    const v = grid[r][c];
    if (v === "X") return "wall";
    if (v === "#") return "target";
    if (v === "*") return "pivot";
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (isFrontier(r, c)) return "active";
    if (dist[r][c] >= 0) return "visited";
    return "default";
  };

  const cellValue = (r: number, c: number) => {
    const v = grid[r][c];
    if (v === "X") return "■";
    if (v === "#") return "#";
    if (v === "*") return "★";
    return dist[r][c] > 0 ? dist[r][c] : "·";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">★ start · # food · ■ blocked</div>

      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === -1 ? "text-role-target" : "text-role-target"}`}>
          {answer === -1 ? "unreachable (-1)" : `shortest path = ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "pivot", label: "Start" }, { role: "current", label: "Expanding" }, { role: "active", label: "Frontier" }, { role: "visited", label: "Reached" }, { role: "target", label: "Food" }]} />
    </div>
  );
}
