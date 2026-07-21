import { describe, it, expect } from "vitest";
import { rotatedSearchSteps } from "./algorithm";
import { CODE } from "./code";

const search = (nums: number[], target: number) => {
  const steps = rotatedSearchSteps({ nums, target });
  return steps[steps.length - 1].data.found ?? -1;
};

describe("rotatedSearchSteps", () => {
  it("finds targets in a rotated array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });

  it("returns -1 for absent targets", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(search([1], 0)).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotatedSearchSteps({ nums: [4, 5, 6, 7, 0, 1, 2], target: 0 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
