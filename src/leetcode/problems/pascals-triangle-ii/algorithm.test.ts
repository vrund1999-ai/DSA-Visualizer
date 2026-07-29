import { describe, it, expect } from "vitest";
import { pascalSteps } from "./algorithm";
import { CODE } from "./code";

const getRow = (rowIndex: number) => {
  const steps = pascalSteps(rowIndex);
  return steps[steps.length - 1].data.answer;
};

describe("pascalSteps", () => {
  it("returns the requested Pascal row", () => {
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1, 1]);
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(4)).toEqual([1, 4, 6, 4, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pascalSteps(4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
