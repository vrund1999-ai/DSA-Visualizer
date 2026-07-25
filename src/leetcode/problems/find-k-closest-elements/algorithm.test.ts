import { describe, it, expect } from "vitest";
import { kClosestSteps } from "./algorithm";
import { CODE } from "./code";

const closest = (arr: number[], k: number, x: number) => {
  const steps = kClosestSteps(arr, k, x);
  return steps[steps.length - 1].data.answer;
};

describe("kClosestSteps", () => {
  it("returns the k closest elements", () => {
    expect(closest([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
    expect(closest([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
    expect(closest([1, 1, 1, 10, 10, 10], 1, 9)).toEqual([10]);
    expect(closest([0, 1, 2, 2, 2, 3, 6, 8, 8, 9], 5, 9)).toEqual([3, 6, 8, 8, 9]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kClosestSteps([1, 2, 3, 4, 5], 4, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
