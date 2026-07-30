import { describe, it, expect } from "vitest";
import { targetArraySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], index: number[]) => {
  const steps = targetArraySteps(nums, index);
  return steps[steps.length - 1].data.target;
};

describe("targetArraySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual([0, 4, 1, 3, 2]);
    expect(solve([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4]);
    expect(solve([1], [0])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of targetArraySteps([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
