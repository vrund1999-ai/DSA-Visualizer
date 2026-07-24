import { describe, it, expect } from "vitest";
import { rotateListSteps } from "./algorithm";
import { CODE } from "./code";

const rotate = (values: number[], k: number) => {
  const steps = rotateListSteps({ values, k });
  return steps[steps.length - 1].data.result;
};

describe("rotateListSteps", () => {
  it("rotates the list right by k", () => {
    expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(rotate([0, 1, 2], 4)).toEqual([2, 0, 1]);
    expect(rotate([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotateListSteps({ values: [1, 2, 3, 4, 5], k: 2 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
