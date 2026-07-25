import { describe, it, expect } from "vitest";
import { cooldownSteps } from "./algorithm";
import { CODE } from "./code";

const profit = (prices: number[]) => {
  const steps = cooldownSteps(prices);
  return steps[steps.length - 1].data.answer;
};

describe("cooldownSteps", () => {
  it("maximizes profit with a one-day cooldown", () => {
    expect(profit([1, 2, 3, 0, 2])).toBe(3);
    expect(profit([1])).toBe(0);
    expect(profit([6, 1, 3, 2, 4, 7])).toBe(6);
    expect(profit([2, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cooldownSteps([1, 2, 3, 0, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
