import { describe, it, expect } from "vitest";
import { minDepthSteps } from "./algorithm";
import { CODE } from "./code";

const minDepth = (heap: (number | null)[]) => {
  const steps = minDepthSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("minDepthSteps", () => {
  it("finds the shallowest leaf depth", () => {
    expect(minDepth([3, 9, 20, null, null, 15, 7])).toBe(2);
    expect(minDepth([1, 2, null, 3])).toBe(3); // only leaf is 3 at depth 3
    expect(minDepth([1, 2])).toBe(2);
    expect(minDepth([1])).toBe(1);
    expect(minDepth([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minDepthSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
