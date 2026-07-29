import { describe, it, expect } from "vitest";
import { sumNumbersSteps } from "./algorithm";
import { CODE } from "./code";

const sumRTL = (heap: (number | null)[]) => {
  const steps = sumNumbersSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("sumNumbersSteps", () => {
  it("sums the root-to-leaf decimal numbers", () => {
    expect(sumRTL([1, 2, 3])).toBe(25); // 12 + 13
    expect(sumRTL([4, 9, 0, 5, 1])).toBe(1026); // 495 + 491 + 40
    expect(sumRTL([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sumNumbersSteps([4, 9, 0, 5, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
