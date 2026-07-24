import { describe, it, expect } from "vitest";
import { jumpIISteps } from "./algorithm";
import { CODE } from "./code";

const jumps = (nums: number[]) => {
  const steps = jumpIISteps(nums);
  return steps[steps.length - 1].data.jumps;
};

describe("jumpIISteps", () => {
  it("computes the minimum jumps", () => {
    expect(jumps([2, 3, 1, 1, 4])).toBe(2);
    expect(jumps([2, 3, 0, 1, 4])).toBe(2);
    expect(jumps([0])).toBe(0);
    expect(jumps([1, 1, 1, 1])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of jumpIISteps([2, 3, 1, 1, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
