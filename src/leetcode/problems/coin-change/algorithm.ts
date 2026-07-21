import type { Highlight, Step } from "@/core/types";

export interface CoinChangeInput {
  coins: number[];
  amount: number;
}

export interface CoinChangeData {
  coins: number[];
  dp: (number | string)[];
  a: number | null;
  from: number | null;
  coin: number | null;
}

export type CoinChangeStep = Step<CoinChangeData>;

/**
 * Bottom-up DP: dp[a] is the fewest coins summing to a. Each amount tries every
 * coin, reusing the already-solved smaller amount dp[a − coin]. `line` indexes
 * CODE.
 */
export function coinChangeSteps(input: CoinChangeInput): CoinChangeStep[] {
  const { coins, amount } = input;
  const steps: CoinChangeStep[] = [];
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  const display = () => dp.map((v) => (v === Infinity ? "∞" : v));
  const snap = (o: Partial<CoinChangeData>): CoinChangeData => ({
    coins: [...coins],
    dp: display(),
    a: null,
    from: null,
    coin: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: CoinChangeData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, "dp[a] = fewest coins to make a. Base case dp[0] = 0.", snap({}), [{ ref: 0, role: "sorted" }]);

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a) {
        const cand = dp[a - coin] + 1;
        const improved = cand < dp[a];
        if (improved) dp[a] = cand;
        push(
          6,
          improved
            ? `Amount ${a}, coin ${coin}: dp[${a - coin}] + 1 = ${cand === Infinity ? "∞" : cand} → dp[${a}] = ${dp[a] === Infinity ? "∞" : dp[a]}.`
            : `Amount ${a}, coin ${coin}: dp[${a - coin}] + 1 doesn't beat dp[${a}].`,
          snap({ a, from: a - coin, coin }),
          [
            { ref: a, role: improved ? "target" : "current" },
            { ref: a - coin, role: "compared" },
          ],
        );
      }
    }
  }

  const answer = dp[amount] === Infinity ? -1 : dp[amount];
  push(7, answer === -1 ? `Amount ${amount} is unreachable — return -1.` : `Fewest coins for ${amount} is ${answer}.`, snap({ a: amount }), [
    { ref: amount, role: "target" },
  ]);
  return steps;
}
