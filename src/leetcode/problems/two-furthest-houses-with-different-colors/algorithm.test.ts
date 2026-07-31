import { describe, it, expect } from "vitest";
import { twoHousesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (colors: number[]) => {
  const steps = twoHousesSteps(colors);
  return steps[steps.length - 1].data.answer;
};

describe("twoHousesSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 1, 1, 6, 1, 1, 1])).toBe(3);
    expect(solve([1, 8, 3, 8, 3])).toBe(4);
    expect(solve([0, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoHousesSteps([1, 1, 1, 6, 1, 1, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
