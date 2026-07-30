import { describe, it, expect } from "vitest";
import { repeatMatchSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (a: string, b: string) => {
  const steps = repeatMatchSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("repeatMatchSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("abcd", "cdabcdab")).toBe(3);
    expect(solve("a", "aa")).toBe(2);
    expect(solve("abc", "cabcabca")).toBe(4);
    expect(solve("abc", "wxyz")).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of repeatMatchSteps("abcd", "cdabcdab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
