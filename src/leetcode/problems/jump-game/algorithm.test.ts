import { describe, it, expect } from "vitest";
import { jumpSteps } from "./algorithm";
import { CODE } from "./code";

const canJump = (nums: number[]) => {
  const steps = jumpSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("jumpSteps", () => {
  it("decides reachability", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    expect(canJump([0])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of jumpSteps([2, 3, 1, 1, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
