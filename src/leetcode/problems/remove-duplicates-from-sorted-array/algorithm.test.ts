import { describe, it, expect } from "vitest";
import { dedupSteps } from "./algorithm";
import { CODE } from "./code";

const dedup = (nums: number[]) => {
  const steps = dedupSteps(nums);
  const last = steps[steps.length - 1].data;
  return last.nums.slice(0, last.length);
};

describe("dedupSteps", () => {
  it("removes duplicates keeping order", () => {
    expect(dedup([1, 1, 2])).toEqual([1, 2]);
    expect(dedup([0, 0, 1, 1, 1, 2, 2, 3, 4])).toEqual([0, 1, 2, 3, 4]);
  });

  it("handles empty and single-element arrays", () => {
    expect(dedup([])).toEqual([]);
    expect(dedup([7])).toEqual([7]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dedupSteps([0, 0, 1, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
