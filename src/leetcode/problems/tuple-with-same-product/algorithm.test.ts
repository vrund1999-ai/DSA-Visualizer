import { describe, it, expect } from "vitest";
import { tupleSteps } from "./algorithm";
import { CODE } from "./code";

const tuples = (nums: number[]) => {
  const steps = tupleSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("tupleSteps", () => {
  it("counts tuples with equal products", () => {
    expect(tuples([2, 3, 4, 6])).toBe(8);
    expect(tuples([1, 2, 4, 5, 10])).toBe(16);
    expect(tuples([2, 3, 5, 7])).toBe(0);
    expect(tuples([1, 2, 3])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tupleSteps([2, 3, 4, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
