import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { IslandsData } from "./algorithm";

export function IslandsRenderer({ step }: RendererProps<IslandsData>) {
  const { grid, visited, current, count } = step.data;
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;

  const role = (r: number, c: number) => {
    if (current && current[0] === r && current[1] === c) return "current";
    if (grid[r][c] === "0") return "wall"; // water
    if (visited[r][c] > 0) return "visited";
    return "default"; // unvisited land
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Islands found</span>
        <span className="rounded-md border border-role-visited bg-role-visited/10 px-2.5 py-1 font-semibold tabular-nums">
          {count}
        </span>
      </div>

      <Grid
        rows={rows}
        cols={cols}
        cellRole={role}
        cellValue={(r, c) => (grid[r][c] === "1" ? (visited[r][c] > 0 ? visited[r][c] : "🏝") : "🌊")}
      />

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "visited", label: "Flooded land" },
          { role: "wall", label: "Water" },
        ]}
      />
    </div>
  );
}
