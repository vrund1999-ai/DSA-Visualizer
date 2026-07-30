import type { Step } from "@/core/types";

export interface SecretData {
  n: number;
  delay: number;
  forget: number;
  /** dp[i] = people who first learn the secret on day i */
  dp: number[];
  i: number | null;
  share: number;
  phase: "fill" | "count";
  known: number;
  answer: number | null;
}

export type SecretStep = Step<SecretData>;

const MOD = 1e9 + 7;

/**
 * dp[i] counts people who first learn the secret on day i: on that day the sharers are everyone who
 * learned between i−forget+1 and i−delay, a sliding window maintained incrementally. People still aware
 * on day n are those who learned within the last `forget` days. `line` indexes CODE.
 */
export function secretSteps(n: number, delay: number, forget: number): SecretStep[] {
  const steps: SecretStep[] = [];
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  let share = 0;

  const snap = (o: Partial<SecretData>): SecretData => ({ n, delay, forget, dp: [...dp], i: null, share, phase: "fill", known: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SecretData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Day 1: one person learns. Sharing starts after ${delay} days, forgetting after ${forget}.`, { i: 1, phase: "fill" });

  for (let i = 2; i <= n; i++) {
    if (i - delay >= 1) share += dp[i - delay];
    if (i - forget >= 1) share -= dp[i - forget];
    dp[i] = ((share % MOD) + MOD) % MOD;
    push(8, `Day ${i}: ${dp[i]} new learner(s) from ${share} sharer(s).`, { i, phase: "fill" });
  }

  let known = 0;
  for (let i = n - forget + 1; i <= n; i++) {
    if (i >= 1) {
      known = (known + dp[i]) % MOD;
      push(12, `Day ${i} learners still remember → running total ${known}.`, { i, phase: "count", known });
    }
  }

  push(13, `People aware on day ${n}: ${known}.`, { phase: "count", known, answer: known });
  return steps;
}
