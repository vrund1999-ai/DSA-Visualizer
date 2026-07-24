import { describe, it, expect } from "vitest";
import { removeElementsSteps } from "./algorithm";
import { CODE } from "./code";

const result = (values: number[], val: number) => {
  const steps = removeElementsSteps(values, val);
  return steps[steps.length - 1].data.values;
};

describe("removeElementsSteps", () => {
  it("removes all matching nodes", () => {
    expect(result([1, 2, 6, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5]);
    expect(result([7, 7, 7, 7], 7)).toEqual([]);
    expect(result([1, 2, 3], 4)).toEqual([1, 2, 3]);
    expect(result([], 1)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeElementsSteps([1, 2, 6, 3, 4, 5, 6], 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
