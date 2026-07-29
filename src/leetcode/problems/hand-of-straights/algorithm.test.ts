import { describe, it, expect } from "vitest";
import { straightsSteps } from "./algorithm";
import { CODE } from "./code";

const canForm = (hand: number[], groupSize: number) => {
  const steps = straightsSteps(hand, groupSize);
  return steps[steps.length - 1].data.answer;
};

describe("straightsSteps", () => {
  it("checks whether cards form consecutive groups", () => {
    expect(canForm([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
    expect(canForm([1, 2, 3, 4, 5], 4)).toBe(false);
    expect(canForm([8, 10, 12], 3)).toBe(false);
    expect(canForm([1, 1, 2, 2, 3, 3], 3)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of straightsSteps([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
