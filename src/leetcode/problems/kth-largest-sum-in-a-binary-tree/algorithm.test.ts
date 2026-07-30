import { describe, it, expect } from "vitest";
import { kthLevelSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], k: number) => {
  const steps = kthLevelSumSteps(heap, k);
  return steps[steps.length - 1].data.answer;
};

describe("kthLevelSumSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([5, 8, 9, 2, 1, 3, 7, 4, 6], 2)).toBe(13); // level sums 5,17,13,10
    expect(solve([1, 2, null, 3], 1)).toBe(3); // sums 1,2,3
    expect(solve([1, 2, null, 3], 4)).toBe(-1); // only 3 levels
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthLevelSumSteps([5, 8, 9, 2, 1, 3, 7, 4, 6], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
