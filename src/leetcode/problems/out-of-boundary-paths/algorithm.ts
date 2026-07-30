import type { Step } from "@/core/types";

export interface OutPathsData {
  m: number;
  n: number;
  maxMove: number;
  /** ball-count per cell after `move` moves */
  dp: number[][];
  move: number;
  count: number;
  answer: number | null;
}

export type OutPathsStep = Step<OutPathsData>;

const MOD = 1e9 + 7;
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * dp[r][c] counts how many move-sequences leave the ball on cell (r,c). Each move spreads every count to
 * its four neighbors; a neighbor outside the grid contributes that many completed out-of-boundary paths.
 * Summing those exits over all moves is the answer. `line` indexes CODE.
 */
export function outPathsSteps(m: number, n: number, maxMove: number, sr: number, sc: number): OutPathsStep[] {
  const steps: OutPathsStep[] = [];
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[sr][sc] = 1;
  let count = 0;

  const snap = (o: Partial<OutPathsData>): OutPathsData => ({ m, n, maxMove, dp: dp.map((r) => [...r]), move: 0, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<OutPathsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Ball starts at (${sr}, ${sc}); count paths that fall off within ${maxMove} move(s).`, { move: 0 });

  for (let move = 1; move <= maxMove; move++) {
    const next = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (!dp[r][c]) continue;
        for (const [dr, dc] of DIRS) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr < 0 || nc < 0 || nr >= m || nc >= n) count = (count + dp[r][c]) % MOD;
          else next[nr][nc] = (next[nr][nc] + dp[r][c]) % MOD;
        }
      }
    }
    dp = next;
    push(17, `After ${move} move(s): ${count} path(s) have exited so far.`, { move });
  }

  push(19, `Total out-of-boundary paths: ${count}.`, { move: maxMove, answer: count });
  return steps;
}
