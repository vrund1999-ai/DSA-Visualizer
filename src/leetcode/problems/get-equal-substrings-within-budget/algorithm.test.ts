import { describe, it, expect } from "vitest";
import { equalSubSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, t: string, maxCost: number) => {
  const steps = equalSubSteps(s, t, maxCost);
  return steps[steps.length - 1].data.answer;
};

describe("equalSubSteps", () => {
  it("finds the longest convertible substring", () => {
    expect(solve("abcd", "bcdf", 3)).toBe(3);
    expect(solve("abcd", "cdef", 3)).toBe(1);
    expect(solve("abcd", "acde", 0)).toBe(1);
    expect(solve("krrgw", "zjxss", 19)).toBe(2);
    expect(solve("a", "a", 0)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of equalSubSteps("abcd", "bcdf", 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
