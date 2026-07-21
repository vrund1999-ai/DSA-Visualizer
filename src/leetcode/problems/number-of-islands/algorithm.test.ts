import { describe, it, expect } from "vitest";
import { islandsSteps } from "./algorithm";
import { CODE } from "./code";

const count = (grid: string[][]) => {
  const steps = islandsSteps(grid);
  return steps[steps.length - 1].data.count;
};

describe("islandsSteps", () => {
  it("counts connected land regions", () => {
    expect(
      count([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ]),
    ).toBe(3);
  });

  it("treats one big region as a single island", () => {
    expect(
      count([
        ["1", "1", "1"],
        ["0", "1", "0"],
        ["1", "1", "1"],
      ]),
    ).toBe(1);
  });

  it("counts zero islands for all water", () => {
    expect(count([["0", "0"], ["0", "0"]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of islandsSteps([["1", "0"], ["0", "1"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
