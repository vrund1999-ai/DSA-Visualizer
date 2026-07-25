import { describe, it, expect } from "vitest";
import { coinChangeIISteps } from "./algorithm";
import { CODE } from "./code";

const ways = (amount: number, coins: number[]) => {
  const steps = coinChangeIISteps(amount, coins);
  return steps[steps.length - 1].data.answer;
};

describe("coinChangeIISteps", () => {
  it("counts combinations that sum to the amount", () => {
    expect(ways(5, [1, 2, 5])).toBe(4);
    expect(ways(3, [2])).toBe(0);
    expect(ways(10, [10])).toBe(1);
    expect(ways(0, [1, 2])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of coinChangeIISteps(5, [1, 2, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
