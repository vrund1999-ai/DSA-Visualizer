import { describe, it, expect } from "vitest";
import { hammingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (x: number, y: number) => {
  const steps = hammingSteps(x, y);
  return steps[steps.length - 1].data.answer;
};

describe("hammingSteps", () => {
  it("computes the Hamming distance", () => {
    expect(solve(1, 4)).toBe(2);
    expect(solve(3, 1)).toBe(1);
    expect(solve(93, 73)).toBe(2);
    expect(solve(0, 0)).toBe(0);
    expect(solve(0, 15)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hammingSteps(93, 73)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
