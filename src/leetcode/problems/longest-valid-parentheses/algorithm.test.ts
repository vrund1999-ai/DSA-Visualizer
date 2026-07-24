import { describe, it, expect } from "vitest";
import { longestValidSteps } from "./algorithm";
import { CODE } from "./code";

const longest = (s: string) => {
  const steps = longestValidSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("longestValidSteps", () => {
  it("measures the longest valid substring", () => {
    expect(longest("(()")).toBe(2);
    expect(longest(")()())")).toBe(4);
    expect(longest("")).toBe(0);
    expect(longest("()(()")).toBe(2);
    expect(longest("()(())")).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of longestValidSteps("(()())((")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
