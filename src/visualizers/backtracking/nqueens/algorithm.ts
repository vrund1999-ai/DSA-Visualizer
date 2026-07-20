import type { Highlight } from "@/core/types";
import { cellRef, type NQueensStep } from "./types";

/**
 * Pure step generator for N-Queens, solving to the first valid placement by
 * backtracking. Shows each attempted cell, the conflict on failure, and the
 * removal when backtracking. `line` points into NQUEENS_CODE.
 */
export function nQueensSteps(nInput: number): NQueensStep[] {
  const n = Math.max(1, Math.min(8, Math.floor(nInput)));
  const queens: number[] = [];
  const steps: NQueensStep[] = [];
  let placements = 0;
  let backtracks = 0;

  const placedHl = (): Highlight[] =>
    queens.map((c, r) => ({ ref: cellRef(r, c), role: "sorted" as const }));

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { n, queens: [...queens] },
      highlights: [...highlights, ...placedHl()],
      metrics: { placements, backtracks },
    });
  };

  // Returns the conflicting row if (row, col) is attacked, else -1.
  const conflictRow = (row: number, col: number): number => {
    for (let r = 0; r < row; r++) {
      const c = queens[r];
      if (c === col || Math.abs(c - col) === Math.abs(r - row)) return r;
    }
    return -1;
  };

  const solve = (row: number): boolean => {
    if (row === n) {
      push(1, `All ${n} queens placed — solution found!`, [
        ...queens.map((c, r) => ({ ref: cellRef(r, c), role: "target" as const })),
      ]);
      return true;
    }
    for (let col = 0; col < n; col++) {
      const bad = conflictRow(row, col);
      if (bad === -1) {
        push(3, `Row ${row}: column ${col} is safe.`, [
          { ref: cellRef(row, col), role: "current" },
        ]);
        queens.push(col);
        placements++;
        push(4, `Place a queen at (${row}, ${col}).`, []);
        if (solve(row + 1)) return true;
        queens.pop();
        backtracks++;
        push(6, `Dead end — remove the queen from (${row}, ${col}) and try the next column.`, [
          { ref: cellRef(row, col), role: "swapped" },
        ]);
      } else {
        push(3, `Row ${row}, column ${col} is attacked by the queen in row ${bad}.`, [
          { ref: cellRef(row, col), role: "swapped" },
          { ref: cellRef(bad, queens[bad]), role: "compared" },
        ]);
      }
    }
    push(9, `No safe column in row ${row} — backtrack.`, []);
    return false;
  };

  push(0, `Place queens row by row on a ${n}×${n} board; backtrack on conflicts.`, []);
  solve(0);

  return steps;
}
