import { describe, it, expect } from "vitest";
import { consecSteps } from "./algorithm";
import { CODE } from "./code";

const power = (s: string) => {
  const steps = consecSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("consecSteps", () => {
  it("finds the longest single-character run", () => {
    expect(power("leetcode")).toBe(2);
    expect(power("abbcccddddeeeeedcba")).toBe(5);
    expect(power("triplepillooooow")).toBe(5);
    expect(power("x")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of consecSteps("leetcode")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
