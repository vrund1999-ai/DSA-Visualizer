import { describe, it, expect } from "vitest";
import { jobSchedulingSteps } from "./algorithm";
import { CODE } from "./code";

const maxProfit = (s: number[], e: number[], p: number[]) => {
  const steps = jobSchedulingSteps(s, e, p);
  return steps[steps.length - 1].data.answer;
};

describe("jobSchedulingSteps", () => {
  it("maximizes profit over non-overlapping jobs", () => {
    expect(maxProfit([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])).toBe(120);
    expect(maxProfit([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])).toBe(150);
    expect(maxProfit([1, 1, 1], [2, 3, 4], [5, 6, 4])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of jobSchedulingSteps([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
