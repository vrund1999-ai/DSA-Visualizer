import { describe, it, expect } from "vitest";
import { houseRobberIISteps } from "./algorithm";
import { CODE } from "./code";

const rob = (nums: number[]) => {
  const steps = houseRobberIISteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("houseRobberIISteps", () => {
  it("maximizes loot on a circular street", () => {
    expect(rob([2, 3, 2])).toBe(3);
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([1, 2, 3])).toBe(3);
    expect(rob([2, 3, 2, 5, 1])).toBe(8);
    expect(rob([5])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of houseRobberIISteps([2, 3, 2, 5, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
