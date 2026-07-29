import { describe, it, expect } from "vitest";
import { tribSteps } from "./algorithm";
import { CODE } from "./code";

const trib = (n: number) => {
  const steps = tribSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("tribSteps", () => {
  it("computes the nth Tribonacci number", () => {
    expect(trib(0)).toBe(0);
    expect(trib(2)).toBe(1);
    expect(trib(4)).toBe(4);
    expect(trib(8)).toBe(44);
    expect(trib(25)).toBe(1389537);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tribSteps(8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
