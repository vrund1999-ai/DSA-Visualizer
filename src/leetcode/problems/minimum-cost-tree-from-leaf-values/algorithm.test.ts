import { describe, it, expect } from "vitest";
import { leafValuesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[]) => {
  const steps = leafValuesSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("leafValuesSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([6, 2, 4])).toBe(32);
    expect(solve([4, 11])).toBe(44);
    expect(solve([1, 2, 3, 4])).toBe(20);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of leafValuesSteps([6, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
