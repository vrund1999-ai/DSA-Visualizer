import { describe, it, expect } from "vitest";
import { consecutiveSteps } from "./algorithm";
import { CODE } from "./code";

const best = (nums: number[]) => {
  const steps = consecutiveSteps(nums);
  return steps[steps.length - 1].data.best;
};

describe("consecutiveSteps", () => {
  it("finds the longest consecutive run", () => {
    expect(best([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(best([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it("handles empty and duplicate-heavy inputs", () => {
    expect(best([])).toBe(0);
    expect(best([1, 1, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of consecutiveSteps([100, 4, 200, 1, 3, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
