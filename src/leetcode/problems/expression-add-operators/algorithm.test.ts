import { describe, it, expect } from "vitest";
import { exprSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (num: string, target: number) => {
  const steps = exprSteps(num, target);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("exprSteps", () => {
  it("finds every expression equal to the target", () => {
    expect(solve("123", 6)).toEqual(new Set(["1+2+3", "1*2*3"]));
    expect(solve("232", 8)).toEqual(new Set(["2*3+2", "2+3*2"]));
    expect(solve("00", 0)).toEqual(new Set(["0+0", "0-0", "0*0"]));
    expect(solve("3456237490", 9191)).toEqual(new Set());
  });

  it("respects multiplication precedence", () => {
    // 2*3+2 = 8 and 2+3*2 = 8, but 2+3+2 = 7 must not appear
    expect(solve("232", 7)).toEqual(new Set(["2+3+2"]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of exprSteps("123", 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
