import type { Step } from "@/core/types";

export interface TriangleData {
  triangle: number[][];
  /** running best-sum per column, aligned to the current working row */
  dp: number[];
  /** cell [row,col] currently being computed */
  cur: [number, number] | null;
  /** which of dp[j], dp[j+1] was chosen (column index in dp) */
  chosen: number | null;
  /** rows already folded into dp (row index cutoff, inclusive from bottom) */
  settledFrom: number;
  answer: number | null;
}

export type TriangleStep = Step<TriangleData>;

/**
 * Bottom-up DP: start dp as the last row, then fold each higher row into it — a
 * cell's best total is its value plus the smaller of the two totals directly below.
 * `line` indexes CODE.
 */
export function triangleSteps(triangle: number[][]): TriangleStep[] {
  const steps: TriangleStep[] = [];
  const dp = [...triangle[triangle.length - 1]];
  let settledFrom = triangle.length - 1;

  const snap = (o: Partial<TriangleData>): TriangleData => ({ triangle: triangle.map((r) => [...r]), dp: [...dp], cur: null, chosen: null, settledFrom, answer: null, ...o });
  const push = (line: number, explanation: string, data: TriangleData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Start with the bottom row as the running totals.", snap({}));

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const belowLeft = dp[j];
      const belowRight = dp[j + 1];
      const chosen = belowLeft <= belowRight ? j : j + 1;
      const best = Math.min(belowLeft, belowRight);
      dp[j] = triangle[i][j] + best;
      push(5, `(${i}, ${j}) = ${triangle[i][j]} + min(${belowLeft}, ${belowRight}) = ${dp[j]}.`, snap({ cur: [i, j], chosen }));
    }
    settledFrom = i;
  }

  push(8, `Minimum path sum from the top: ${dp[0]}.`, snap({ cur: [0, 0], answer: dp[0] }));
  return steps;
}
