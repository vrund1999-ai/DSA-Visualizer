import { describe, it, expect } from "vitest";
import { searchInsertSteps } from "./algorithm";
import { CODE } from "./code";

const insert = (nums: number[], target: number) => {
  const steps = searchInsertSteps({ nums, target });
  return steps[steps.length - 1].data.answer;
};

describe("searchInsertSteps", () => {
  it("finds existing positions", () => {
    expect(insert([1, 3, 5, 6], 5)).toBe(2);
    expect(insert([1, 3, 5, 6], 1)).toBe(0);
  });

  it("finds insertion positions", () => {
    expect(insert([1, 3, 5, 6], 2)).toBe(1);
    expect(insert([1, 3, 5, 6], 7)).toBe(4);
    expect(insert([1, 3, 5, 6], 0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of searchInsertSteps({ nums: [1, 3, 5, 6], target: 5 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
