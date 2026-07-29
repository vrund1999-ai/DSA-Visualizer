import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { LifeData } from "./algorithm";

export function LifeRenderer({ step }: RendererProps<LifeData>) {
  const { board, next, cur, live, outcome, answer } = step.data;

  const boardRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (cur && Math.abs(cur[0] - r) <= 1 && Math.abs(cur[1] - c) <= 1 && board[r][c] === 1) return "compared";
    if (board[r][c] === 1) return "active";
    return "default";
  };
  const nextRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (next[r][c] === 1) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current</span>
          <Grid rows={board.length} cols={board[0].length} cellRole={boardRole} cellValue={(r, c) => (board[r][c] ? "●" : "·")} size="size-9" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">next</span>
          <Grid rows={next.length} cols={next[0].length} cellRole={nextRole} cellValue={(r, c) => (next[r][c] === null ? "?" : (answer ?? next)[r][c] ? "●" : "·")} size="size-9" />
        </div>
      </div>

      {live !== null && <div className="rounded-md border px-3 py-1 text-sm">live neighbors = {live} → {outcome}</div>}

      <Legend items={[{ role: "current", label: "Cell computed" }, { role: "compared", label: "Live neighbor" }, { role: "sorted", label: "Alive next gen" }]} />
    </div>
  );
}
