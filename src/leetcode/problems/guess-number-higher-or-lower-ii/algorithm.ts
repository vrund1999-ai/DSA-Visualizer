import type { Step } from "@/core/types";

export interface GuessNumberData {
  n: number;
  /** dp[i][j] for 1..n (0-based storage padded) */
  dp: number[][];
  /** current interval [i, j] being filled */
  cell: [number, number] | null;
  /** current guess k inside the interval */
  guess: number | null;
  answer: number | null;
}

export type GuessNumberStep = Step<GuessNumberData>;

/**
 * Guess Number Higher or Lower II: minimize the worst-case money to guarantee a win in [1..n]. Guessing k in
 * an interval costs k plus the worse of the two resulting sub-intervals, so dp[i][j] = min over k of
 * (k + max(dp[i][k−1], dp[k+1][j])). Intervals are filled by increasing length. `line` indexes CODE.
 */
export function guessNumberSteps(n: number): GuessNumberStep[] {
  const steps: GuessNumberStep[] = [];
  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

  const snap = (o: Partial<GuessNumberData>): GuessNumberData => ({
    n,
    dp: dp.map((r) => [...r]),
    cell: null,
    guess: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<GuessNumberData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[i][j] = min worst-case cost to guarantee a win in [i, j]. Single numbers cost 0.`);

  for (let len = 2; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      let best = Infinity;
      let bestK = i;
      for (let k = i; k <= j; k++) {
        const cost = k + Math.max(dp[i][k - 1], dp[k + 1][j]);
        if (cost < best) {
          best = cost;
          bestK = k;
        }
      }
      dp[i][j] = best;
      push(10, `[${i}, ${j}]: best first guess ${bestK} → cost ${best}.`, { cell: [i, j], guess: bestK });
    }
  }

  push(14, `Minimum guaranteed cost for 1..${n} = ${dp[1][n]}.`, { answer: dp[1][n] });
  return steps;
}
