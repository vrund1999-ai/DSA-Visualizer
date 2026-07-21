import { describe, it, expect } from "vitest";
import { rotateArraySteps } from "./algorithm";
import { CODE } from "./code";

const rotate = (nums: number[], k: number) => {
  const steps = rotateArraySteps({ nums, k });
  return steps[steps.length - 1].data.nums;
};

describe("rotateArraySteps", () => {
  it("rotates the array right by k", () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });

  it("handles k larger than length", () => {
    expect(rotate([1, 2], 3)).toEqual([2, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotateArraySteps({ nums: [1, 2, 3, 4, 5, 6, 7], k: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
