import { describe, it, expect } from "vitest";
import { plusOneSteps } from "./algorithm";
import { CODE } from "./code";

const plusOne = (digits: number[]) => {
  const steps = plusOneSteps(digits);
  return steps[steps.length - 1].data.digits;
};

describe("plusOneSteps", () => {
  it("increments without carry", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("propagates carries", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of plusOneSteps([9, 9, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
