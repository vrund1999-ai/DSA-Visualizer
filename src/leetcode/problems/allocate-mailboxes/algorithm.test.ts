import { describe, it, expect } from "vitest";
import { mailboxesSteps } from "./algorithm";
import { CODE } from "./code";

const minDist = (houses: number[], k: number) => {
  const steps = mailboxesSteps(houses, k);
  return steps[steps.length - 1].data.answer;
};

describe("mailboxesSteps", () => {
  it("minimizes total distance to mailboxes", () => {
    expect(minDist([1, 4, 8, 10, 20], 3)).toBe(5);
    expect(minDist([2, 3, 5, 12, 18], 2)).toBe(9);
    expect(minDist([1, 2, 3, 4], 4)).toBe(0);
    expect(minDist([7, 4, 6, 1], 1)).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mailboxesSteps([1, 4, 8, 10, 20], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
