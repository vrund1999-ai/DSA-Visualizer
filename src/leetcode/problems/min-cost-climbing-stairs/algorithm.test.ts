import { describe, it, expect } from "vitest";
import { minCostSteps } from "./algorithm";
import { CODE } from "./code";

const minCost = (cost: number[]) => {
  const steps = minCostSteps(cost);
  const dp = steps[steps.length - 1].data.dp;
  return dp[cost.length];
};

describe("minCostSteps", () => {
  it("finds the minimum climbing cost", () => {
    expect(minCost([10, 15, 20])).toBe(15);
    expect(minCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minCostSteps([10, 15, 20])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
