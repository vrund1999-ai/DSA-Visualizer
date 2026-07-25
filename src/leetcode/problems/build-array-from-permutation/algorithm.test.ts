import { describe, it, expect } from "vitest";
import { buildArraySteps } from "./algorithm";
import { CODE } from "./code";

const build = (nums: number[]) => {
  const steps = buildArraySteps(nums);
  return steps[steps.length - 1].data.ans;
};

describe("buildArraySteps", () => {
  it("computes ans[i] = nums[nums[i]]", () => {
    expect(build([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3]);
    expect(build([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
    expect(build([0])).toEqual([0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of buildArraySteps([0, 2, 1, 5, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
