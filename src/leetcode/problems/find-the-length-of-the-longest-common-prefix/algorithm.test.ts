import { describe, it, expect } from "vitest";
import { commonPrefixSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr1: number[], arr2: number[]) => {
  const steps = commonPrefixSteps(arr1, arr2);
  return steps[steps.length - 1].data.answer;
};

describe("commonPrefixSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 10, 100], [1000])).toBe(3);
    expect(solve([1, 2, 3], [4, 4, 4])).toBe(0);
    expect(solve([12345], [12300])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of commonPrefixSteps([1, 10, 100], [1000])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
