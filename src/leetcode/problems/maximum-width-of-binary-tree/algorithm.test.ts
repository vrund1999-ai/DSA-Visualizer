import { describe, it, expect } from "vitest";
import { maxWidthSteps } from "./algorithm";
import { CODE } from "./code";

const width = (heap: (number | null)[]) => {
  const steps = maxWidthSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("maxWidthSteps", () => {
  it("computes the maximum level width", () => {
    expect(width([1, 3, 2, 5, 3, null, 9])).toBe(4);
    // sparse valid heap array: leftmost pos 0, rightmost pos 7 at depth 3 → width 8
    expect(width([1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, null, 7])).toBe(8);
    expect(width([1, 3, 2, 5])).toBe(2);
    expect(width([1])).toBe(1);
    expect(width([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxWidthSteps([1, 3, 2, 5, 3, null, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
