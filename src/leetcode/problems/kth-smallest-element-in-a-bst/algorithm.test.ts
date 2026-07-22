import { describe, it, expect } from "vitest";
import { kthSmallestSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (heap: (number | null)[], k: number) => {
  const steps = kthSmallestSteps({ heap, k });
  return steps[steps.length - 1].data.answer;
};

describe("kthSmallestSteps", () => {
  it("finds the kth smallest in ascending (in-order) position", () => {
    expect(kth([5, 3, 8, 2, 4, 7, 9], 1)).toBe(2);
    expect(kth([5, 3, 8, 2, 4, 7, 9], 3)).toBe(4);
    expect(kth([5, 3, 8, 2, 4, 7, 9], 7)).toBe(9);
    expect(kth([3, 1, 4, null, 2], 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthSmallestSteps({ heap: [5, 3, 8, 2, 4, 7, 9], k: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
