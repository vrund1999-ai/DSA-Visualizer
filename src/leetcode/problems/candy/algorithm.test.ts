import { describe, it, expect } from "vitest";
import { candySteps } from "./algorithm";
import { CODE } from "./code";

const candy = (ratings: number[]) => {
  const steps = candySteps(ratings);
  return steps[steps.length - 1].data.total;
};

describe("candySteps", () => {
  it("computes the minimum candies", () => {
    expect(candy([1, 0, 2])).toBe(5);
    expect(candy([1, 2, 2])).toBe(4);
    expect(candy([1, 0, 2, 4, 3])).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candySteps([1, 0, 2, 4, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
