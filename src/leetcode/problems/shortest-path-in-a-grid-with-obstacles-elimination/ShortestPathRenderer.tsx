import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { ShortestPathData } from "./algorithm";

export function ShortestPathRenderer({ step }: RendererProps<ShortestPathData>) {
  const { grid, k, frontier, reached, steps, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;
  const frontierSet = new Set(frontier.map((f) => `${f.r},${f.c}`));
  const reachedSet = new Set(reached.map(([r, c]) => `${r},${c}`));

  const cellRole = (r: number, c: number) => {
    if (r === R - 1 && c === C - 1) return "target";
    if (frontierSet.has(`${r},${c}`)) return "current";
    if (grid[r][c] === 1) return "wall";
    if (reachedSet.has(`${r},${c}`)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        eliminations k = {k} · steps = {answer ?? steps}
      </span>

      <Grid rows={R} cols={C} cellRole={cellRole} cellValue={(r, c) => (grid[r][c] === 1 ? "▩" : "")} size="size-9" />

      <div className="rounded-md border px-3 py-1 text-sm">
        shortest path = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "BFS frontier" },
          { role: "visited", label: "reached" },
          { role: "wall", label: "obstacle" },
          { role: "target", label: "corner" },
        ]}
      />
    </div>
  );
}
