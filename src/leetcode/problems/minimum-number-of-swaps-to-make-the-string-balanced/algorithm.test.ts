import { describe, it, expect } from "vitest";
import { swapBalanceSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = swapBalanceSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("swapBalanceSteps", () => {
  it("computes the minimum swaps", () => {
    expect(solve("][][")).toBe(1);
    expect(solve("]]][[[")).toBe(2);
    expect(solve("[]")).toBe(0);
    expect(solve("]][][[")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of swapBalanceSteps("]]][[[")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
