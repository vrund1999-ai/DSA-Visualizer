import { describe, it, expect } from "vitest";
import { closeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (a: string, b: string) => {
  const steps = closeSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("closeSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("abc", "bca")).toBe(true);
    expect(solve("a", "aa")).toBe(false);
    expect(solve("cabbba", "abbccc")).toBe(true);
    expect(solve("cabbba", "aabbss")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of closeSteps("cabbba", "abbccc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
