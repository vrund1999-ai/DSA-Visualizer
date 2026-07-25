import { describe, it, expect } from "vitest";
import { evenOddSteps } from "./algorithm";
import { CODE } from "./code";

const isEvenOdd = (heap: (number | null)[]) => {
  const steps = evenOddSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("evenOddSteps", () => {
  it("validates even-odd trees", () => {
    expect(isEvenOdd([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2])).toBe(true);
    expect(isEvenOdd([5, 4, 2, 3, 3, 7])).toBe(false); // level1 not decreasing evens
    expect(isEvenOdd([5, 9, 1, 3, 5, 7])).toBe(false); // level0 root even? no, 5 odd; level1 9,1 odd → wrong parity
    expect(isEvenOdd([1])).toBe(true);
    expect(isEvenOdd([2])).toBe(false); // root must be odd
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of evenOddSteps([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
