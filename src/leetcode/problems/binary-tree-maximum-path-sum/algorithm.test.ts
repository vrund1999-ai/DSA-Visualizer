import { describe, it, expect } from "vitest";
import { maxPathSteps } from "./algorithm";
import { CODE } from "./code";

const maxPath = (heap: (number | null)[]) => {
  const steps = maxPathSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("maxPathSteps", () => {
  it("computes the maximum path sum", () => {
    expect(maxPath([1, 2, 3])).toBe(6);
    expect(maxPath([-10, 9, 20, null, null, 15, 7])).toBe(42);
    expect(maxPath([-3])).toBe(-3);
    expect(maxPath([2, -1])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxPathSteps([-10, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
