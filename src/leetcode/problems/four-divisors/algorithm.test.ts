import { describe, it, expect } from "vitest";
import { fourDivSteps } from "./algorithm";
import { CODE } from "./code";

const sumFour = (nums: number[]) => {
  const steps = fourDivSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("fourDivSteps", () => {
  it("sums divisors of four-divisor numbers", () => {
    expect(sumFour([21, 4, 7])).toBe(32); // 21 -> 1+3+7+21
    expect(sumFour([21, 21])).toBe(64);
    expect(sumFour([1, 2, 3, 4, 5])).toBe(0);
    expect(sumFour([6])).toBe(12); // 1+2+3+6
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fourDivSteps([21, 4, 7, 10])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
