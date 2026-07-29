import type { Step } from "@/core/types";

export interface IntBreakData {
  n: number;
  dp: number[];
  /** value i being computed */
  i: number | null;
  /** first part j giving the current best */
  bestJ: number | null;
  answer: number | null;
}

export type IntBreakStep = Step<IntBreakData>;

/**
 * dp[i] is the largest product from breaking i into at least two positive parts. For each first part j
 * we either stop (j·(i−j)) or break the remainder further (j·dp[i−j]); the best over all j fills dp
 * bottom-up. `line` indexes CODE.
 */
export function intBreakSteps(n: number): IntBreakStep[] {
  const steps: IntBreakStep[] = [];
  const dp = new Array(n + 1).fill(1);

  const snap = (o: Partial<IntBreakData>): IntBreakData => ({ n, dp: [...dp], i: null, bestJ: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<IntBreakData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "dp[i] = max product of breaking i into ≥ 2 positive parts.");

  for (let i = 2; i <= n; i++) {
    let bestJ = 1;
    for (let j = 1; j < i; j++) {
      const cand = Math.max(j * (i - j), j * dp[i - j]);
      if (cand > dp[i]) { dp[i] = cand; bestJ = j; }
    }
    push(6, `dp[${i}] = ${dp[i]} (best split first part ${bestJ}).`, { i, bestJ });
  }

  push(9, `Maximum product breaking ${n}: ${dp[n]}.`, { answer: dp[n] });
  return steps;
}
