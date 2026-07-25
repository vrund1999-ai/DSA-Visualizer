import { describe, it, expect } from "vitest";
import { scoreSteps } from "./algorithm";
import { CODE } from "./code";

const score = (s: string) => {
  const steps = scoreSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("scoreSteps", () => {
  it("sums adjacent ASCII differences", () => {
    expect(score("hello")).toBe(13);
    expect(score("zaz")).toBe(50);
    expect(score("a")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of scoreSteps("hello")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
