import { describe, it, expect } from "vitest";
import { doubleExistSteps } from "./algorithm";
import { CODE } from "./code";

const exists = (arr: number[]) => {
  const steps = doubleExistSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("doubleExistSteps", () => {
  it("detects a value and its double", () => {
    expect(exists([10, 2, 5, 3])).toBe(true);
    expect(exists([3, 1, 7, 11])).toBe(false);
    expect(exists([-2, 0, 10, -19, 4, 6, -8])).toBe(false);
    expect(exists([0, 0])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of doubleExistSteps([10, 2, 5, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
