import { describe, it, expect } from "vitest";
import { stockIIISteps } from "./algorithm";
import { CODE } from "./code";

const profit = (prices: number[]) => {
  const steps = stockIIISteps(prices);
  return steps[steps.length - 1].data.answer;
};

describe("stockIIISteps", () => {
  it("maximizes profit over at most two transactions", () => {
    expect(profit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
    expect(profit([1, 2, 3, 4, 5])).toBe(4);
    expect(profit([7, 6, 4, 3, 1])).toBe(0);
    expect(profit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stockIIISteps([3, 3, 5, 0, 0, 3, 1, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
