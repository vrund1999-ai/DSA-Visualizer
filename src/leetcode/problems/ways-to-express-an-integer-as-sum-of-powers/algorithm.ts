import type { Step } from "@/core/types";

export interface SumPowersData {
  n: number;
  x: number;
  /** the distinct powers 1^x, 2^x, … ≤ n */
  powers: number[];
  /** index (into powers) just folded into dp */
  activePower: number | null;
  dp: number[];
  answer: number | null;
}

export type SumPowersStep = Step<SumPowersData>;

const MOD = 1_000_000_007;

/**
 * Count the ways to write n as a sum of distinct x-th powers. This is a 0/1-knapsack count over the items
 * 1^x, 2^x, …: dp[t] is the number of ways to reach t, and each power is folded in once by iterating t
 * downward. The answer is dp[n] (mod 1e9+7). `line` indexes CODE.
 */
export function sumPowersSteps(n: number, x: number): SumPowersStep[] {
  const steps: SumPowersStep[] = [];
  const powers: number[] = [];
  for (let base = 1; base ** x <= n; base++) powers.push(base ** x);

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  const snap = (o: Partial<SumPowersData>): SumPowersData => ({
    n,
    x,
    powers,
    activePower: null,
    dp: [...dp],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SumPowersData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Powers ≤ ${n}: [${powers.join(", ")}]. dp[0] = 1 (the empty sum).`);

  for (let i = 0; i < powers.length; i++) {
    const p = powers[i];
    for (let t = n; t >= p; t--) dp[t] = (dp[t] + dp[t - p]) % MOD;
    push(7, `Fold in power ${p}: dp[t] += dp[t − ${p}] for t = ${n}…${p}.`, { activePower: i });
  }

  push(10, `dp[${n}] = ${dp[n]} way(s).`, { answer: dp[n] });
  return steps;
}
