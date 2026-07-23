import { describe, it, expect } from "vitest";
import { subProductSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], k: number) => {
  const steps = subProductSteps({ nums, k });
  return steps[steps.length - 1].data.count;
};

describe("subProductSteps", () => {
  it("counts subarrays with product < k", () => {
    expect(count([10, 5, 2, 6], 100)).toBe(8);
    expect(count([1, 2, 3], 0)).toBe(0);
    expect(count([1, 1, 1], 2)).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subProductSteps({ nums: [10, 5, 2, 6], k: 100 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
