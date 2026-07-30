import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DistinctIslandsData } from "./algorithm";

const SHAPE_FILL = ["bg-role-active/50 border-role-active", "bg-role-pivot/50 border-role-pivot", "bg-role-target/50 border-role-target", "bg-role-sorted/50 border-role-sorted", "bg-amber-400/50 border-amber-400", "bg-cyan-400/50 border-cyan-400"];

export function DistinctIslandsRenderer({ step }: RendererProps<DistinctIslandsData>) {
  const { grid, shapeId, cur, shapes, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;
  const curSet = new Set(cur);

  const cls = (r: number, c: number) => {
    if (curSet.has(`${r},${c}`)) return "bg-role-current text-white border-role-current";
    if (shapeId[r][c] >= 0) return SHAPE_FILL[shapeId[r][c] % SHAPE_FILL.length];
    return "bg-muted/30 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.25rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-9 w-9 items-center justify-center rounded border text-xs font-semibold ${cls(r, c)}`}>{grid[r][c] === 1 ? (shapeId[r][c] >= 0 ? shapeId[r][c] + 1 : "") : ""}</div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">distinct islands = <b className="tabular-nums">{answer ?? shapes.length}</b></div>

      <Legend items={[{ role: "current", label: "Current island" }, { role: "active", label: "Shape groups (colored)" }]} />
    </div>
  );
}
