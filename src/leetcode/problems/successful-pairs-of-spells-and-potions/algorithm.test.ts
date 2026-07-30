import { describe, it, expect } from "vitest";
import { pairsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (spells: number[], potions: number[], success: number) => {
  const steps = pairsSteps(spells, potions, success);
  return steps[steps.length - 1].data.answer;
};

const brute = (spells: number[], potions: number[], success: number) =>
  spells.map((s) => potions.filter((p) => s * p >= success).length);

describe("pairsSteps", () => {
  it("matches a brute-force count", () => {
    expect(solve([5, 1, 3], [1, 2, 3, 4, 5], 7)).toEqual([4, 0, 3]);
    expect(solve([3, 1, 2], [8, 5, 8], 16)).toEqual([2, 0, 2]);
    const spells = [15, 8, 19];
    const potions = [38, 36, 23];
    expect(solve(spells, potions, 328)).toEqual(brute(spells, potions, 328));
  });

  it("does not mutate the caller's potions array", () => {
    const potions = [3, 1, 2];
    pairsSteps([1], potions, 2);
    expect(potions).toEqual([3, 1, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pairsSteps([5, 1, 3], [1, 2, 3, 4, 5], 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
