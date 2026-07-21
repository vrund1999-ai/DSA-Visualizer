import type { Highlight, Step } from "@/core/types";

export interface MinPathData {
  dp: number[][];
  r: number | null;
  c: number | null;
}

export type MinPathStep = Step<MinPathData>;

/**
 * DP grid: the cheapest path to a cell is its own cost plus the cheaper of the
 * cells directly above and to the left (the only ways in when moving right/down).
 * `line` indexes CODE.
 */
export function minPathSteps(grid: number[][]): MinPathStep[] {
  const m = grid.length;
  const n = m ? grid[0].length : 0;
  const dp = grid.map((row) => [...row]);
  const steps: MinPathStep[] = [];

  const snap = (r: number | null, c: number | null, line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data: { dp: dp.map((row) => [...row]), r, c }, highlights });
  };

  snap(0, 0, 2, "dp holds the minimum cost to reach each cell; start at the top-left.", [{ ref: "0,0", role: "sorted" }]);

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 && c === 0) continue;
      const up = r ? dp[r - 1][c] : Infinity;
      const left = c ? dp[r][c - 1] : Infinity;
      const add = Math.min(up, left);
      dp[r][c] += add;
      const hl: Highlight[] = [{ ref: `${r},${c}`, role: "target" }];
      if (r) hl.push({ ref: `${r - 1},${c}`, role: up <= left ? "current" : "compared" });
      if (c) hl.push({ ref: `${r},${c - 1}`, role: left < up ? "current" : "compared" });
      snap(r, c, 8, `dp[${r}][${c}] = cost + min(up ${up === Infinity ? "∞" : up}, left ${left === Infinity ? "∞" : left}) = ${dp[r][c]}.`, hl);
    }
  }

  snap(m - 1, n - 1, 10, `Minimum path sum is ${dp[m - 1][n - 1]}.`, [{ ref: `${m - 1},${n - 1}`, role: "target" }]);
  return steps;
}
