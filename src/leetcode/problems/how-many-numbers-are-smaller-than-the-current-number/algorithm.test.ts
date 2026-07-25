import { describe, it, expect } from "vitest";
import { smallerSteps } from "./algorithm";
import { CODE } from "./code";

const smaller = (nums: number[]) => {
  const steps = smallerSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("smallerSteps", () => {
  it("counts smaller numbers", () => {
    expect(smaller([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
    expect(smaller([6, 5, 4, 8])).toEqual([2, 1, 0, 3]);
    expect(smaller([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of smallerSteps([8, 1, 2, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
