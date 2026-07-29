import { describe, it, expect } from "vitest";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";

const type = (nums: number[]) => {
  const steps = triangleSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("triangleSteps", () => {
  it("classifies triangles", () => {
    expect(type([3, 3, 3])).toBe("equilateral");
    expect(type([3, 4, 5])).toBe("scalene");
    expect(type([3, 3, 2])).toBe("isosceles");
    expect(type([1, 1, 3])).toBe("none");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of triangleSteps([3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
