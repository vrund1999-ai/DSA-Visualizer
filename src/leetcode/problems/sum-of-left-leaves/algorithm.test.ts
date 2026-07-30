import { describe, it, expect } from "vitest";
import { leftLeafSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = leftLeafSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("leftLeafSteps", () => {
  it("sums the left leaves", () => {
    expect(solve([3, 9, 20, null, null, 15, 7])).toBe(24);
    expect(solve([1])).toBe(0);
    expect(solve([1, 2, 3, 4, 5])).toBe(4);
    expect(solve([1, 2])).toBe(2);
    expect(solve([1, null, 2])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of leftLeafSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
