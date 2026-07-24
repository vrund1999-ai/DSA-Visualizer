import { describe, it, expect } from "vitest";
import { sortByFreqSteps } from "./algorithm";
import { CODE } from "./code";

const sortByFreq = (nums: number[]) => {
  const steps = sortByFreqSteps(nums);
  return steps[steps.length - 1].data.order;
};

describe("sortByFreqSteps", () => {
  it("sorts by increasing frequency, ties by larger value", () => {
    expect(sortByFreq([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2]);
    expect(sortByFreq([2, 3, 1, 3, 2])).toEqual([1, 3, 3, 2, 2]);
    expect(sortByFreq([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toEqual([5, -1, 4, 4, -6, -6, 1, 1, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortByFreqSteps([1, 1, 2, 2, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
