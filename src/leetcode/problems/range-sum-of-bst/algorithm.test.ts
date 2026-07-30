import { describe, it, expect } from "vitest";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], low: number, high: number) => {
  const steps = rangeSumSteps(heap, low, high);
  return steps[steps.length - 1].data.answer;
};

describe("rangeSumSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([10, 5, 15, 3, 7, null, 18], 7, 15)).toBe(32);
    expect(solve([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)).toBe(23);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeSumSteps([10, 5, 15, 3, 7, null, 18], 7, 15)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
