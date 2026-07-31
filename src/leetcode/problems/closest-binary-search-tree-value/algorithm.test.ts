import { describe, it, expect } from "vitest";
import { closestBstSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], target: number) => {
  const steps = closestBstSteps(heap, target);
  return steps[steps.length - 1].data.answer;
};

describe("closestBstSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([4, 2, 5, 1, 3], 3.714286)).toBe(4);
    expect(solve([1], 4.428571)).toBe(1);
    expect(solve([4, 2, 5, 1, 3], 2.5)).toBe(2); // tie prefers smaller
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of closestBstSteps([4, 2, 5, 1, 3], 3.714286)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
