import { describe, it, expect } from "vitest";
import { coinChangeSteps } from "./algorithm";
import { CODE } from "./code";

const change = (coins: number[], amount: number) => {
  const steps = coinChangeSteps({ coins, amount });
  const dp = steps[steps.length - 1].data.dp[amount];
  return dp === "∞" ? -1 : (dp as number);
};

describe("coinChangeSteps", () => {
  it("finds the fewest coins", () => {
    expect(change([1, 2, 5], 11)).toBe(3);
    expect(change([1, 2, 5], 6)).toBe(2);
    expect(change([2], 3)).toBe(-1);
    expect(change([1], 0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of coinChangeSteps({ coins: [1, 2, 5], amount: 6 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
