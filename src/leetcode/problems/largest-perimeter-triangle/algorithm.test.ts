import { describe, it, expect } from "vitest";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = triangleSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("triangleSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 1, 2])).toBe(5);
    expect(solve([1, 2, 1, 10])).toBe(0);
    expect(solve([3, 6, 2, 3, 5, 4])).toBe(15); // 6,5,4
    expect(solve([1, 2, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of triangleSteps([3, 6, 2, 3, 5, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
