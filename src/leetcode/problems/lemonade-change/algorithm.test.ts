import { describe, it, expect } from "vitest";
import { lemonadeSteps } from "./algorithm";
import { CODE } from "./code";

const canServe = (bills: number[]) => {
  const steps = lemonadeSteps(bills);
  return steps[steps.length - 1].data.answer;
};

describe("lemonadeSteps", () => {
  it("determines if change can always be made", () => {
    expect(canServe([5, 5, 5, 10, 20])).toBe(true);
    expect(canServe([5, 5, 10, 10, 20])).toBe(false);
    expect(canServe([5, 5, 10])).toBe(true);
    expect(canServe([10, 10])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lemonadeSteps([5, 5, 5, 10, 20])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
