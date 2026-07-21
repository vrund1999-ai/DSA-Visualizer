import { describe, it, expect } from "vitest";
import { maxDepthSteps } from "./algorithm";
import { CODE } from "./code";

const depth = (heap: (number | null)[]) => {
  const steps = maxDepthSteps(heap);
  return steps[steps.length - 1].data.maxDepth;
};

describe("maxDepthSteps", () => {
  it("computes the tree height", () => {
    expect(depth([3, 9, 20, null, null, 15, 7])).toBe(3);
    expect(depth([1, null, 2])).toBe(2);
    expect(depth([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxDepthSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
