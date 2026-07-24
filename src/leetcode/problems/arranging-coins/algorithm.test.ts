import { describe, it, expect } from "vitest";
import { arrangeCoinsSteps } from "./algorithm";
import { CODE } from "./code";

const rows = (n: number) => {
  const steps = arrangeCoinsSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("arrangeCoinsSteps", () => {
  it("counts complete staircase rows", () => {
    expect(rows(5)).toBe(2);
    expect(rows(8)).toBe(3);
    expect(rows(1)).toBe(1);
    expect(rows(10)).toBe(4); // exactly 4 rows
    expect(rows(0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of arrangeCoinsSteps(8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
