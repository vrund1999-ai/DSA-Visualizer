import { describe, it, expect } from "vitest";
import { singleNumberIISteps } from "./algorithm";
import { CODE } from "./code";

const single = (nums: number[]) => {
  const steps = singleNumberIISteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("singleNumberIISteps", () => {
  it("finds the element appearing once among triples", () => {
    expect(single([2, 2, 3, 2])).toBe(3);
    expect(single([0, 1, 0, 1, 0, 1, 99])).toBe(99);
    expect(single([5])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of singleNumberIISteps([2, 2, 3, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
