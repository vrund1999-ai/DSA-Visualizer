import { describe, it, expect } from "vitest";
import { targetSumSteps } from "./algorithm";
import { CODE } from "./code";

const ways = (nums: number[], target: number) => {
  const steps = targetSumSteps(nums, target);
  return steps[steps.length - 1].data.answer;
};

describe("targetSumSteps", () => {
  it("counts sign assignments reaching the target", () => {
    expect(ways([1, 1, 1, 1, 1], 3)).toBe(5);
    expect(ways([1], 1)).toBe(1);
    expect(ways([1], 2)).toBe(0);
    expect(ways([1, 2, 1], 0)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of targetSumSteps([1, 1, 1, 1, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
