import { describe, it, expect } from "vitest";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";

const canPartition = (nums: number[]) => {
  const steps = partitionSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("partitionSteps", () => {
  it("finds an equal partition when one exists", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
    expect(canPartition([2, 2, 2, 2])).toBe(true);
  });

  it("rejects when no equal partition exists", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
    expect(canPartition([1, 2, 5])).toBe(false); // odd total
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of partitionSteps([1, 5, 11, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
