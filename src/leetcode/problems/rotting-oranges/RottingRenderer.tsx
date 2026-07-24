import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { RottingData } from "./algorithm";

export function RottingRenderer({ step }: RendererProps<RottingData>) {
  const { grid, justRotted, minutes, fresh, answer } = step.data;
  const R = grid.length;
  const C = R ? grid[0].length : 0;
  const rotSet = new Set(justRotted.map(([r, c]) => `${r},${c}`));

  const role = (r: number, c: number) => {
    if (rotSet.has(`${r},${c}`)) return "current";
    if (grid[r][c] === 2) return "swapped";
    if (grid[r][c] === 1) return "sorted";
    return "wall";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">minute</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{minutes}</span>
        <span className="text-muted-foreground">fresh left</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2 py-0.5 font-semibold tabular-nums text-role-sorted">{fresh}</span>
        {answer !== null && <span className="font-semibold text-role-target">answer = {answer}</span>}
      </div>

      <Grid rows={R} cols={C} cellRole={role} cellValue={(r, c) => (grid[r][c] === 0 ? "" : grid[r][c] === 2 ? "🦠" : "🍊")} />

      <Legend
        items={[
          { role: "current", label: "Just rotted" },
          { role: "swapped", label: "Rotten" },
          { role: "sorted", label: "Fresh" },
          { role: "wall", label: "Empty" },
        ]}
      />
    </div>
  );
}
