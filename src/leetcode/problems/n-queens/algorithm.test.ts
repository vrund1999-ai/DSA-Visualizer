import { describe, it, expect } from "vitest";
import { nQueensSteps } from "./algorithm";
import { CODE } from "./code";

const count = (n: number) => {
  const steps = nQueensSteps(n);
  return steps[steps.length - 1].data.solutions;
};

describe("nQueensSteps", () => {
  it("counts the distinct solutions", () => {
    expect(count(1)).toBe(1);
    expect(count(4)).toBe(2);
    expect(count(5)).toBe(10);
    expect(count(6)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nQueensSteps(4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
