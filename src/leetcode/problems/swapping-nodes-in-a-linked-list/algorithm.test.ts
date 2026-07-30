import { describe, it, expect } from "vitest";
import { swapNodesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (values: number[], k: number) => {
  const steps = swapNodesSteps(values, k);
  return steps[steps.length - 1].data.answer;
};

describe("swapNodesSteps", () => {
  it("swaps the kth nodes from each end", () => {
    expect(solve([1, 2, 3, 4, 5], 2)).toEqual([1, 4, 3, 2, 5]);
    expect(solve([7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5)).toEqual([7, 9, 6, 6, 8, 7, 3, 0, 9, 5]);
    expect(solve([1], 1)).toEqual([1]);
    expect(solve([1, 2], 1)).toEqual([2, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of swapNodesSteps([1, 2, 3, 4, 5], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
