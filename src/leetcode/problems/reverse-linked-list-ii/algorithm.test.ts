import { describe, it, expect } from "vitest";
import { reverseBetweenSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (values: number[], left: number, right: number) => {
  const steps = reverseBetweenSteps(values, left, right);
  const { order, values: v } = steps[steps.length - 1].data;
  return order.map((id) => v[id]);
};

describe("reverseBetweenSteps", () => {
  it("reverses the requested sublist", () => {
    expect(reverse([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 4, 3, 2, 5]);
    expect(reverse([1, 2, 3, 4, 5], 1, 5)).toEqual([5, 4, 3, 2, 1]);
    expect(reverse([5], 1, 1)).toEqual([5]);
    expect(reverse([3, 5], 1, 2)).toEqual([5, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseBetweenSteps([1, 2, 3, 4, 5], 2, 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
