import { describe, it, expect } from "vitest";
import { peakIndexSteps } from "./algorithm";
import { CODE } from "./code";

const peak = (arr: number[]) => {
  const steps = peakIndexSteps(arr);
  return steps[steps.length - 1].data.peak;
};

describe("peakIndexSteps", () => {
  it("locates the peak index", () => {
    expect(peak([0, 1, 0])).toBe(1);
    expect(peak([0, 2, 4, 6, 5, 3, 1])).toBe(3);
    expect(peak([3, 4, 5, 1])).toBe(2);
    expect(peak([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of peakIndexSteps([0, 2, 4, 6, 5, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
