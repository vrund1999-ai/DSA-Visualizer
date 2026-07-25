import { describe, it, expect } from "vitest";
import { squareSumSteps } from "./algorithm";
import { CODE } from "./code";

const judge = (c: number) => {
  const steps = squareSumSteps(c);
  return steps[steps.length - 1].data.answer;
};

describe("squareSumSteps", () => {
  it("detects sums of two squares", () => {
    expect(judge(5)).toBe(true);
    expect(judge(3)).toBe(false);
    expect(judge(4)).toBe(true);
    expect(judge(2)).toBe(true);
    expect(judge(65)).toBe(true);
    expect(judge(0)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of squareSumSteps(65)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
