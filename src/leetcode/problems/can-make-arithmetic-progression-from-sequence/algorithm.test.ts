import { describe, it, expect } from "vitest";
import { arithProgSteps } from "./algorithm";
import { CODE } from "./code";

const canMake = (arr: number[]) => {
  const steps = arithProgSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("arithProgSteps", () => {
  it("detects rearrangeable arithmetic progressions", () => {
    expect(canMake([3, 5, 1])).toBe(true);
    expect(canMake([1, 2, 4])).toBe(false);
    expect(canMake([1, 3])).toBe(true);
    expect(canMake([7, 1, 5, 3, 9])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of arithProgSteps([3, 5, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
