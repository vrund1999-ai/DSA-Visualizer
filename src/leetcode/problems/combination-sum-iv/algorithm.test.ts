import { describe, it, expect } from "vitest";
import { combSum4Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], target: number) => {
  const steps = combSum4Steps(nums, target);
  return steps[steps.length - 1].data.answer;
};

describe("combSum4Steps", () => {
  it("counts ordered combinations", () => {
    expect(solve([1, 2, 3], 4)).toBe(7);
    expect(solve([9], 3)).toBe(0);
    expect(solve([1, 2], 3)).toBe(3);
    expect(solve([2, 4], 6)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of combSum4Steps([1, 2, 3], 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
