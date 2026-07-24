import { describe, it, expect } from "vitest";
import { histogramSteps } from "./algorithm";
import { CODE } from "./code";

const best = (heights: number[]) => {
  const steps = histogramSteps(heights);
  return steps[steps.length - 1].data.best;
};

describe("histogramSteps", () => {
  it("finds the largest rectangle area", () => {
    expect(best([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(best([2, 4])).toBe(4);
    expect(best([1, 1, 1])).toBe(3);
    expect(best([5])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of histogramSteps([2, 1, 5, 6, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
