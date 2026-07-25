import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { PerimeterData } from "./algorithm";

export function PerimeterRenderer({ step }: RendererProps<PerimeterData>) {
  const { grid, cur, contribution, perimeter, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (grid[r][c] === 1) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={(r, c) => (grid[r][c] === 1 ? "🟦" : "·")} />

      <div className="flex items-center gap-4 text-sm">
        {contribution !== null && <span className="rounded-md border-2 border-role-current bg-role-current/10 px-3 py-1">+{contribution}</span>}
        <span className="rounded-md border px-3 py-1">perimeter = <b className="tabular-nums">{answer ?? perimeter}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Counting cell" }, { role: "active", label: "Land" }]} />
    </div>
  );
}
