import { describe, it, expect } from "vitest";
import { largestSubmatrixSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = largestSubmatrixSteps(matrix.map((r) => [...r]));
  return steps[steps.length - 1].data.answer;
};

describe("largestSubmatrixSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[0, 0, 1], [1, 1, 1], [1, 0, 1]])).toBe(4);
    expect(solve([[1, 0, 1, 0, 1]])).toBe(3);
    expect(solve([[1, 1, 0], [1, 0, 1]])).toBe(2);
    expect(solve([[0, 0], [0, 0]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of largestSubmatrixSteps([[0, 0, 1], [1, 1, 1], [1, 0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
