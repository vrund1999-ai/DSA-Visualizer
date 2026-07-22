import { describe, it, expect } from "vitest";
import { majorityIISteps } from "./algorithm";
import { CODE } from "./code";

const majority = (nums: number[]) => {
  const steps = majorityIISteps(nums);
  return (steps[steps.length - 1].data.result ?? []).sort((a, b) => a - b);
};

describe("majorityIISteps", () => {
  it("finds all elements appearing more than n/3 times", () => {
    expect(majority([3, 2, 3])).toEqual([3]);
    expect(majority([1])).toEqual([1]);
    expect(majority([1, 2])).toEqual([1, 2]);
    expect(majority([1, 1, 1, 3, 3, 2, 2, 2])).toEqual([1, 2]);
  });

  it("returns nothing when no element qualifies", () => {
    expect(majority([1, 2, 3, 4, 5, 6])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of majorityIISteps([1, 1, 1, 3, 3, 2, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
