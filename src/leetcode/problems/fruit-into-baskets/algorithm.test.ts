import { describe, it, expect } from "vitest";
import { fruitSteps } from "./algorithm";
import { CODE } from "./code";

const totalFruit = (fruits: number[]) => {
  const steps = fruitSteps(fruits);
  return steps[steps.length - 1].data.answer;
};

describe("fruitSteps", () => {
  it("finds the longest ≤2-type subarray", () => {
    expect(totalFruit([1, 2, 1])).toBe(3);
    expect(totalFruit([0, 1, 2, 2])).toBe(3);
    expect(totalFruit([1, 2, 3, 2, 2])).toBe(4);
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fruitSteps([1, 2, 3, 2, 2, 1, 1, 3, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
