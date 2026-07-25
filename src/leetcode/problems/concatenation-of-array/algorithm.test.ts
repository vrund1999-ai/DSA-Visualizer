import { describe, it, expect } from "vitest";
import { concatSteps } from "./algorithm";
import { CODE } from "./code";

const concat = (nums: number[]) => {
  const steps = concatSteps(nums);
  return steps[steps.length - 1].data.ans;
};

describe("concatSteps", () => {
  it("doubles the array", () => {
    expect(concat([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
    expect(concat([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
    expect(concat([5])).toEqual([5, 5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of concatSteps([1, 3, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
