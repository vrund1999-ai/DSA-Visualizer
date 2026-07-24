import { describe, it, expect } from "vitest";
import { swapPairsSteps } from "./algorithm";
import { CODE } from "./code";

const swap = (values: number[]) => {
  const steps = swapPairsSteps(values);
  return steps[steps.length - 1].data.values;
};

describe("swapPairsSteps", () => {
  it("swaps adjacent pairs", () => {
    expect(swap([1, 2, 3, 4])).toEqual([2, 1, 4, 3]);
    expect(swap([1, 2, 3, 4, 5])).toEqual([2, 1, 4, 3, 5]);
    expect(swap([1])).toEqual([1]);
    expect(swap([])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of swapPairsSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
