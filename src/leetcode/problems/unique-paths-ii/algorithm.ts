import type { Step } from "@/core/types";

export interface UniquePathsData {
  grid: number[][];
  dp: number[][];
  filled: boolean[][];
  cur: [number, number] | null;
  from: [number, number][];
}

export type UniquePathsStep = Step<UniquePathsData>;

/**
 * Grid DP: each free cell's path count is the sum of the cell above and the cell to
 * the left; obstacles (grid === 1) contribute 0. `line` indexes CODE.
 */
export function uniquePathsSteps(grid: number[][]): UniquePathsStep[] {
  const steps: UniquePathsStep[] = [];
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  const filled = Array.from({ length: m }, () => new Array(n).fill(false));

  const snap = (o: Partial<UniquePathsData>): UniquePathsData => ({
    grid: grid.map((r) => [...r]),
    dp: dp.map((r) => [...r]),
    filled: filled.map((r) => [...r]),
    cur: null,
    from: [],
    ...o,
  });
  const push = (line: number, explanation: string, data: UniquePathsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "dp[i][j] = number of obstacle-free paths reaching cell (i, j).", snap({}));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
        filled[i][j] = true;
        push(6, `(${i}, ${j}) is an obstacle → 0 paths.`, snap({ cur: [i, j] }));
        continue;
      }
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        filled[i][j] = true;
        push(7, "Start cell has exactly 1 path.", snap({ cur: [i, j] }));
        continue;
      }
      const up = i > 0 ? dp[i - 1][j] : 0;
      const left = j > 0 ? dp[i][j - 1] : 0;
      dp[i][j] = up + left;
      filled[i][j] = true;
      const from: [number, number][] = [];
      if (i > 0) from.push([i - 1, j]);
      if (j > 0) from.push([i, j - 1]);
      push(10, `(${i}, ${j}) = up ${up} + left ${left} = ${dp[i][j]}.`, snap({ cur: [i, j], from }));
    }
  }

  push(13, `Total unique paths: ${dp[m - 1][n - 1]}.`, snap({ cur: [m - 1, n - 1] }));
  return steps;
}
