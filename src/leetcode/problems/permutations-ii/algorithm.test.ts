import { describe, it, expect } from "vitest";
import { permutationsIISteps } from "./algorithm";
import { CODE } from "./code";

const perms = (nums: number[]) => {
  const steps = permutationsIISteps(nums);
  return steps[steps.length - 1].data.results;
};

describe("permutationsIISteps", () => {
  it("generates unique permutations", () => {
    expect(perms([1, 1, 2])).toEqual([
      [1, 1, 2], [1, 2, 1], [2, 1, 1],
    ]);
    expect(perms([1, 2, 3]).length).toBe(6);
    expect(perms([2, 2, 2])).toEqual([[2, 2, 2]]);
    expect(perms([1]).length).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of permutationsIISteps([1, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
