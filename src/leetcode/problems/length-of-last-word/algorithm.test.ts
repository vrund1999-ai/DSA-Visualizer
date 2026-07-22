import { describe, it, expect } from "vitest";
import { lastWordSteps } from "./algorithm";
import { CODE } from "./code";

const len = (s: string) => {
  const steps = lastWordSteps(s);
  return steps[steps.length - 1].data.len;
};

describe("lastWordSteps", () => {
  it("finds the last word length", () => {
    expect(len("Hello World")).toBe(5);
    expect(len("   fly me   to   the moon  ")).toBe(4);
    expect(len("luffy is still joyboy")).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lastWordSteps("Hello World")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
