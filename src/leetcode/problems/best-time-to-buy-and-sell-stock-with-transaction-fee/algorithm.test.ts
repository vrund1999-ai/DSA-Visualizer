import { describe, it, expect } from "vitest";
import { stockFeeSteps } from "./algorithm";
import { CODE } from "./code";

const maxProfit = (prices: number[], fee: number) => {
  const steps = stockFeeSteps(prices, fee);
  return steps[steps.length - 1].data.answer;
};

describe("stockFeeSteps", () => {
  it("maximizes profit net of fees", () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
    expect(maxProfit([1, 2, 3, 4, 5], 0)).toBe(4);
    expect(maxProfit([5], 1)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stockFeeSteps([1, 3, 2, 8, 4, 9], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
