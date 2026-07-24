import { describe, it, expect } from "vitest";
import { medianSteps } from "./algorithm";
import { CODE } from "./code";

const median = (a: number[], b: number[]) => {
  const steps = medianSteps({ a, b });
  return steps[steps.length - 1].data.answer;
};

describe("medianSteps", () => {
  it("computes the median of two sorted arrays", () => {
    expect(median([1, 3], [2])).toBe(2);
    expect(median([1, 2], [3, 4])).toBe(2.5);
    expect(median([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25])).toBe(11);
    expect(median([], [1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of medianSteps({ a: [1, 3, 8, 9, 15], b: [7, 11, 18, 19, 21, 25] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
