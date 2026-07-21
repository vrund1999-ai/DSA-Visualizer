import { describe, it, expect } from "vitest";
import { binarySearchSteps } from "./algorithm";
import { CODE } from "./code";

const search = (nums: number[], target: number) => {
  const steps = binarySearchSteps({ nums, target });
  return steps[steps.length - 1].data.found ?? -1;
};

describe("binarySearchSteps", () => {
  it("finds an existing target", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(search([5], 5)).toBe(0);
  });

  it("returns -1 when the target is absent", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
    expect(search([], 1)).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of binarySearchSteps({ nums: [1, 2, 3, 4, 5], target: 4 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
