import { describe, it, expect } from "vitest";
import { stonesSteps } from "./algorithm";
import { CODE } from "./code";

const lastStone = (stones: number[]) => {
  const steps = stonesSteps(stones);
  return steps[steps.length - 1].data.answer;
};

describe("stonesSteps", () => {
  it("simulates the stone smashing", () => {
    expect(lastStone([2, 7, 4, 1, 8, 1])).toBe(1);
    expect(lastStone([1])).toBe(1);
    expect(lastStone([3, 3])).toBe(0);
    expect(lastStone([10, 4, 2, 10])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stonesSteps([2, 7, 4, 1, 8, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
