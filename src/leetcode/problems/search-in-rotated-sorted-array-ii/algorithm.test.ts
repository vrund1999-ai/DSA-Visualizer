import { describe, it, expect } from "vitest";
import { rotatedSearchSteps } from "./algorithm";
import { CODE } from "./code";

const search = (nums: number[], target: number) => {
  const steps = rotatedSearchSteps(nums, target);
  return steps[steps.length - 1].data.found;
};

describe("rotatedSearchSteps", () => {
  it("searches a rotated array with duplicates", () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
    expect(search([1, 0, 1, 1, 1], 0)).toBe(true);
    expect(search([1, 1, 1, 1, 1], 2)).toBe(false);
    expect(search([1], 1)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotatedSearchSteps([2, 5, 6, 0, 0, 1, 2], 0)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
