import { describe, it, expect } from "vitest";
import { comboSteps } from "./algorithm";
import { CODE } from "./code";

const combos = (k: number, n: number) => {
  const steps = comboSteps(k, n);
  return steps[steps.length - 1].data.answer;
};

describe("comboSteps", () => {
  it("finds all valid combinations", () => {
    expect(combos(3, 7)).toEqual([[1, 2, 4]]);
    expect(combos(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
    expect(combos(4, 1)).toEqual([]);
    expect(combos(2, 18)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of comboSteps(3, 9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
