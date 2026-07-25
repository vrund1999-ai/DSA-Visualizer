import { describe, it, expect } from "vitest";
import { arrayPartitionSteps } from "./algorithm";
import { CODE } from "./code";

const pairSum = (nums: number[]) => {
  const steps = arrayPartitionSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("arrayPartitionSteps", () => {
  it("maximizes the sum of pair minimums", () => {
    expect(pairSum([1, 4, 3, 2])).toBe(4);
    expect(pairSum([6, 2, 6, 5, 1, 2])).toBe(9);
    expect(pairSum([1, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of arrayPartitionSteps([6, 2, 6, 5, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
