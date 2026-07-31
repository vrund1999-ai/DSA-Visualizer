import { describe, it, expect } from "vitest";
import { typedStringSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (word: string) => {
  const steps = typedStringSteps(word);
  return steps[steps.length - 1].data.answer;
};

describe("typedStringSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("abbcccc")).toBe(5);
    expect(solve("abcd")).toBe(1);
    expect(solve("aaaa")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of typedStringSteps("abbcccc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
