import { describe, it, expect } from "vitest";
import { containsDupIISteps } from "./algorithm";
import { CODE } from "./code";

const near = (nums: number[], k: number) => {
  const steps = containsDupIISteps({ nums, k });
  return steps[steps.length - 1].data.result;
};

describe("containsDupIISteps", () => {
  it("detects nearby duplicates", () => {
    expect(near([1, 2, 3, 1], 3)).toBe(true);
    expect(near([1, 0, 1, 1], 1)).toBe(true);
  });

  it("returns false when duplicates are too far or absent", () => {
    expect(near([1, 2, 3, 1, 2, 3], 2)).toBe(false);
    expect(near([1, 2, 3], 1)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of containsDupIISteps({ nums: [1, 2, 3, 1], k: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
