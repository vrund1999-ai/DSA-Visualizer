import { describe, it, expect } from "vitest";
import { squaresSteps } from "./algorithm";
import { CODE } from "./code";

const squares = (nums: number[]) => {
  const steps = squaresSteps(nums);
  return steps[steps.length - 1].data.res;
};

describe("squaresSteps", () => {
  it("returns sorted squares", () => {
    expect(squares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(squares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of squaresSteps([-4, -1, 0, 3, 10])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
