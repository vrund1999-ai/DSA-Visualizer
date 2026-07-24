import { describe, it, expect } from "vitest";
import { checkRotatedSteps } from "./algorithm";
import { CODE } from "./code";

const check = (nums: number[]) => {
  const steps = checkRotatedSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("checkRotatedSteps", () => {
  it("accepts sorted + rotated arrays", () => {
    expect(check([3, 4, 5, 1, 2])).toBe(true);
    expect(check([1, 2, 3])).toBe(true);
    expect(check([2, 1, 3, 4])).toBe(false);
  });

  it("rejects arrays needing more than one drop", () => {
    expect(check([1, 3, 2])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of checkRotatedSteps([3, 4, 5, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
