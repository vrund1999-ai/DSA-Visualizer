import { describe, it, expect } from "vitest";
import { wealthSteps } from "./algorithm";
import { CODE } from "./code";

const maxWealth = (accounts: number[][]) => {
  const steps = wealthSteps(accounts);
  return steps[steps.length - 1].data.answer;
};

describe("wealthSteps", () => {
  it("finds the richest customer's wealth", () => {
    expect(maxWealth([[1, 2, 3], [3, 2, 1]])).toBe(6);
    expect(maxWealth([[1, 5], [7, 3], [3, 5]])).toBe(10);
    expect(maxWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toBe(17);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wealthSteps([[1, 5], [7, 3], [3, 5]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
