import { describe, it, expect } from "vitest";
import { diffWaysSteps } from "./algorithm";
import { CODE } from "./code";

const ways = (expr: string) => {
  const steps = diffWaysSteps(expr);
  return steps[steps.length - 1].data.answer!.sort((a, b) => a - b);
};

describe("diffWaysSteps", () => {
  it("computes all parenthesizations", () => {
    expect(ways("2-1-1")).toEqual([0, 2]);
    expect(ways("2*3-4*5")).toEqual([-34, -14, -10, -10, 10]);
    expect(ways("11")).toEqual([11]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of diffWaysSteps("2*3-4*5")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
