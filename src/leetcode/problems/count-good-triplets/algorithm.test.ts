import { describe, it, expect } from "vitest";
import { goodTripletsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[], a: number, b: number, c: number) => {
  const steps = goodTripletsSteps(arr, a, b, c);
  return steps[steps.length - 1].data.answer;
};

describe("goodTripletsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
    expect(solve([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of goodTripletsSteps([3, 0, 1, 1, 9, 7], 7, 2, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
