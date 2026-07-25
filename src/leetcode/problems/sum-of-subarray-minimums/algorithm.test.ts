import { describe, it, expect } from "vitest";
import { subarrayMinsSteps } from "./algorithm";
import { CODE } from "./code";

const sumMins = (arr: number[]) => {
  const steps = subarrayMinsSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("subarrayMinsSteps", () => {
  it("sums subarray minimums", () => {
    expect(sumMins([3, 1, 2, 4])).toBe(17);
    expect(sumMins([11, 81, 94, 43, 3])).toBe(444);
    expect(sumMins([1])).toBe(1);
    expect(sumMins([2, 2])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subarrayMinsSteps([3, 1, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
