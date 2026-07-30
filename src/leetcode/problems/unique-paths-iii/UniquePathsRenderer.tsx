import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { UniquePathsData } from "./algorithm";

export function UniquePathsRenderer({ step }: RendererProps<UniquePathsData>) {
  const { grid, path, active, paths, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;
  const pathSet = new Set(path.map(([r, c]) => `${r},${c}`));

  const cellRole = (r: number, c: number) => {
    if (active && active[0] === r && active[1] === c) return "current";
    const orig = grid[r][c];
    if (orig === -1 || pathSet.has(`${r},${c}`)) return "path";
    if (orig === 1) return "active";
    if (orig === 2) return "target";
    if (orig === -1) return "wall";
    return "default";
  };

  const cellValue = (r: number, c: number) => {
    const orig = grid[r][c];
    if (orig === 1) return "S";
    if (orig === 2) return "E";
    if (orig === -1) return pathSet.has(`${r},${c}`) ? "•" : "▩";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Grid rows={R} cols={C} cellRole={cellRole} cellValue={cellValue} size="size-9" />

      <div className="rounded-md border px-3 py-1 text-sm">
        distinct paths = <b className="tabular-nums">{answer ?? paths}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "visiting" },
          { role: "path", label: "on path" },
          { role: "target", label: "end (E)" },
        ]}
      />
    </div>
  );
}
