import { describe, it, expect } from "vitest";
import { twoSumBstSteps } from "./algorithm";
import { CODE } from "./code";

const find = (heap: (number | null)[], k: number) => {
  const steps = twoSumBstSteps(heap, k);
  return steps[steps.length - 1].data.answer;
};

describe("twoSumBstSteps", () => {
  it("detects two nodes summing to k", () => {
    expect(find([5, 3, 6, 2, 4, null, 7], 9)).toBe(true);
    expect(find([5, 3, 6, 2, 4, null, 7], 28)).toBe(false);
    expect(find([2, 1, 3], 4)).toBe(true);
    expect(find([2, 1, 3], 1)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoSumBstSteps([5, 3, 6, 2, 4, null, 7], 9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
