import { describe, it, expect } from "vitest";
import { punishmentSteps } from "./algorithm";
import { CODE } from "./code";

const punishment = (n: number) => {
  const steps = punishmentSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("punishmentSteps", () => {
  it("computes the punishment number", () => {
    expect(punishment(10)).toBe(182);
    expect(punishment(37)).toBe(1478);
    expect(punishment(1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of punishmentSteps(10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
