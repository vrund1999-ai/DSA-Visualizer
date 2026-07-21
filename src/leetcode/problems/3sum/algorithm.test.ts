import { describe, it, expect } from "vitest";
import { threeSumSteps } from "./algorithm";
import { CODE } from "./code";

describe("threeSumSteps", () => {
  it("finds all unique triplets that sum to zero", () => {
    const steps = threeSumSteps([-1, 0, 1, 2, -1, -4]);
    const found = steps[steps.length - 1].data.triplets;
    expect(found).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("returns nothing when no triplet sums to zero", () => {
    const steps = threeSumSteps([1, 2, 3]);
    expect(steps[steps.length - 1].data.triplets).toEqual([]);
  });

  it("does not emit duplicate triplets", () => {
    const steps = threeSumSteps([0, 0, 0, 0]);
    expect(steps[steps.length - 1].data.triplets).toEqual([[0, 0, 0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of threeSumSteps([-1, 0, 1, 2, -1, -4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
