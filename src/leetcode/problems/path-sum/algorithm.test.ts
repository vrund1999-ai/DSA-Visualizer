import { describe, it, expect } from "vitest";
import { pathSumSteps } from "./algorithm";
import { CODE } from "./code";

const hasPath = (heap: (number | null)[], target: number) => {
  const steps = pathSumSteps({ heap, target });
  return steps[steps.length - 1].data.found;
};

describe("pathSumSteps", () => {
  it("finds a qualifying root-to-leaf path", () => {
    expect(hasPath([5, 4, 8, 11, null, 13, 4, 7, 2], 22)).toBe(true);
    expect(hasPath([1, 2, 3], 3)).toBe(true);
  });

  it("returns false when no path matches", () => {
    expect(hasPath([1, 2, 3], 5)).toBe(false);
    expect(hasPath([], 0)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pathSumSteps({ heap: [5, 4, 8, 11, null, 13, 4, 7, 2], target: 22 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
