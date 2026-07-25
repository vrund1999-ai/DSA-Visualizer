import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { CountNegData } from "./algorithm";

export function CountNegRenderer({ step }: RendererProps<CountNegData>) {
  const { grid, r, c, counted, count, answer } = step.data;

  const cellRole = (row: number, col: number) => {
    if (row === r && col === c) return "current";
    if (counted.includes(`${row},${col}`)) return "compared";
    if (grid[row][col] < 0) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={(row, col) => grid[row][col]} size="size-9" />

      <div className="rounded-md border px-3 py-1 text-sm">negatives = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Pointer" }, { role: "compared", label: "Counted this step" }, { role: "visited", label: "Negative cells" }]} />
    </div>
  );
}
