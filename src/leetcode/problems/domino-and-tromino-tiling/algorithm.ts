import type { Step } from "@/core/types";

export interface TilingData {
  n: number;
  dp: number[];
  /** column length just filled */
  i: number | null;
  answer: number | null;
}

export type TilingStep = Step<TilingData>;

const MOD = 1e9 + 7;

/**
 * Filling a 2×n board column by column, each new fully-tiled width is reached either by adding to the
 * previous width two ways (vertical domino / two horizontals) or by extending a width-3-earlier state
 * with an L-tromino pair, giving dp[i] = 2·dp[i−1] + dp[i−3]. `line` indexes CODE.
 */
export function tilingSteps(n: number): TilingStep[] {
  const steps: TilingStep[] = [];
  const size = Math.max(n, 2);
  const dp = new Array(size + 1).fill(0);

  const snap = (o: Partial<TilingData>): TilingData => ({ n, dp: [...dp], i: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TilingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (n <= 2) {
    for (let k = 0; k <= size; k++) dp[k] = k;
    push(2, `n = ${n} ≤ 2 → ${n} tiling(s).`, { answer: n, i: n });
    return steps;
  }

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  push(4, "Base cases: dp[0]=1, dp[1]=1, dp[2]=2.", { i: 2 });

  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    push(6, `dp[${i}] = 2·dp[${i - 1}] + dp[${i - 3}] = 2·${dp[i - 1]} + ${dp[i - 3]} = ${dp[i]}.`, { i });
  }

  push(7, `Number of tilings of a 2×${n} board: ${dp[n]}.`, { answer: dp[n], i: n });
  return steps;
}
