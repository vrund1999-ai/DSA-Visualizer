import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { CandyData } from "./algorithm";

export function CandyRenderer({ step }: RendererProps<CandyData>) {
  const { grid, phase, marked, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (marked.includes(`${r},${c}`)) return phase === "crush" ? "compared" : "current";
    if (grid[r][c] === 0) return "default";
    return "active";
  };

  const cellValue = (r: number, c: number) => (grid[r][c] === 0 ? "·" : grid[r][c]);

  const label = phase === "mark" ? "marking runs of 3+" : phase === "crush" ? "crushing" : phase === "drop" ? "gravity" : "stable";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />

      <div className="rounded-md border px-3 py-1 text-sm">{answer ? "final board" : label}</div>

      <Legend items={[{ role: "active", label: "Candy" }, { role: "current", label: "Marked" }, { role: "compared", label: "Crushing" }]} />
    </div>
  );
}
