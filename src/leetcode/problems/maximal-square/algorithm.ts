import type { Step } from "@/core/types";

export interface MaxSquareData {
  matrix: number[][];
  /** dp side length per cell */
  dp: number[][];
  cur: [number, number] | null;
  deps: [number, number][];
  best: number;
  /** bottom-right cell of the best square, for outlining */
  bestCell: [number, number] | null;
  answer: number | null;
}

export type MaxSquareStep = Step<MaxSquareData>;

/**
 * dp[i][j] is the side of the largest all-ones square with bottom-right corner at (i,j): a 1 extends the
 * smallest of its top, left, and top-left squares by one. The answer is the largest side squared. `line`
 * indexes CODE.
 */
export function maxSquareSteps(matrix: number[][]): MaxSquareStep[] {
  const steps: MaxSquareStep[] = [];
  const R = matrix.length;
  const C = matrix[0].length;
  const dp = Array.from({ length: R }, () => new Array(C).fill(0));
  let best = 0;
  let bestCell: [number, number] | null = null;

  const snap = (o: Partial<MaxSquareData>): MaxSquareData => ({ matrix, dp: dp.map((r) => [...r]), cur: null, deps: [], best, bestCell, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxSquareData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[i][j] = side of the largest all-ones square ending at (i,j).");

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] !== 1) continue;
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        push(8, `(${i},${j}) on the edge → square side 1.`, { cur: [i, j] });
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        push(8, `(${i},${j}): 1 + min(${dp[i - 1][j]}, ${dp[i][j - 1]}, ${dp[i - 1][j - 1]}) = ${dp[i][j]}.`, { cur: [i, j], deps: [[i - 1, j], [i, j - 1], [i - 1, j - 1]] });
      }
      if (dp[i][j] > best) {
        best = dp[i][j];
        bestCell = [i, j];
      }
    }
  }

  push(11, `Largest square side ${best} → area ${best * best}.`, { answer: best * best });
  return steps;
}
