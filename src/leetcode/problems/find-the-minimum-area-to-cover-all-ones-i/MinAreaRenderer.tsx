import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MinAreaData } from "./algorithm";

export function MinAreaRenderer({ step }: RendererProps<MinAreaData>) {
  const { grid, cur, minR, maxR, minC, maxC, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;
  const hasBox = maxR >= 0;

  const inBox = (r: number, c: number) => hasBox && r >= minR && r <= maxR && c >= minC && c <= maxC;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (grid[r][c] === 1) return "bg-role-active/60 border-role-active text-foreground";
    if (inBox(r, c)) return "bg-role-sorted/15 border-role-sorted/40";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold ${cls(r, c)}`}>{grid[r][c]}</div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        {hasBox && <span className="mr-2 text-muted-foreground">{maxR - minR + 1}×{maxC - minC + 1}</span>}
        minimum area = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "active", label: "Cell = 1" }, { role: "current", label: "Scanning" }, { role: "sorted", label: "Bounding box" }]} />
    </div>
  );
}
