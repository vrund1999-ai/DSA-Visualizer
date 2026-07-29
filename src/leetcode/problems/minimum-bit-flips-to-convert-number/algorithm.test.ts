import { describe, it, expect } from "vitest";
import { bitFlipsSteps } from "./algorithm";
import { CODE } from "./code";

const flips = (start: number, goal: number) => {
  const steps = bitFlipsSteps(start, goal);
  return steps[steps.length - 1].data.answer;
};

describe("bitFlipsSteps", () => {
  it("counts differing bits", () => {
    expect(flips(10, 7)).toBe(3);
    expect(flips(3, 4)).toBe(3);
    expect(flips(5, 5)).toBe(0);
    expect(flips(0, 15)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bitFlipsSteps(10, 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
