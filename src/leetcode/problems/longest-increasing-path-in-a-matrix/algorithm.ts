import type { Step } from "@/core/types";

export interface LongestPathData {
  matrix: number[][];
  /** memo[r][c] = longest increasing path starting there (0 = not computed) */
  memo: number[][];
  cur: [number, number] | null;
  /** the longest path cells, once found */
  path: [number, number][];
  answer: number | null;
}

export type LongestPathStep = Step<LongestPathData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * memo[r][c] is the longest strictly-increasing path starting at that cell: one plus the best among
 * higher neighbors. Because moves always go up in value there are no cycles, so a memoized DFS visits
 * each cell once. The overall answer is the largest memo value. `line` indexes CODE.
 */
export function longestPathSteps(matrix: number[][]): LongestPathStep[] {
  const steps: LongestPathStep[] = [];
  const R = matrix.length;
  const C = matrix[0].length;
  const memo = Array.from({ length: R }, () => new Array(C).fill(0));

  const snap = (o: Partial<LongestPathData>): LongestPathData => ({ matrix, memo: memo.map((r) => [...r]), cur: null, path: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LongestPathData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "memo[r][c] = longest increasing path starting at (r,c); fill via memoized DFS.");

  function dfs(r: number, c: number): number {
    if (memo[r][c]) return memo[r][c];
    let best = 1;
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < R && nc < C && matrix[nr][nc] > matrix[r][c]) best = Math.max(best, 1 + dfs(nr, nc));
    }
    memo[r][c] = best;
    push(9, `Cell (${r},${c})=${matrix[r][c]}: longest path from here is ${best}.`, { cur: [r, c] });
    return best;
  }

  let ans = 0;
  let start: [number, number] = [0, 0];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) { const v = dfs(r, c); if (v > ans) { ans = v; start = [r, c]; } }

  // reconstruct one longest path
  const path: [number, number][] = [];
  let [cr, cc] = start;
  path.push([cr, cc]);
  while (memo[cr][cc] > 1) {
    for (const [dr, dc] of DIRS) {
      const nr = cr + dr;
      const nc = cc + dc;
      if (nr >= 0 && nc >= 0 && nr < R && nc < C && matrix[nr][nc] > matrix[cr][cc] && memo[nr][nc] === memo[cr][cc] - 1) {
        cr = nr;
        cc = nc;
        path.push([cr, cc]);
        break;
      }
    }
  }

  push(13, `Longest increasing path length: ${ans}.`, { path, answer: ans });
  return steps;
}
