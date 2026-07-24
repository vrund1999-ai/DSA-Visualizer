import { describe, it, expect } from "vitest";
import { freqSteps } from "./algorithm";
import { CODE } from "./code";

const best = (nums: number[], k: number) => {
  const steps = freqSteps({ nums, k });
  return steps[steps.length - 1].data.best;
};

describe("freqSteps", () => {
  it("computes the max achievable frequency", () => {
    expect(best([1, 2, 4], 5)).toBe(3);
    expect(best([1, 4, 8, 13], 5)).toBe(2);
    expect(best([3, 9, 6], 2)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of freqSteps({ nums: [1, 4, 8, 13], k: 5 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
