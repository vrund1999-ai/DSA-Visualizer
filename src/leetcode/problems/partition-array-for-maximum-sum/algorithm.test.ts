import { describe, it, expect } from "vitest";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[], k: number) => {
  const steps = partitionSteps(arr, k);
  return steps[steps.length - 1].data.answer;
};

describe("partitionSteps", () => {
  it("maximizes the partitioned sum", () => {
    expect(solve([1, 15, 7, 9, 2, 5, 10], 3)).toBe(84);
    expect(solve([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)).toBe(83);
    expect(solve([1], 1)).toBe(1);
    expect(solve([1, 2, 3], 3)).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of partitionSteps([1, 15, 7, 9, 2, 5, 10], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
