import { describe, it, expect } from "vitest";
import { rearrangeSteps } from "./algorithm";
import { CODE } from "./code";

const rearrange = (nums: number[]) => {
  const steps = rearrangeSteps(nums);
  return steps[steps.length - 1].data.res;
};

describe("rearrangeSteps", () => {
  it("alternates signs starting positive, preserving order", () => {
    expect(rearrange([3, 1, -2, -5, 2, -4])).toEqual([3, -2, 1, -5, 2, -4]);
    expect(rearrange([-1, 1])).toEqual([1, -1]);
    expect(rearrange([1, -1])).toEqual([1, -1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rearrangeSteps([3, 1, -2, -5, 2, -4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
