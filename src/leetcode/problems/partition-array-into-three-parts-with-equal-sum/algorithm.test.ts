import { describe, it, expect } from "vitest";
import { threePartsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[]) => {
  const steps = threePartsSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("threePartsSteps", () => {
  it("decides three-equal-part partitioning", () => {
    expect(solve([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBe(true);
    expect(solve([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBe(false);
    expect(solve([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toBe(true);
    expect(solve([1, -1, 1, -1])).toBe(false);
    expect(solve([10, -10, 10, -10, 10, -10, 10, -10])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of threePartsSteps([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
