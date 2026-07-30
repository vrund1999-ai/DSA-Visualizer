import { describe, it, expect } from "vitest";
import { specialArraySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = specialArraySteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("specialArraySteps", () => {
  it("finds the special value x", () => {
    expect(solve([0, 4, 3, 0, 4])).toBe(3);
    expect(solve([3, 5])).toBe(2);
    expect(solve([0, 0])).toBe(-1);
    expect(solve([3, 6, 7, 7, 0])).toBe(-1);
    expect(solve([5, 5, 5])).toBe(3); // all three ≥ 3
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of specialArraySteps([0, 4, 3, 0, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
