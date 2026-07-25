import { describe, it, expect } from "vitest";
import { symmetricSteps } from "./algorithm";
import { CODE } from "./code";

const count = (low: number, high: number) => {
  const steps = symmetricSteps(low, high);
  return steps[steps.length - 1].data.answer;
};

describe("symmetricSteps", () => {
  it("counts symmetric integers in a range", () => {
    expect(count(1, 100)).toBe(9);
    expect(count(1200, 1230)).toBe(4);
    expect(count(11, 11)).toBe(1);
    expect(count(1, 9)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of symmetricSteps(1200, 1230)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
