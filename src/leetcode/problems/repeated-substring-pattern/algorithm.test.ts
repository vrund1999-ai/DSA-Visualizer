import { describe, it, expect } from "vitest";
import { repeatedSteps } from "./algorithm";
import { CODE } from "./code";

const repeated = (s: string) => {
  const steps = repeatedSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("repeatedSteps", () => {
  it("detects strings built from a repeated block", () => {
    expect(repeated("abab")).toBe(true);
    expect(repeated("aba")).toBe(false);
    expect(repeated("abcabcabcabc")).toBe(true);
    expect(repeated("a")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of repeatedSteps("abcabcabc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
