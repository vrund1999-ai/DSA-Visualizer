import { describe, it, expect } from "vitest";
import { firstBadSteps } from "./algorithm";
import { CODE } from "./code";

const firstBad = (n: number, bad: number) => {
  const steps = firstBadSteps({ n, bad });
  return steps[steps.length - 1].data.answer;
};

describe("firstBadSteps", () => {
  it("finds the first bad version", () => {
    expect(firstBad(5, 4)).toBe(4);
    expect(firstBad(12, 8)).toBe(8);
    expect(firstBad(1, 1)).toBe(1);
    expect(firstBad(10, 10)).toBe(10);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of firstBadSteps({ n: 12, bad: 8 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
