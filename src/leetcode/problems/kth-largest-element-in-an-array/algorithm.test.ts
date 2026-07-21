import { describe, it, expect } from "vitest";
import { kthLargestSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (nums: number[], k: number) => {
  const steps = kthLargestSteps({ nums, k });
  return steps[steps.length - 1].data.answer;
};

describe("kthLargestSteps", () => {
  it("finds the kth largest element", () => {
    expect(kth([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(kth([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    expect(kth([1], 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthLargestSteps({ nums: [3, 2, 1, 5, 6, 4], k: 2 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
