import { describe, it, expect } from "vitest";
import { unitsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (boxTypes: number[][], truckSize: number) => {
  const steps = unitsSteps(boxTypes, truckSize);
  return steps[steps.length - 1].data.answer;
};

describe("unitsSteps", () => {
  it("maximizes the units loaded", () => {
    expect(solve([[1, 3], [2, 2], [3, 1]], 4)).toBe(8);
    expect(solve([[5, 10], [2, 5], [4, 7], [3, 9]], 10)).toBe(91);
    expect(solve([[1, 1]], 1)).toBe(1);
    expect(solve([[2, 3]], 5)).toBe(6);
  });

  it("does not mutate the caller's boxTypes array", () => {
    const boxTypes = [[1, 3], [2, 2]];
    unitsSteps(boxTypes, 3);
    expect(boxTypes).toEqual([[1, 3], [2, 2]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of unitsSteps([[1, 3], [2, 2], [3, 1]], 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
