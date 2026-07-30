import { describe, it, expect } from "vitest";
import { beautySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = beautySteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("beautySteps", () => {
  it("sums the beauty over all substrings", () => {
    expect(solve("aabcb")).toBe(5);
    expect(solve("aabcbaa")).toBe(17);
    expect(solve("a")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of beautySteps("aabcb")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
