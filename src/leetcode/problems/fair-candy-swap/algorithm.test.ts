import { describe, it, expect } from "vitest";
import { candySwapSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (alice: number[], bob: number[]) => {
  const steps = candySwapSteps(alice, bob);
  return steps[steps.length - 1].data.answer;
};

/** verify the swap actually equalizes the totals. */
const isFair = (alice: number[], bob: number[], swap: [number, number]) => {
  const sumA = alice.reduce((a, b) => a + b, 0) - swap[0] + swap[1];
  const sumB = bob.reduce((a, b) => a + b, 0) - swap[1] + swap[0];
  return sumA === sumB && alice.includes(swap[0]) && bob.includes(swap[1]);
};

describe("candySwapSteps", () => {
  it("returns a fair swap", () => {
    for (const [a, b] of [[[1, 1], [2, 2]], [[1, 2], [2, 3]], [[2], [1, 3]], [[1, 2, 5], [2, 4]]] as [number[], number[]][]) {
      const swap = solve(a, b)!;
      expect(isFair(a, b, swap)).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candySwapSteps([1, 2, 5], [2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
