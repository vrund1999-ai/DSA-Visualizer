import { describe, it, expect } from "vitest";
import { stockIISteps } from "./algorithm";
import { CODE } from "./code";

const profit = (prices: number[]) => {
  const steps = stockIISteps(prices);
  return steps[steps.length - 1].data.profit;
};

describe("stockIISteps", () => {
  it("sums all upward moves", () => {
    expect(profit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(profit([1, 2, 3, 4, 5])).toBe(4);
    expect(profit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stockIISteps([7, 1, 5, 3, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
