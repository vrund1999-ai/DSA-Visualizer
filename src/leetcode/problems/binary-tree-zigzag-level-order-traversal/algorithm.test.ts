import { describe, it, expect } from "vitest";
import { zigzagLevelSteps } from "./algorithm";
import { CODE } from "./code";

const zigzag = (heap: (number | null)[]) => {
  const steps = zigzagLevelSteps(heap);
  return steps[steps.length - 1].data.levels;
};

describe("zigzagLevelSteps", () => {
  it("alternates direction per level", () => {
    expect(zigzag([3, 9, 20, null, null, 15, 7])).toEqual([[3], [20, 9], [15, 7]]);
    expect(zigzag([1, 2, 3, 4, 5, 6, 7])).toEqual([[1], [3, 2], [4, 5, 6, 7]]);
    expect(zigzag([])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zigzagLevelSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
