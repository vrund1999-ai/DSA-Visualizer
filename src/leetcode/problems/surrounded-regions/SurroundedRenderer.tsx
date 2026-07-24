import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SurroundedData } from "./algorithm";

export function SurroundedRenderer({ step }: RendererProps<SurroundedData>) {
  const { board, cur, phase } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return phase === "flip" ? "swapped" : "current";
    const v = board[r][c];
    if (v === "S") return "visited"; // safe
    if (v === "X") return "wall";
    return "default";
  };

  const cellValue = (r: number, c: number) => {
    const v = board[r][c];
    return v === "S" ? "O" : v;
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        {phase === "mark" ? "marking border-connected 'O's as safe" : phase === "flip" ? "capturing surrounded 'O's → 'X'" : "done"}
      </div>

      <Grid rows={board.length} cols={board[0].length} cellRole={cellRole} cellValue={cellValue} />

      <Legend items={[{ role: "current", label: "DFS cursor" }, { role: "visited", label: "Safe (border-linked)" }, { role: "swapped", label: "Capturing" }, { role: "wall", label: "Captured 'X'" }]} />
    </div>
  );
}
