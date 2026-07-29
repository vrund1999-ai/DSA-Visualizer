import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { EnclavesData } from "./algorithm";

export function EnclavesRenderer({ step }: RendererProps<EnclavesData>) {
  const { grid, cur, count, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (grid[r][c] === 2) return "visited";
    if (grid[r][c] === 1) return answer !== null ? "compared" : "active";
    return "default";
  };

  const cellValue = (r: number, c: number) => (grid[r][c] === 0 ? "🌊" : grid[r][c] === 2 ? "·" : "🟩");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={cellValue} />

      <div className="rounded-md border px-3 py-1 text-sm">enclosed land = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Flooding" }, { role: "visited", label: "Escaped (border-reachable)" }, { role: "compared", label: "Enclosed land" }]} />
    </div>
  );
}
