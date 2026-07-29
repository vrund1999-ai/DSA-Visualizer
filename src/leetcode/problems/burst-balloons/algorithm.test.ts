import { describe, it, expect } from "vitest";
import { burstSteps } from "./algorithm";
import { CODE } from "./code";

const maxCoins = (nums: number[]) => {
  const steps = burstSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("burstSteps", () => {
  it("maximizes the coins from bursting balloons", () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
    expect(maxCoins([1, 5])).toBe(10);
    expect(maxCoins([7])).toBe(7);
    expect(maxCoins([9, 76, 64, 21])).toBe(116718);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of burstSteps([3, 1, 5, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
