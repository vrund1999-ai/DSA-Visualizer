import type { Highlight } from "@/core/types";
import { cellRef, type TableStep } from "../types";

export interface EditDistanceInput {
  a: string;
  b: string;
}

/**
 * Pure step generator for the Levenshtein edit-distance DP. dp[i][j] is the
 * cost to turn a[..i] into b[..j] using insert/delete/replace. `line` points
 * into EDIT_DISTANCE_CODE.
 */
export function editDistanceSteps(input: EditDistanceInput): TableStep[] {
  const { a, b } = input;
  const m = a.length;
  const n = b.length;
  const rows = m + 1;
  const cols = n + 1;
  const dp: (number | null)[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(null),
  );
  const steps: TableStep[] = [];
  let edits = 0;

  const rowLabels = ["∅", ...a.split("")];
  const colLabels = ["∅", ...b.split("")];

  const snapshot = () => dp.map((row) => [...row]);
  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { rows, cols, cells: snapshot(), rowLabels, colLabels },
      highlights,
      metrics: { edits },
    });
  };

  const border: Highlight[] = [];
  for (let i = 0; i < rows; i++) {
    dp[i][0] = i;
    border.push({ ref: cellRef(i, 0), role: "current" });
  }
  for (let j = 0; j < cols; j++) {
    dp[0][j] = j;
    border.push({ ref: cellRef(0, j), role: "current" });
  }
  push(0, "Base case: turning a prefix into the empty string costs its length.", border);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] as number;
        push(4, `'${a[i - 1]}' === '${b[j - 1]}' — no edit; copy the diagonal (${dp[i][j]}).`, [
          { ref: cellRef(i, j), role: "current" },
          { ref: cellRef(i - 1, j - 1), role: "compared" },
        ]);
      } else {
        const del = dp[i - 1][j] as number;
        const ins = dp[i][j - 1] as number;
        const rep = dp[i - 1][j - 1] as number;
        dp[i][j] = 1 + Math.min(del, ins, rep);
        edits++;
        push(5, `'${a[i - 1]}' ≠ '${b[j - 1]}' — 1 + min(del ${del}, ins ${ins}, rep ${rep}) = ${dp[i][j]}.`, [
          { ref: cellRef(i, j), role: "current" },
          { ref: cellRef(i - 1, j), role: "compared" },
          { ref: cellRef(i, j - 1), role: "compared" },
          { ref: cellRef(i - 1, j - 1), role: "compared" },
        ]);
      }
    }
  }

  push(7, `Edit distance between "${a}" and "${b}" is ${dp[m][n]}.`, [
    { ref: cellRef(m, n), role: "target" },
  ]);

  return steps;
}
