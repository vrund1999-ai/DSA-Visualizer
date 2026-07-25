import { describe, it, expect } from "vitest";
import { cloneGraphSteps } from "./algorithm";
import { CODE } from "./code";

const clonedCount = (adj: number[][]) => {
  const steps = cloneGraphSteps(adj);
  return steps[steps.length - 1].data.cloned.length;
};

describe("cloneGraphSteps", () => {
  it("clones every reachable node exactly once", () => {
    expect(clonedCount([[2, 4], [1, 3], [2, 4], [1, 3]])).toBe(4);
    expect(clonedCount([[2], [1]])).toBe(2);
    expect(clonedCount([[]])).toBe(1);
    expect(clonedCount([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cloneGraphSteps([[2, 4], [1, 3], [2, 4], [1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
