import { describe, it, expect } from "vitest";
import { reorderSteps } from "./algorithm";
import { CODE } from "./code";

const reorder = (values: number[]) => {
  const steps = reorderSteps(values);
  return steps[steps.length - 1].data.result;
};

describe("reorderSteps", () => {
  it("reorders the list", () => {
    expect(reorder([1, 2, 3, 4])).toEqual([1, 4, 2, 3]);
    expect(reorder([1, 2, 3, 4, 5])).toEqual([1, 5, 2, 4, 3]);
    expect(reorder([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reorderSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
