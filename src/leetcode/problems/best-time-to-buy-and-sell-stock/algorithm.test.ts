import { describe, it, expect } from "vitest";
import { stockSteps } from "./algorithm";
import { CODE } from "./code";

describe("stockSteps", () => {
  it("finds the max profit from a single trade", () => {
    const steps = stockSteps([7, 1, 5, 3, 6, 4]);
    const last = steps[steps.length - 1];
    expect(last.data.maxProfit).toBe(5);
    expect(last.data.best).toEqual({ buy: 1, sell: 4 });
  });

  it("returns 0 profit when prices only fall", () => {
    const steps = stockSteps([7, 6, 4, 3, 1]);
    const last = steps[steps.length - 1];
    expect(last.data.maxProfit).toBe(0);
    expect(last.data.best).toBeNull();
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stockSteps([7, 1, 5, 3, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
