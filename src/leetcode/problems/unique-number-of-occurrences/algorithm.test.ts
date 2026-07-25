import { describe, it, expect } from "vitest";
import { uniqueOccSteps } from "./algorithm";
import { CODE } from "./code";

const unique = (arr: number[]) => {
  const steps = uniqueOccSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("uniqueOccSteps", () => {
  it("checks occurrence-count uniqueness", () => {
    expect(unique([1, 2, 2, 1, 1, 3])).toBe(true);
    expect(unique([1, 2])).toBe(false);
    expect(unique([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
    expect(unique([1])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of uniqueOccSteps([1, 2, 2, 1, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
