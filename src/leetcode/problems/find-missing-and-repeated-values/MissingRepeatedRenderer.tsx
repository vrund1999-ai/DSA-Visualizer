import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MissingRepeatedData } from "./algorithm";

export function MissingRepeatedRenderer({ step }: RendererProps<MissingRepeatedData>) {
  const { grid, seen, cell, repeated, missing, scanValue } = step.data;
  const n = grid.length;

  const cellRole = (r: number, c: number) => {
    const v = grid[r][c];
    if (repeated !== null && v === repeated) return "swapped";
    if (cell && cell[0] === r && cell[1] === c) return "current";
    return "default";
  };

  // counts row for values 1..n*n
  const counts = Array.from({ length: n * n }, (_, i) => seen[i + 1]);
  const countRole = (i: number) => {
    const v = i + 1;
    if (repeated !== null && v === repeated) return "swapped";
    if (missing !== null && v === missing) return "target";
    if (scanValue === v) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <Grid rows={n} cols={n} cellRole={cellRole} cellValue={(r, c) => grid[r][c]} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">occurrence count (value 1..{n * n})</span>
        <ArrayCells values={counts} roleFor={countRole} topLabel={(i) => `${i + 1}`} showIndex={false} cellWidth="w-9" />
      </div>

      {(repeated !== null || missing !== null) && (
        <div className="text-sm">
          repeated = <b className="text-role-swapped">{repeated ?? "?"}</b> · missing = <b className="text-role-target">{missing ?? "?"}</b>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Inspecting" }, { role: "swapped", label: "Repeated" }, { role: "target", label: "Missing" }]} />
    </div>
  );
}
