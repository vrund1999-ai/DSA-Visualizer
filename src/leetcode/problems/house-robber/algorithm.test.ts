import { describe, it, expect } from "vitest";
import { robberSteps } from "./algorithm";
import { CODE } from "./code";

const rob = (nums: number[]) => {
  const steps = robberSteps(nums);
  const dp = steps[steps.length - 1].data.dp;
  return nums.length ? (dp[nums.length - 1] as number) : 0;
};

describe("robberSteps", () => {
  it("maximizes loot without adjacent houses", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
    expect(rob([5])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of robberSteps([2, 7, 9, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
