import type { Step } from "@/core/types";

export interface CoinChangeIIData {
  amount: number;
  coins: number[];
  dp: number[];
  /** coin whose loop is active */
  coin: number | null;
  /** dp index being updated */
  a: number | null;
  answer: number | null;
}

export type CoinChangeIIStep = Step<CoinChangeIIData>;

/**
 * dp[a] counts the ways to make amount a. Processing coins in an outer loop (and amounts inner)
 * means every combination is counted once regardless of order: adding a coin extends each way of
 * making a − coin. `line` indexes CODE.
 */
export function coinChangeIISteps(amount: number, coins: number[]): CoinChangeIIStep[] {
  const steps: CoinChangeIIStep[] = [];
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  const snap = (o: Partial<CoinChangeIIData>): CoinChangeIIData => ({ amount, coins, dp: [...dp], coin: null, a: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CoinChangeIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[a] = number of ways to make amount a; dp[0] = 1 (empty selection).");

  for (const coin of coins) {
    push(3, `Introduce coin ${coin}; update amounts it can contribute to.`, { coin });
    for (let a = coin; a <= amount; a++) {
      dp[a] += dp[a - coin];
      push(5, `dp[${a}] += dp[${a - coin}] (ways using a ${coin}) → dp[${a}] = ${dp[a]}.`, { coin, a });
    }
  }

  push(8, `Ways to make ${amount}: ${dp[amount]}.`, { answer: dp[amount] });
  return steps;
}
