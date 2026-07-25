import { describe, it, expect } from "vitest";
import { rabbitsSteps } from "./algorithm";
import { CODE } from "./code";

const rabbits = (answers: number[]) => {
  const steps = rabbitsSteps(answers);
  return steps[steps.length - 1].data.answer;
};

describe("rabbitsSteps", () => {
  it("computes the minimum number of rabbits", () => {
    expect(rabbits([1, 1, 2])).toBe(5);
    expect(rabbits([10, 10, 10])).toBe(11);
    expect(rabbits([0, 0, 1, 1, 1])).toBe(6);
    expect(rabbits([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rabbitsSteps([1, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
