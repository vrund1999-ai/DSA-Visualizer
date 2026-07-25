import type { Step } from "@/core/types";

export interface LCSData {
  a: string;
  b: string;
  dp: number[][];
  filled: boolean[][];
  cur: [number, number] | null;
  /** true if the current cell came from a character match (diagonal) */
  match: boolean;
  answer: number | null;
}

export type LCSStep = Step<LCSData>;

/**
 * Classic 2-D LCS: dp[i][j] is the LCS length of the first i chars of a and first j
 * of b. Matching characters extend the diagonal by 1; otherwise carry the better of
 * the top/left neighbour. `line` indexes CODE.
 */
export function lcsSteps(a: string, b: string): LCSStep[] {
  const steps: LCSStep[] = [];
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  const filled = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
  for (let i = 0; i <= m; i++) filled[i][0] = true;
  for (let j = 0; j <= n; j++) filled[0][j] = true;

  const snap = (o: Partial<LCSData>): LCSData => ({ a, b, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, match: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: LCSData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "dp[i][j] = LCS length of a[0..i) and b[0..j).", snap({}));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const match = a[i - 1] === b[j - 1];
      dp[i][j] = match ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      filled[i][j] = true;
      push(match ? 6 : 8, `'${a[i - 1]}' vs '${b[j - 1]}': ${match ? `match → ${dp[i][j]}` : `no match → max(${dp[i - 1][j]}, ${dp[i][j - 1]}) = ${dp[i][j]}`}.`, snap({ cur: [i, j], match }));
    }
  }

  push(11, `Longest common subsequence length: ${dp[m][n]}.`, snap({ cur: [m, n], answer: dp[m][n] }));
  return steps;
}
