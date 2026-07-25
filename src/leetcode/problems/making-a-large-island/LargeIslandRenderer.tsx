import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { LargeIslandData } from "./algorithm";

export function LargeIslandRenderer({ step }: RendererProps<LargeIslandData>) {
  const { grid, phase, cur, contributors, candidate, best, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return phase === "flip" ? "pivot" : "current";
    if (contributors.includes(`${r},${c}`)) return "compared";
    if (grid[r][c] >= 2) return "active";
    return "default";
  };

  const cellValue = (r: number, c: number) => (grid[r][c] >= 2 ? grid[r][c] : grid[r][c] === 0 ? "·" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">{phase === "label" ? "labeling islands" : phase === "flip" ? "trying 0-flips" : "done"}</span>
        {candidate !== null && <span className="rounded-md border border-role-pivot px-3 py-1">flip size = {candidate}</span>}
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Island (id)" }, { role: "pivot", label: "Candidate flip" }, { role: "compared", label: "Merged neighbor" }]} />
    </div>
  );
}
