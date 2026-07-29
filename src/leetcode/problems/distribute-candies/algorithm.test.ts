import { describe, it, expect } from "vitest";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";

const maxTypes = (candyType: number[]) => {
  const steps = candiesSteps(candyType);
  return steps[steps.length - 1].data.answer;
};

describe("candiesSteps", () => {
  it("maximizes distinct candy types within the half limit", () => {
    expect(maxTypes([1, 1, 2, 2, 3, 3])).toBe(3);
    expect(maxTypes([1, 1, 2, 3])).toBe(2);
    expect(maxTypes([6, 6, 6, 6])).toBe(1);
    expect(maxTypes([1, 2, 3, 4, 5, 6])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candiesSteps([1, 1, 2, 2, 3, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
