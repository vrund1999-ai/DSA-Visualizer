import { describe, it, expect } from "vitest";
import { editDistanceSteps } from "./algorithm";
import { CODE } from "./code";

const dist = (a: string, b: string) => {
  const steps = editDistanceSteps({ a, b });
  const dp = steps[steps.length - 1].data.dp;
  return dp[a.length][b.length];
};

describe("editDistanceSteps", () => {
  it("computes the edit distance", () => {
    expect(dist("horse", "ros")).toBe(3);
    expect(dist("intention", "execution")).toBe(5);
    expect(dist("", "abc")).toBe(3);
    expect(dist("same", "same")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of editDistanceSteps({ a: "horse", b: "ros" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
