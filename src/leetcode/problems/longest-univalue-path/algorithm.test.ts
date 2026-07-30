import { describe, it, expect } from "vitest";
import { univalueSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = univalueSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("univalueSteps", () => {
  it("computes the longest univalue path length", () => {
    expect(solve([5, 4, 5, 1, 1, null, 5])).toBe(2);
    expect(solve([1, 4, 5, 4, 4, null, 5])).toBe(2);
    expect(solve([1])).toBe(0);
    expect(solve([1, 1, 1])).toBe(2);
    expect(solve([1, 2, 3])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of univalueSteps([5, 4, 5, 1, 1, null, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
