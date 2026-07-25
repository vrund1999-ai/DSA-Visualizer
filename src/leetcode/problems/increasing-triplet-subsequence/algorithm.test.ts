import { describe, it, expect } from "vitest";
import { tripletSteps } from "./algorithm";
import { CODE } from "./code";

const hasTriple = (nums: number[]) => {
  const steps = tripletSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("tripletSteps", () => {
  it("detects increasing triples", () => {
    expect(hasTriple([1, 2, 3, 4, 5])).toBe(true);
    expect(hasTriple([5, 4, 3, 2, 1])).toBe(false);
    expect(hasTriple([2, 1, 5, 0, 4, 6])).toBe(true);
    expect(hasTriple([20, 100, 10, 12, 5, 13])).toBe(true);
    expect(hasTriple([1, 1, 1])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tripletSteps([2, 1, 5, 0, 4, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
