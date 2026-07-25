import { describe, it, expect } from "vitest";
import { countBitsSteps } from "./algorithm";
import { CODE } from "./code";

const countBits = (n: number) => {
  const steps = countBitsSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("countBitsSteps", () => {
  it("counts set bits for 0..n", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    expect(countBits(0)).toEqual([0]);
    expect(countBits(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countBitsSteps(8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
