import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BuildingsData } from "./algorithm";

export function BuildingsRenderer({ step }: RendererProps<BuildingsData>) {
  const { grid, dist, reach, buildings, curBuilding, best, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;

  const cls = (r: number, c: number) => {
    if (grid[r][c] === 1) return curBuilding && curBuilding[0] === r && curBuilding[1] === c ? "bg-role-current text-white border-role-current" : "bg-role-pivot text-white border-role-pivot";
    if (grid[r][c] === 2) return "bg-foreground text-background border-foreground";
    if (best && best[0] === r && best[1] === c) return "bg-role-sorted text-white border-role-sorted";
    if (reach[r][c] === buildings && buildings > 0) return "bg-role-active/25 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  const label = (r: number, c: number) => {
    if (grid[r][c] === 1) return "🏢";
    if (grid[r][c] === 2) return "";
    return dist[r][c] > 0 ? `${dist[r][c]}` : "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>{label(r, c)}</div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">buildings: {buildings} · min total distance = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "pivot", label: "Building" }, { role: "current", label: "BFS source" }, { role: "active", label: "Reaches all" }, { role: "sorted", label: "Best cell" }]} />
    </div>
  );
}
