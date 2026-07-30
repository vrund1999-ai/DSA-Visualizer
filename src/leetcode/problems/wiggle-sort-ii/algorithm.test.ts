import { describe, it, expect } from "vitest";
import { wiggleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = wiggleSteps(nums);
  return steps[steps.length - 1].data.answer!;
};

const isWiggle = (a: number[]) => {
  for (let i = 1; i < a.length; i++) {
    if (i % 2 === 1 && !(a[i] > a[i - 1])) return false;
    if (i % 2 === 0 && !(a[i] < a[i - 1])) return false;
  }
  return true;
};

describe("wiggleSteps", () => {
  it("produces a valid wiggle ordering", () => {
    for (const nums of [[1, 5, 1, 1, 6, 4], [1, 3, 2, 2, 3, 1], [1, 2, 3, 4, 5], [4, 5, 5, 6], [1, 1, 2, 1, 2, 2, 1]]) {
      const out = solve(nums);
      expect(out.slice().sort((a, b) => a - b)).toEqual([...nums].sort((a, b) => a - b));
      expect(isWiggle(out)).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wiggleSteps([1, 5, 1, 1, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
