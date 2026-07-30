import { describe, it, expect } from "vitest";
import { maxDistSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arrays: number[][]) => {
  const steps = maxDistSteps(arrays);
  return steps[steps.length - 1].data.answer;
};

describe("maxDistSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[1, 2, 3], [4, 5], [1, 2, 3]])).toBe(4);
    expect(solve([[1], [1]])).toBe(0);
    expect(solve([[-10, -5], [-3, 8], [1, 5]])).toBe(18); // 8 - (-10)
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxDistSteps([[1, 2, 3], [4, 5], [1, 2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
