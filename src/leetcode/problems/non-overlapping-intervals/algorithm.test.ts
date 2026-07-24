import { describe, it, expect } from "vitest";
import { nonOverlapSteps } from "./algorithm";
import { CODE } from "./code";

const erase = (intervals: [number, number][]) => {
  const steps = nonOverlapSteps(intervals);
  return steps[steps.length - 1].data.answer;
};

describe("nonOverlapSteps", () => {
  it("counts minimum removals", () => {
    expect(erase([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
    expect(erase([[1, 2], [1, 2], [1, 2]])).toBe(2);
    expect(erase([[1, 2], [2, 3]])).toBe(0);
    expect(erase([[1, 100], [11, 22], [1, 11], [2, 12]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nonOverlapSteps([[1, 2], [2, 3], [3, 4], [1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
