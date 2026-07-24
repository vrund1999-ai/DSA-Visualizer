import { describe, it, expect } from "vitest";
import { removeDupSteps } from "./algorithm";
import { CODE } from "./code";

const result = (nums: number[]) => {
  const steps = removeDupSteps(nums);
  const { nums: final, length } = steps[steps.length - 1].data;
  return final.slice(0, length ?? 0);
};

describe("removeDupSteps", () => {
  it("keeps at most two of each value", () => {
    expect(result([1, 1, 1, 2, 2, 3])).toEqual([1, 1, 2, 2, 3]);
    expect(result([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual([0, 0, 1, 1, 2, 3, 3]);
    expect(result([1, 2, 3])).toEqual([1, 2, 3]);
    expect(result([5, 5])).toEqual([5, 5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeDupSteps([1, 1, 1, 2, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
