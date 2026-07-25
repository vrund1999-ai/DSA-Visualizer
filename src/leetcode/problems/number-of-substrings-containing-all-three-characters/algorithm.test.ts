import { describe, it, expect } from "vitest";
import { threeCharsSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string) => {
  const steps = threeCharsSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("threeCharsSteps", () => {
  it("counts substrings with all three characters", () => {
    expect(count("abcabc")).toBe(10);
    expect(count("aaacb")).toBe(3);
    expect(count("abc")).toBe(1);
    expect(count("aaa")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of threeCharsSteps("abcabc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
