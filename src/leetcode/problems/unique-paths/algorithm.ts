import type { Highlight, Step } from "@/core/types";

export interface UniquePathsInput {
  m: number;
  n: number;
}

export interface UniquePathsData {
  dp: number[][];
  r: number | null;
  c: number | null;
}

export type UniquePathsStep = Step<UniquePathsData>;

/**
 * DP grid: each cell can only be reached from above or from the left, so the
 * number of paths to it is the sum of those two neighbours. Edges have exactly
 * one path. `line` indexes CODE.
 */
export function uniquePathsSteps(input: UniquePathsInput): UniquePathsStep[] {
  const { m, n } = input;
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));
  const steps: UniquePathsStep[] = [];

  const snap = (r: number | null, c: number | null, line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data: { dp: dp.map((row) => [...row]), r, c }, highlights });
  };

  snap(null, null, 1, "The top row and left column each have exactly one path.", []);

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
      snap(r, c, 4, `dp[${r}][${c}] = above ${dp[r - 1][c]} + left ${dp[r][c - 1]} = ${dp[r][c]}.`, [
        { ref: `${r - 1},${c}`, role: "compared" },
        { ref: `${r},${c - 1}`, role: "compared" },
        { ref: `${r},${c}`, role: "target" },
      ]);
    }
  }

  snap(m - 1, n - 1, 5, `There are ${dp[m - 1][n - 1]} unique paths to the bottom-right.`, [
    { ref: `${m - 1},${n - 1}`, role: "target" },
  ]);
  return steps;
}
