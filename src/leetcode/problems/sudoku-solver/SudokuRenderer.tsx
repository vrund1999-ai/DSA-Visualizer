import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SudokuData } from "./algorithm";

export function SudokuRenderer({ step }: RendererProps<SudokuData>) {
  const { grid, cur, action, givens, solved } = step.data;

  const cellClass = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) {
      return action === "backtrack" ? "bg-role-compared text-white" : "bg-role-current text-white";
    }
    if (givens.includes(`${r},${c}`)) return "text-foreground font-bold";
    if (grid[r][c] !== 0) return solved ? "bg-role-sorted/20 text-foreground" : "text-role-current";
    return "text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="grid grid-cols-9 rounded-md border-2 border-foreground">
        {grid.map((row, r) =>
          row.map((v, c) => (
            <div
              key={`${r}-${c}`}
              className={`flex size-8 items-center justify-center border text-sm tabular-nums transition-colors ${cellClass(r, c)} ${
                c % 3 === 0 && c !== 0 ? "border-l-foreground border-l-2" : "border-l-border"
              } ${r % 3 === 0 && r !== 0 ? "border-t-foreground border-t-2" : "border-t-border"}`}
            >
              {v !== 0 ? v : ""}
            </div>
          )),
        )}
      </div>

      {solved && <div className="rounded-md bg-role-sorted px-4 py-1.5 text-sm font-semibold text-white">Solved ✓</div>}

      <Legend items={[{ role: "current", label: "Placing" }, { role: "compared", label: "Backtracking" }, { role: "sorted", label: "Solved cells" }]} />
    </div>
  );
}
