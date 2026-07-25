import { describe, it, expect } from "vitest";
import { distanceKSteps } from "./algorithm";
import { CODE } from "./code";

const dk = (heap: (number | null)[], target: number, k: number) => {
  const steps = distanceKSteps(heap, target, k);
  return steps[steps.length - 1].data.answer!.slice().sort((a, b) => a - b);
};

describe("distanceKSteps", () => {
  it("finds all nodes at distance k", () => {
    expect(dk([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2)).toEqual([1, 4, 7]);
    expect(dk([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 0)).toEqual([5]);
    expect(dk([0, 1, null, 3, 2], 3, 1)).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distanceKSteps([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
