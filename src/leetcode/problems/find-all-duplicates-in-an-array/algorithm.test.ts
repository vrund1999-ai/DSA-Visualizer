import { describe, it, expect } from "vitest";
import { findDuplicatesSteps } from "./algorithm";
import { CODE } from "./code";

const dups = (nums: number[]) => {
  const steps = findDuplicatesSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("findDuplicatesSteps", () => {
  it("returns values appearing twice", () => {
    expect(dups([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
    expect(dups([1, 1, 2])).toEqual([1]);
    expect(dups([1])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of findDuplicatesSteps([4, 3, 2, 7, 8, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
