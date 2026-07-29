import { describe, it, expect } from "vitest";
import { maxSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const maxSubseq = (nums: number[], k: number) => {
  const steps = maxSubseqSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxSubseqSteps", () => {
  it("keeps the k largest values in original order", () => {
    expect(maxSubseq([2, 1, 3, 3], 2)).toEqual([3, 3]);
    expect(maxSubseq([-1, -2, 3, 4], 3)).toEqual([-1, 3, 4]);
    expect(maxSubseq([3, 4, 3, 3], 2)).toEqual([3, 4]);
  });

  it("sum of the result is maximal", () => {
    const res = maxSubseq([50, -75, 45, 60, 100], 3)!;
    expect(res.reduce((a, b) => a + b, 0)).toBe(210);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSubseqSteps([2, 1, 3, 3], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
