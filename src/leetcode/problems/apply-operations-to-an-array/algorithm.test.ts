import { describe, it, expect } from "vitest";
import { applyOpsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = applyOpsSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("applyOpsSteps", () => {
  it("applies the merge-and-shift operations", () => {
    expect(solve([1, 2, 2, 1, 1, 0])).toEqual([1, 4, 2, 0, 0, 0]);
    expect(solve([0, 1])).toEqual([1, 0]);
    expect(solve([1, 1, 1])).toEqual([2, 1, 0]);
    expect(solve([2, 2, 2, 2])).toEqual([4, 4, 0, 0]);
  });

  it("does not mutate the caller's array", () => {
    const nums = [1, 1];
    applyOpsSteps(nums);
    expect(nums).toEqual([1, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of applyOpsSteps([1, 2, 2, 1, 1, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
