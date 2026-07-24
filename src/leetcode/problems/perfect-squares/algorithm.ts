import type { Step } from "@/core/types";

export interface PerfectSquaresData {
  n: number;
  dp: number[];
  /** current target i being solved */
  cur: number | null;
  /** the square j*j being tried, and the dp cell it reads */
  square: number | null;
  from: number | null;
  answer: number | null;
}

export type PerfectSquaresStep = Step<PerfectSquaresData>;

const INF = Number.POSITIVE_INFINITY;

/**
 * dp[i] = fewest perfect squares summing to i. Each i tries every square j² ≤ i and
 * takes 1 + dp[i − j²]. `line` indexes CODE.
 */
export function perfectSquaresSteps(n: number): PerfectSquaresStep[] {
  const steps: PerfectSquaresStep[] = [];
  const dp = new Array(n + 1).fill(INF);
  dp[0] = 0;

  const snap = (o: Partial<PerfectSquaresData>): PerfectSquaresData => ({ n, dp: [...dp], cur: null, square: null, from: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: PerfectSquaresData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "dp[i] = fewest perfect squares summing to i; dp[0] = 0.", snap({}));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      const cand = dp[i - j * j] + 1;
      if (cand < dp[i]) dp[i] = cand;
      push(5, `dp[${i}] via ${j}² : 1 + dp[${i - j * j}] = ${cand} → dp[${i}] = ${dp[i]}.`, snap({ cur: i, square: j * j, from: i - j * j }));
    }
  }

  push(8, `${n} needs at least ${dp[n]} perfect square(s).`, snap({ cur: n, answer: dp[n] }));
  return steps;
}
