import type { Step } from "@/core/types";

export interface Game21Data {
  n: number;
  k: number;
  maxPts: number;
  /** dp[i] = probability of ending on exactly score i */
  dp: number[];
  i: number | null;
  window: number;
  result: number;
  answer: number | null;
}

export type Game21Step = Step<Game21Data>;

/**
 * dp[i] is the probability of reaching score i, which equals the average of the previous maxPts
 * probabilities (each draw is equally likely). A sliding window sum of the still-drawing states (< k)
 * computes it in O(1); scores in [k, n] contribute to the answer. `line` indexes CODE.
 */
export function game21Steps(n: number, k: number, maxPts: number): Game21Step[] {
  const steps: Game21Step[] = [];
  const size = Math.max(n, 0);
  const dp = new Array(size + 1).fill(0);

  const snap = (o: Partial<Game21Data>): Game21Data => ({ n, k, maxPts, dp: [...dp], i: null, window: 0, result: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<Game21Data> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (k === 0 || n >= k + maxPts - 1) {
    dp[0] = 1;
    push(1, `k=${k}, n=${n}: guaranteed to finish ≤ n → probability 1.`, { answer: 1 });
    return steps;
  }

  dp[0] = 1;
  let window = 1;
  let result = 0;
  push(4, `dp[0]=1; draw 1…${maxPts}, stop at ${k}. Track a window sum of "still drawing" states.`, { i: 0, window });

  for (let i = 1; i <= n; i++) {
    dp[i] = window / maxPts;
    if (i < k) window += dp[i];
    else result += dp[i];
    if (i - maxPts >= 0 && i - maxPts < k) window -= dp[i - maxPts];
    push(i < k ? 7 : 8, `dp[${i}] = ${dp[i].toFixed(4)}${i < k ? " (still drawing)" : " (stopped, in range)"}.`, { i, window, result });
  }

  push(12, `Probability score ≤ ${n}: ${result.toFixed(5)}.`, { result, answer: result });
  return steps;
}
