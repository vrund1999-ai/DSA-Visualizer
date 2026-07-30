import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { LargestSubmatrixData } from "./algorithm";

export function LargestSubmatrixRenderer({ step }: RendererProps<LargestSubmatrixData>) {
  const { heights, activeRow, sortedRow, bestWidth, bestHeight, best, answer } = step.data;
  const rows = heights.length;
  const cols = heights[0].length;
  const maxH = Math.max(1, ...heights.flat());

  const cellRole = (r: number, c: number) => {
    if (r === activeRow) return heights[r][c] > 0 ? "current" : "compared";
    return heights[r][c] > 0 ? "active" : "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">column heights</span>
        <Grid rows={rows} cols={cols} cellRole={cellRole} cellValue={(r, c) => heights[r][c]} size="size-9" />
      </div>

      {sortedRow && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">row {activeRow} sorted ↓</span>
          <div className="flex items-end gap-1">
            {sortedRow.map((h, j) => {
              const inRect = bestWidth !== null && j < bestWidth && h >= (bestHeight ?? 0);
              return (
                <div
                  key={j}
                  className={`flex w-7 items-end justify-center rounded-t ${inRect ? "bg-role-sorted" : "bg-role-active/40"}`}
                  style={{ height: `${8 + (h / maxH) * 70}px` }}
                >
                  <span className="pb-0.5 text-[10px] font-semibold">{h}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        largest submatrix = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "active row" }, { role: "sorted", label: "best rectangle" }]} />
    </div>
  );
}
