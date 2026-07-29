import { describe, it, expect } from "vitest";
import { ticketsSteps } from "./algorithm";
import { CODE } from "./code";

const minCost = (days: number[], costs: number[]) => {
  const steps = ticketsSteps(days, costs);
  return steps[steps.length - 1].data.answer;
};

describe("ticketsSteps", () => {
  it("computes the minimum ticket cost", () => {
    expect(minCost([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11);
    expect(minCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])).toBe(17);
    expect(minCost([1], [5, 20, 100])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ticketsSteps([1, 4, 6, 7, 8, 20], [2, 7, 15])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
