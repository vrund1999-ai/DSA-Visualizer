import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { MaximalRectData } from "./algorithm";

export function MaximalRectRenderer({ step }: RendererProps<MaximalRectData>) {
  const { matrix, row, heights, best, rowArea, bestSpan, answer } = step.data;

  const inBest = (r: number, c: number) =>
    answer !== null && bestSpan !== null && c >= bestSpan.lo && c <= bestSpan.hi && r <= bestSpan.row && r > bestSpan.row - bestSpan.height;

  const cellRole = (r: number, c: number) => {
    if (inBest(r, c)) return "target";
    if (r === row && matrix[r][c] === "1") return "active";
    if (matrix[r][c] === "1") return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">
        {row >= 0 ? <>row {row} · largest rectangle here = <b className="tabular-nums text-foreground">{rowArea}</b></> : "reduce each row to a histogram"}
      </div>

      <Grid rows={matrix.length} cols={matrix[0].length} cellRole={cellRole} cellValue={(r, c) => (matrix[r][c] === "1" ? "1" : "·")} />

      {row >= 0 && (
        <div className="flex items-end gap-1" style={{ height: "3rem" }}>
          {heights.map((ht, c) => (
            <div key={c} className="flex w-6 flex-col items-center justify-end">
              <div className="w-4 rounded-t bg-role-active/60" style={{ height: `${ht * 0.7}rem` }} />
              <span className="text-[9px] tabular-nums text-muted-foreground">{ht}</span>
            </div>
          ))}
        </div>
      )}

      <div className="text-sm">best area = <b className="tabular-nums text-role-target">{answer ?? best}</b></div>

      <Legend items={[{ role: "active", label: "Current row bars" }, { role: "visited", label: "Filled cell" }, { role: "target", label: "Best rectangle" }]} />
    </div>
  );
}
