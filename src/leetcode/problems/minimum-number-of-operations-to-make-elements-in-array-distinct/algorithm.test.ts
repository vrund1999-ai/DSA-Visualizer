import { describe, it, expect } from "vitest";
import { distinctSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = distinctSteps(nums);
  return steps[steps.length - 1].data.ops;
};

describe("distinctSteps", () => {
  it("counts prefix-wipe operations", () => {
    expect(solve([1, 2, 3, 4, 2, 3, 3, 5, 7])).toBe(2);
    expect(solve([4, 5, 6, 4, 4])).toBe(2);
    expect(solve([6, 7, 8, 9])).toBe(0);
    expect(solve([1, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distinctSteps([1, 2, 3, 4, 2, 3, 3, 5, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
