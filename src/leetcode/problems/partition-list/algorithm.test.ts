import { describe, it, expect } from "vitest";
import { partitionListSteps } from "./algorithm";
import { CODE } from "./code";

const partition = (values: number[], x: number) => {
  const steps = partitionListSteps(values, x);
  const { less, more, values: v } = steps[steps.length - 1].data;
  return [...less, ...more].map((i) => v[i]);
};

describe("partitionListSteps", () => {
  it("stably partitions around x", () => {
    expect(partition([1, 4, 3, 2, 5, 2], 3)).toEqual([1, 2, 2, 4, 3, 5]);
    expect(partition([2, 1], 2)).toEqual([1, 2]);
    expect(partition([1, 1], 5)).toEqual([1, 1]);
    expect(partition([3, 3], 1)).toEqual([3, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of partitionListSteps([1, 4, 3, 2, 5, 2], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
