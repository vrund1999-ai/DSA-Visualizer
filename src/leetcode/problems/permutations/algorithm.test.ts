import { describe, it, expect } from "vitest";
import { permutationsSteps } from "./algorithm";
import { CODE } from "./code";

const perms = (nums: number[]) => {
  const steps = permutationsSteps(nums);
  return steps[steps.length - 1].data.results;
};

describe("permutationsSteps", () => {
  it("generates all permutations", () => {
    expect(perms([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
    expect(perms([0, 1])).toEqual([[0, 1], [1, 0]]);
    expect(perms([7])).toEqual([[7]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of permutationsSteps([1, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
