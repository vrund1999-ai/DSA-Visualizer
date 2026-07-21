import { describe, it, expect } from "vitest";
import { levelOrderSteps } from "./algorithm";
import { CODE } from "./code";

const levels = (heap: (number | null)[]) => {
  const steps = levelOrderSteps(heap);
  return steps[steps.length - 1].data.levels;
};

describe("levelOrderSteps", () => {
  it("groups nodes by level", () => {
    expect(levels([3, 9, 20, null, null, 15, 7])).toEqual([[3], [9, 20], [15, 7]]);
    expect(levels([1])).toEqual([[1]]);
    expect(levels([])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of levelOrderSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
