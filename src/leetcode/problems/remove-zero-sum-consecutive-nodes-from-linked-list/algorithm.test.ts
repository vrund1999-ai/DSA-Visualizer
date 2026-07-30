import { describe, it, expect } from "vitest";
import { zeroSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (values: number[]) => {
  const steps = zeroSumSteps(values);
  return steps[steps.length - 1].data.answer;
};

describe("zeroSumSteps", () => {
  it("removes zero-sum consecutive runs", () => {
    expect(solve([1, 2, -3, 3, 1])).toEqual([3, 1]);
    expect(solve([1, 2, 3, -3, 4])).toEqual([1, 2, 4]);
    expect(solve([1, 2, 3, -3, -2])).toEqual([1]);
    expect(solve([1, -1])).toEqual([]);
    expect(solve([5])).toEqual([5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zeroSumSteps([1, 2, -3, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
