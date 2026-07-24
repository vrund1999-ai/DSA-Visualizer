import { describe, it, expect } from "vitest";
import { kthMissingSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (arr: number[], k: number) => {
  const steps = kthMissingSteps(arr, k);
  return steps[steps.length - 1].data.answer;
};

describe("kthMissingSteps", () => {
  it("finds the kth missing positive", () => {
    expect(kth([2, 3, 4, 7, 11], 5)).toBe(9);
    expect(kth([1, 2, 3, 4], 2)).toBe(6);
    expect(kth([5, 6, 7], 1)).toBe(1);
    expect(kth([2], 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthMissingSteps([2, 3, 4, 7, 11], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
