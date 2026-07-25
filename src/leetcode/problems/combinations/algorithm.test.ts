import { describe, it, expect } from "vitest";
import { combinationsSteps } from "./algorithm";
import { CODE } from "./code";

const combos = (n: number, k: number) => {
  const steps = combinationsSteps(n, k);
  return steps[steps.length - 1].data.results;
};

describe("combinationsSteps", () => {
  it("generates all k-combinations", () => {
    expect(combos(4, 2)).toEqual([
      [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4],
    ]);
    expect(combos(1, 1)).toEqual([[1]]);
    expect(combos(3, 3)).toEqual([[1, 2, 3]]);
    expect(combos(3, 0)).toEqual([[]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of combinationsSteps(4, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
