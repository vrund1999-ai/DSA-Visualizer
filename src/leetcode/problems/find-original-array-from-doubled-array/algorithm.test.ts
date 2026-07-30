import { describe, it, expect } from "vitest";
import { doubledSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (changed: number[]) => {
  const steps = doubledSteps(changed);
  return steps[steps.length - 1].data.answer!;
};

// Verify: doubling `original` and sorting equals sorted `changed`.
const isValid = (changed: number[], original: number[]) => {
  if (original.length === 0) return false;
  const doubled = [...original, ...original.map((x) => 2 * x)].sort((a, b) => a - b);
  return JSON.stringify(doubled) === JSON.stringify([...changed].sort((a, b) => a - b));
};

describe("doubledSteps", () => {
  it("recovers a valid original array", () => {
    expect(isValid([1, 3, 4, 2, 6, 8], solve([1, 3, 4, 2, 6, 8]))).toBe(true);
    expect(isValid([6, 3, 0, 1, 2, 4], solve([6, 3, 0, 1, 2, 4]))).toBe(false); // returns []
    expect(solve([1])).toEqual([]);
    expect(isValid([0, 0, 0, 0], solve([0, 0, 0, 0]))).toBe(true);
    expect(solve([1, 2, 1])).toEqual([]);
  });

  it("returns [] when impossible", () => {
    expect(solve([1, 1])).toEqual([]); // 1 has no double 2
    expect(solve([3, 1, 3, 6])).toEqual([]); // two 3s but only one 6
    expect(solve([4, 4, 8])).toEqual([]); // odd length
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of doubledSteps([1, 3, 4, 2, 6, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
