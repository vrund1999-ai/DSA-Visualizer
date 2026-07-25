import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxIslandData } from "./algorithm";

export function MaxIslandRenderer({ step }: RendererProps<MaxIslandData>) {
  const { grid, cur, island, currentArea, best, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (island.includes(`${r},${c}`)) return "visited";
    if (grid[r][c] === 1) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Grid rows={grid.length} cols={grid[0].length} cellRole={cellRole} cellValue={(r, c) => (grid[r][c] === 1 ? "🟩" : island.includes(`${r},${c}`) ? "▪" : "·")} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">current island = <b className="tabular-nums">{currentArea}</b></span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Exploring" }, { role: "visited", label: "Counted (sunk)" }, { role: "active", label: "Unvisited land" }]} />
    </div>
  );
}
