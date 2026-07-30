import type { Step } from "@/core/types";

export interface SquaresData {
  matrix: number[][];
  dp: number[][];
  cur: [number, number] | null;
  /** the three neighbor cells feeding the min, when applicable */
  deps: [number, number][];
  total: number;
  answer: number | null;
}

export type SquaresStep = Step<SquaresData>;

/**
 * dp[i][j] is the side of the largest all-ones square whose bottom-right corner is (i,j). A cell of 1
 * extends the smallest of its top, left, and top-left squares by one; summing every dp value counts all
 * squares, since a square of side s contributes s smaller squares ending there. `line` indexes CODE.
 */
export function squaresSteps(matrix: number[][]): SquaresStep[] {
  const steps: SquaresStep[] = [];
  const R = matrix.length;
  const C = matrix[0].length;
  const dp = Array.from({ length: R }, () => new Array(C).fill(0));
  let total = 0;

  const snap = (o: Partial<SquaresData>): SquaresData => ({ matrix, dp: dp.map((r) => [...r]), cur: null, deps: [], total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SquaresData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[i][j] = side of the largest all-ones square ending at (i,j); sum them all.");

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] === 0) continue;
      if (i && j) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        total += dp[i][j];
        push(9, `(${i},${j}): 1 + min(${dp[i - 1][j]}, ${dp[i][j - 1]}, ${dp[i - 1][j - 1]}) = ${dp[i][j]} (total ${total}).`, { cur: [i, j], deps: [[i - 1, j], [i, j - 1], [i - 1, j - 1]] });
      } else {
        dp[i][j] = 1;
        total += 1;
        push(10, `(${i},${j}) on the edge → square of side 1 (total ${total}).`, { cur: [i, j] });
      }
    }
  }

  push(13, `Total squares of all sizes: ${total}.`, { answer: total });
  return steps;
}
