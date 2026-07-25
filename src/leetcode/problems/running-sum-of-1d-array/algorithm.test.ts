import { describe, it, expect } from "vitest";
import { runningSumSteps } from "./algorithm";
import { CODE } from "./code";

const running = (nums: number[]) => {
  const steps = runningSumSteps(nums);
  return steps[steps.length - 1].data.nums;
};

describe("runningSumSteps", () => {
  it("computes prefix sums", () => {
    expect(running([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    expect(running([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(running([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    expect(running([5])).toEqual([5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of runningSumSteps([1, 2, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
