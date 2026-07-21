import { describe, it, expect } from "vitest";
import { productSteps } from "./algorithm";
import { CODE } from "./code";

const product = (nums: number[]) => {
  const steps = productSteps(nums);
  return steps[steps.length - 1].data.res;
};

describe("productSteps", () => {
  it("computes the product of all elements except self", () => {
    expect(product([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(product([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of productSteps([1, 2, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
