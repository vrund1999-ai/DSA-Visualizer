import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TicTacToeData } from "./algorithm";

export function TicTacToeRenderer({ step }: RendererProps<TicTacToeData>) {
  const { grid, cur, winLine, answer } = step.data;

  const mark = (v: number) => (v === 1 ? "X" : v === 2 ? "O" : "");

  const cellClass = (r: number, c: number) => {
    if (winLine.includes(`${r},${c}`)) return "bg-role-sorted text-white border-role-sorted";
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (grid[r][c] === 1) return "text-role-compared border-border";
    if (grid[r][c] === 2) return "text-role-pivot border-border";
    return "text-muted-foreground border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="grid grid-cols-3 gap-1">
        {grid.map((row, r) =>
          row.map((v, c) => (
            <div key={`${r}-${c}`} className={`flex size-16 items-center justify-center rounded-md border-2 text-3xl font-bold transition-colors ${cellClass(r, c)}`}>
              {mark(v)}
            </div>
          )),
        )}
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer === "A" || answer === "B" ? "bg-role-sorted text-white" : "bg-muted"}`}>
          {answer === "A" ? "A (X) wins" : answer === "B" ? "B (O) wins" : answer}
        </div>
      )}

      <Legend items={[{ role: "compared", label: "A (X)" }, { role: "pivot", label: "B (O)" }, { role: "current", label: "Latest move" }, { role: "sorted", label: "Winning line" }]} />
    </div>
  );
}
