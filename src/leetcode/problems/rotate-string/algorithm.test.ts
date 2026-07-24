import { describe, it, expect } from "vitest";
import { rotateStringSteps } from "./algorithm";
import { CODE } from "./code";

const rotate = (s: string, goal: string) => {
  const steps = rotateStringSteps(s, goal);
  return steps[steps.length - 1].data.found;
};

describe("rotateStringSteps", () => {
  it("detects valid rotations", () => {
    expect(rotate("abcde", "cdeab")).toBe(true);
    expect(rotate("abcde", "abced")).toBe(false);
    expect(rotate("", "")).toBe(true);
    expect(rotate("a", "a")).toBe(true);
    expect(rotate("ab", "abc")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotateStringSteps("abcde", "cdeab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
