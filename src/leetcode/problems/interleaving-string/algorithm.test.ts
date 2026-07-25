import { describe, it, expect } from "vitest";
import { interleaveSteps } from "./algorithm";
import { CODE } from "./code";

const isInterleave = (s1: string, s2: string, s3: string) => {
  const steps = interleaveSteps(s1, s2, s3);
  return steps[steps.length - 1].data.answer;
};

describe("interleaveSteps", () => {
  it("checks interleaving", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
    expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toBe(false);
    expect(isInterleave("", "", "")).toBe(true);
    expect(isInterleave("a", "b", "ab")).toBe(true);
    expect(isInterleave("a", "b", "ab")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of interleaveSteps("aabcc", "dbbca", "aadbbcbcac")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
