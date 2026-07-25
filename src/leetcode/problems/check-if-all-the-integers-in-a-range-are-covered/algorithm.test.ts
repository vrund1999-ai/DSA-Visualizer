import { describe, it, expect } from "vitest";
import { coveredSteps } from "./algorithm";
import { CODE } from "./code";

const isCovered = (ranges: [number, number][], left: number, right: number) => {
  const steps = coveredSteps(ranges, left, right);
  return steps[steps.length - 1].data.answer;
};

describe("coveredSteps", () => {
  it("checks full coverage", () => {
    expect(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5)).toBe(true);
    expect(isCovered([[1, 10], [10, 20]], 21, 21)).toBe(false);
    expect(isCovered([[1, 2], [5, 6]], 2, 5)).toBe(false);
    expect(isCovered([[1, 50]], 1, 50)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of coveredSteps([[1, 2], [3, 4], [5, 6]], 2, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
