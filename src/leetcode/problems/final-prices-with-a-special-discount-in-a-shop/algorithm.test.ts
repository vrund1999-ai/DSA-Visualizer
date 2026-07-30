import { describe, it, expect } from "vitest";
import { finalPricesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (prices: number[]) => {
  const steps = finalPricesSteps(prices);
  return steps[steps.length - 1].data.res;
};

describe("finalPricesSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([8, 4, 6, 2, 3])).toEqual([4, 2, 4, 2, 3]);
    expect(solve([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(solve([10, 1, 1, 6])).toEqual([9, 0, 1, 6]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of finalPricesSteps([8, 4, 6, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
