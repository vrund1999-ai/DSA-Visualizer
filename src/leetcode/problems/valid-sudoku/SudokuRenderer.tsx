import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SudokuData } from "./algorithm";

export function SudokuRenderer({ step }: RendererProps<SudokuData>) {
  const { board, current, conflict, checked, result } = step.data;
  const conflictSet = new Set((conflict ?? []).map(([r, c]) => `${r},${c}`));
  const checkedSet = new Set(checked.map(([r, c]) => `${r},${c}`));

  const role = (r: number, c: number) => {
    if (conflictSet.has(`${r},${c}`)) return "swapped";
    if (current && current[0] === r && current[1] === c) return "current";
    if (checkedSet.has(`${r},${c}`)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <Grid rows={9} cols={9} cellRole={role} cellValue={(r, c) => board[r][c]} size="size-7" />

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Valid board ✓" : "Invalid board ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Checking" },
          { role: "visited", label: "Verified" },
          { role: "swapped", label: "Conflict" },
        ]}
      />
    </div>
  );
}
