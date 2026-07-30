import { describe, it, expect } from "vitest";
import { shopPenaltySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (customers: string) => {
  const steps = shopPenaltySteps(customers);
  return steps[steps.length - 1].data.answer;
};

describe("shopPenaltySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("YYNY")).toBe(2);
    expect(solve("NNNNN")).toBe(0);
    expect(solve("YYYY")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shopPenaltySteps("YYNY")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
