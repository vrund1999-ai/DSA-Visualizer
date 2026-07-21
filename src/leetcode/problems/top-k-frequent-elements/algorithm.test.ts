import { describe, it, expect } from "vitest";
import { topKSteps } from "./algorithm";
import { CODE } from "./code";

const topK = (nums: number[], k: number) => {
  const steps = topKSteps(nums, k);
  return steps[steps.length - 1].data.result.sort((a, b) => a - b);
};

describe("topKSteps", () => {
  it("returns the k most frequent elements", () => {
    expect(topK([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topK([1], 1)).toEqual([1]);
  });

  it("returns k values when all frequencies are equal", () => {
    expect(topK([1, 2, 3], 2)).toHaveLength(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of topKSteps([1, 1, 1, 2, 2, 3], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
