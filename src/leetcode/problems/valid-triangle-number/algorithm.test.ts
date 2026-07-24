import { describe, it, expect } from "vitest";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[]) => {
  const steps = triangleSteps(nums);
  return steps[steps.length - 1].data.count;
};

describe("triangleSteps", () => {
  it("counts valid triangles", () => {
    expect(count([2, 2, 3, 4])).toBe(3);
    expect(count([4, 2, 3, 4])).toBe(4);
    expect(count([1, 1, 1])).toBe(1);
    expect(count([1, 2, 3])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of triangleSteps([2, 2, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
