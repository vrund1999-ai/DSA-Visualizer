import { describe, it, expect } from "vitest";
import { mutatedSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[], target: number) => {
  const steps = mutatedSteps(arr, target);
  return steps[steps.length - 1].data.answer;
};

describe("mutatedSteps", () => {
  it("finds the best cap value", () => {
    expect(solve([4, 9, 3], 10)).toBe(3);
    expect(solve([2, 3, 5], 10)).toBe(5);
    expect(solve([60864, 25176, 27249, 21296, 20204], 56803)).toBe(11361);
    expect(solve([1, 1, 1], 2)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mutatedSteps([4, 9, 3], 10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
