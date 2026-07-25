import { describe, it, expect } from "vitest";
import { paritySteps } from "./algorithm";
import { CODE } from "./code";

const partitioned = (nums: number[]) => {
  const steps = paritySteps(nums);
  return steps[steps.length - 1].data.nums;
};

// verify: all evens precede all odds and multiset is preserved
const isValid = (input: number[], out: number[]) => {
  if ([...input].sort((a, b) => a - b).join() !== [...out].sort((a, b) => a - b).join()) return false;
  let seenOdd = false;
  for (const v of out) {
    if (v % 2 === 1) seenOdd = true;
    else if (seenOdd) return false;
  }
  return true;
};

describe("paritySteps", () => {
  it("moves evens before odds", () => {
    expect(isValid([3, 1, 2, 4, 7, 6], partitioned([3, 1, 2, 4, 7, 6]))).toBe(true);
    expect(isValid([0], partitioned([0]))).toBe(true);
    expect(isValid([1, 3, 5], partitioned([1, 3, 5]))).toBe(true);
    expect(isValid([2, 4, 6], partitioned([2, 4, 6]))).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of paritySteps([3, 1, 2, 4, 7, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
