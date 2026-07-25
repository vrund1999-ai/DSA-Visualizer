import { describe, it, expect } from "vitest";
import { cookiesSteps } from "./algorithm";
import { CODE } from "./code";

const content = (g: number[], s: number[]) => {
  const steps = cookiesSteps(g, s);
  return steps[steps.length - 1].data.answer;
};

describe("cookiesSteps", () => {
  it("maximizes content children", () => {
    expect(content([1, 2, 3], [1, 1])).toBe(1);
    expect(content([1, 2], [1, 2, 3])).toBe(2);
    expect(content([10, 9, 8, 7], [5, 6, 7, 8])).toBe(2);
    expect(content([1, 1, 1], [])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cookiesSteps([1, 2, 3], [1, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
