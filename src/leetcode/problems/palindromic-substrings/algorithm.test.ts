import { describe, it, expect } from "vitest";
import { palinSubSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string) => {
  const steps = palinSubSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("palinSubSteps", () => {
  it("counts palindromic substrings", () => {
    expect(count("abc")).toBe(3);
    expect(count("aaa")).toBe(6);
    expect(count("aaba")).toBe(6);
    expect(count("a")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palinSubSteps("aaba")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
