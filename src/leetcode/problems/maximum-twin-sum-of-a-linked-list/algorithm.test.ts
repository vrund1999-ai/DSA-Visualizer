import { describe, it, expect } from "vitest";
import { twinSumSteps } from "./algorithm";
import { CODE } from "./code";

const twinSum = (vals: number[]) => {
  const steps = twinSumSteps(vals);
  return steps[steps.length - 1].data.answer;
};

describe("twinSumSteps", () => {
  it("finds the maximum twin sum", () => {
    expect(twinSum([5, 4, 2, 1])).toBe(6);
    expect(twinSum([4, 2, 2, 3])).toBe(7);
    expect(twinSum([1, 100000])).toBe(100001);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twinSumSteps([5, 4, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
