import { describe, it, expect } from "vitest";
import { boatsSteps } from "./algorithm";
import { CODE } from "./code";

const boats = (people: number[], limit: number) => {
  const steps = boatsSteps(people, limit);
  return steps[steps.length - 1].data.answer;
};

describe("boatsSteps", () => {
  it("counts the minimum boats", () => {
    expect(boats([1, 2], 3)).toBe(1);
    expect(boats([3, 2, 2, 1], 3)).toBe(3);
    expect(boats([3, 5, 3, 4], 5)).toBe(4);
    expect(boats([5, 1, 4, 2], 6)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of boatsSteps([3, 2, 2, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
