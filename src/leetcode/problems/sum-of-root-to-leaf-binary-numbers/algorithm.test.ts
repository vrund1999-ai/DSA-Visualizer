import { describe, it, expect } from "vitest";
import { rootToLeafSteps } from "./algorithm";
import { CODE } from "./code";

const sumRTL = (heap: (number | null)[]) => {
  const steps = rootToLeafSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("rootToLeafSteps", () => {
  it("sums root-to-leaf binary numbers", () => {
    expect(sumRTL([1, 0, 1, 0, 1, 0, 1])).toBe(22);
    expect(sumRTL([0])).toBe(0);
    expect(sumRTL([1])).toBe(1);
    expect(sumRTL([1, 1, null, 0])).toBe(6); // 11 -> 110 = 6
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rootToLeafSteps([1, 0, 1, 0, 1, 0, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
