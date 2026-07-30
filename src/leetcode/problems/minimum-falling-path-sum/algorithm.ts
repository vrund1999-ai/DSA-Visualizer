import type { Step } from "@/core/types";

export interface FallingData {
  matrix: number[][];
  /** dp value per cell; null = not yet computed */
  dp: (number | null)[][];
  cur: [number, number] | null;
  /** the chosen parent cell in the row above */
  chosen: [number, number] | null;
  answer: number | null;
}

export type FallingStep = Step<FallingData>;

/**
 * A falling path steps down one row at a time to a cell directly above or diagonally adjacent. The best
 * path reaching a cell is its value plus the minimum of the (up to three) cells above it, filled row by
 * row; the answer is the smallest value in the last row. `line` indexes CODE.
 */
export function fallingSteps(matrix: number[][]): FallingStep[] {
  const steps: FallingStep[] = [];
  const n = matrix.length;
  const dp: (number | null)[][] = Array.from({ length: n }, () => new Array(n).fill(null));
  for (let c = 0; c < n; c++) dp[0][c] = matrix[0][c];

  const snap = (o: Partial<FallingData>): FallingData => ({ matrix, dp: dp.map((r) => [...r]), cur: null, chosen: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FallingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "First row: each cell's best path is its own value.");

  for (let r = 1; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let best = dp[r - 1][c] as number;
      let chosen: [number, number] = [r - 1, c];
      if (c > 0 && (dp[r - 1][c - 1] as number) < best) {
        best = dp[r - 1][c - 1] as number;
        chosen = [r - 1, c - 1];
      }
      if (c < n - 1 && (dp[r - 1][c + 1] as number) < best) {
        best = dp[r - 1][c + 1] as number;
        chosen = [r - 1, c + 1];
      }
      dp[r][c] = matrix[r][c] + best;
      push(9, `(${r},${c}): ${matrix[r][c]} + min above (${best}) = ${dp[r][c]}.`, { cur: [r, c], chosen });
    }
  }

  const answer = Math.min(...(dp[n - 1] as number[]));
  push(13, `Minimum falling path sum: ${answer}.`, { answer });
  return steps;
}
