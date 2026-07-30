import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { RowMaxData } from "./algorithm";

export function RowMaxRenderer({ step }: RendererProps<RowMaxData>) {
  const { grid, scanRow, bestRow, answer } = step.data;
  const rows = grid.length;
  const cols = grid[0].length;

  const cellRole = (r: number, c: number) => {
    if (answer !== null && r === bestRow) return grid[r][c] === 1 ? "sorted" : "visited";
    if (r === scanRow) return grid[r][c] === 1 ? "current" : "compared";
    return grid[r][c] === 1 ? "active" : "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Grid rows={rows} cols={cols} cellRole={cellRole} cellValue={(r, c) => grid[r][c]} size="size-9" />

      <div className="rounded-md border px-3 py-1 text-sm">
        answer = <b className="tabular-nums">{answer ? `[${answer[0]}, ${answer[1]}]` : "…"}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "scanning row 1s" },
          { role: "sorted", label: "best row" },
          { role: "active", label: "other 1s" },
        ]}
      />
    </div>
  );
}
