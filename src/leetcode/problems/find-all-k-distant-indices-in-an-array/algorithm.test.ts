import { describe, it, expect } from "vitest";
import { kDistantSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], key: number, k: number) => {
  const steps = kDistantSteps(nums, key, k);
  return steps[steps.length - 1].data.answer;
};

describe("kDistantSteps", () => {
  it("returns the union of windows around each key occurrence", () => {
    expect(solve([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(solve([2, 2, 2, 2, 2], 2, 2)).toEqual([0, 1, 2, 3, 4]);
  });

  it("returns empty when the key is absent", () => {
    expect(solve([1, 2, 3], 9, 1)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kDistantSteps([3, 4, 9, 1, 3, 9, 5], 9, 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
