import { describe, it, expect } from "vitest";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";

const nge = (nums: number[]) => {
  const steps = nextGreaterSteps(nums);
  return steps[steps.length - 1].data.res;
};

describe("nextGreaterSteps", () => {
  it("resolves circular next-greater elements", () => {
    expect(nge([1, 2, 1])).toEqual([2, -1, 2]);
    expect(nge([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4]);
    expect(nge([5, 4, 3, 2, 1])).toEqual([-1, 5, 5, 5, 5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextGreaterSteps([1, 2, 3, 4, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
