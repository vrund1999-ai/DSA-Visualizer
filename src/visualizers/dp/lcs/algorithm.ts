import type { Highlight } from "@/core/types";
import { cellRef, type TableStep } from "../types";

export interface LCSInput {
  a: string;
  b: string;
}

/**
 * Pure step generator for the Longest Common Subsequence DP. On a character
 * match dp[i][j] extends the diagonal; otherwise it takes the better of the
 * cell above or to the left. `line` points into LCS_CODE.
 */
export function lcsSteps(input: LCSInput): TableStep[] {
  const a = input.a;
  const b = input.b;
  const m = a.length;
  const n = b.length;
  const rows = m + 1;
  const cols = n + 1;
  const dp: (number | null)[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(null),
  );
  const steps: TableStep[] = [];
  let matches = 0;

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
      metrics: { matches },
    });
  };

  const border: Highlight[] = [];
  for (let i = 0; i < rows; i++) {
    dp[i][0] = 0;
    border.push({ ref: cellRef(i, 0), role: "current" });
  }
  for (let j = 0; j < cols; j++) {
    dp[0][j] = 0;
    border.push({ ref: cellRef(0, j), role: "current" });
  }
  push(0, "Base case: an empty prefix has LCS length 0 (row 0 and column 0).", border);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        matches++;
        dp[i][j] = (dp[i - 1][j - 1] as number) + 1;
        push(
          4,
          `'${a[i - 1]}' === '${b[j - 1]}' — extend the diagonal: dp = ${dp[i][j]}.`,
          [
            { ref: cellRef(i, j), role: "current" },
            { ref: cellRef(i - 1, j - 1), role: "compared" },
          ],
        );
      } else {
        const up = dp[i - 1][j] as number;
        const left = dp[i][j - 1] as number;
        dp[i][j] = Math.max(up, left);
        push(
          6,
          `'${a[i - 1]}' ≠ '${b[j - 1]}' — take max(up ${up}, left ${left}) = ${dp[i][j]}.`,
          [
            { ref: cellRef(i, j), role: "current" },
            { ref: cellRef(i - 1, j), role: "compared" },
            { ref: cellRef(i, j - 1), role: "compared" },
          ],
        );
      }
    }
  }

  push(7, `The LCS of "${a}" and "${b}" has length ${dp[m][n]}.`, [
    { ref: cellRef(m, n), role: "target" },
  ]);

  return steps;
}
