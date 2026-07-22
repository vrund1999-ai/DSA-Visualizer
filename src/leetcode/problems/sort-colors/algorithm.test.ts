import { describe, it, expect } from "vitest";
import { sortColorsSteps } from "./algorithm";
import { CODE } from "./code";

const sort = (nums: number[]) => {
  const steps = sortColorsSteps(nums);
  return steps[steps.length - 1].data.nums;
};

describe("sortColorsSteps", () => {
  it("sorts 0s, 1s, and 2s", () => {
    expect(sort([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
    expect(sort([2, 0, 1])).toEqual([0, 1, 2]);
    expect(sort([0])).toEqual([0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortColorsSteps([2, 0, 2, 1, 1, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
