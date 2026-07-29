import { describe, it, expect } from "vitest";
import { deleteEarnSteps } from "./algorithm";
import { CODE } from "./code";

const earn = (nums: number[]) => {
  const steps = deleteEarnSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("deleteEarnSteps", () => {
  it("maximizes earned points", () => {
    expect(earn([3, 4, 2])).toBe(6);
    expect(earn([2, 2, 3, 3, 3, 4])).toBe(9);
    expect(earn([1])).toBe(1);
    expect(earn([1, 1, 1, 2, 4, 5, 5, 5, 6])).toBe(18);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of deleteEarnSteps([2, 2, 3, 3, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
