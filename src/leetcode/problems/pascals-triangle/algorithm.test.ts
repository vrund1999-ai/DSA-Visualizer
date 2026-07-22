import { describe, it, expect } from "vitest";
import { pascalSteps } from "./algorithm";
import { CODE } from "./code";

const generate = (numRows: number) => {
  const steps = pascalSteps(numRows);
  return steps[steps.length - 1].data.tri;
};

describe("pascalSteps", () => {
  it("builds Pascal's triangle", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
    expect(generate(1)).toEqual([[1]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pascalSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
