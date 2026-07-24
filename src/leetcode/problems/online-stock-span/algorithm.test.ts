import { describe, it, expect } from "vitest";
import { stockSpanSteps } from "./algorithm";
import { CODE } from "./code";

const spans = (prices: number[]) => {
  const steps = stockSpanSteps(prices);
  return steps[steps.length - 1].data.spans;
};

describe("stockSpanSteps", () => {
  it("computes the stock span per day", () => {
    expect(spans([100, 80, 60, 70, 60, 75, 85])).toEqual([1, 1, 1, 2, 1, 4, 6]);
    expect(spans([10, 20, 30])).toEqual([1, 2, 3]);
    expect(spans([30, 20, 10])).toEqual([1, 1, 1]);
    expect(spans([5])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stockSpanSteps([100, 80, 60, 70, 60, 75, 85])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
