import { describe, it, expect } from "vitest";
import { coinChangeSteps, type CoinChangeInput } from "./algorithm";
import { COIN_CHANGE_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];

const refMinCoins = ({ coins, amount }: CoinChangeInput): number | null => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const c of coins)
    for (let a = c; a <= amount; a++) dp[a] = Math.min(dp[a], dp[a - c] + 1);
  return dp[amount] === Infinity ? null : dp[amount];
};

describe("coinChangeSteps", () => {
  it("computes the minimum number of coins", () => {
    const input: CoinChangeInput = { coins: [1, 3, 4], amount: 6 };
    const steps = coinChangeSteps(input);
    expect(last(steps).data.cells[0][6]).toBe(refMinCoins(input)); // 2 (3+3)
  });

  it("matches the reference solver across amounts and coin sets", () => {
    const sets = [[1, 3, 4], [1, 2, 5], [2, 3, 7]];
    for (const coins of sets) {
      for (let amount = 1; amount <= 12; amount++) {
        const answer = last(coinChangeSteps({ coins, amount })).data.cells[0][amount];
        expect(answer).toBe(refMinCoins({ coins, amount }));
      }
    }
  });

  it("marks an unreachable amount as null", () => {
    const steps = coinChangeSteps({ coins: [2], amount: 3 });
    expect(last(steps).data.cells[0][3]).toBeNull();
    expect(last(steps).explanation).toMatch(/cannot be made/i);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of coinChangeSteps({ coins: [1, 3, 4], amount: 9 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(COIN_CHANGE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const input: CoinChangeInput = { coins: [1, 3, 4], amount: 9 };
    expect(coinChangeSteps(input)).toEqual(coinChangeSteps(input));
  });
});
