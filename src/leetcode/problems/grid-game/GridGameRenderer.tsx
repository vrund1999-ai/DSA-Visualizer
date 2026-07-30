import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GridGameData } from "./algorithm";

export function GridGameRenderer({ step }: RendererProps<GridGameData>) {
  const { grid, j, topRight, bottomLeft, best, bestJ, answer } = step.data;
  const n = grid[0].length;
  const dropCol = answer !== null ? bestJ : j;

  // robot 1 path: top row [0..dropCol], then bottom row [dropCol..n-1]
  const onPath = (r: number, c: number) => {
    if (dropCol === null) return false;
    return (r === 0 && c <= dropCol) || (r === 1 && c >= dropCol);
  };
  const cls = (r: number, c: number) => {
    if (onPath(r, c)) return "bg-role-current/50 border-role-current";
    if (r === 0 && dropCol !== null && c > dropCol) return "bg-role-active/30 border-role-active"; // top-right
    if (r === 1 && dropCol !== null && c < dropCol) return "bg-role-pivot/30 border-role-pivot"; // bottom-left
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 2.75rem)` }}>
        {grid.flatMap((row, r) =>
          row.map((v, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>{v}</div>
          )),
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-active px-3 py-1">top-right {topRight}</span>
        <span className="rounded-md border border-role-pivot px-3 py-1">bottom-left {bottomLeft}</span>
        <span className="rounded-md border px-3 py-1">robot 2 = <b className="tabular-nums">{answer ?? (best === Infinity ? "…" : best)}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Robot 1 path" }, { role: "active", label: "Top-right (robot 2)" }, { role: "pivot", label: "Bottom-left (robot 2)" }]} />
    </div>
  );
}
