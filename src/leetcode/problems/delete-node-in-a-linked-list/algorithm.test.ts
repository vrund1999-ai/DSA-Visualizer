import { describe, it, expect } from "vitest";
import { deleteNodeSteps } from "./algorithm";
import { CODE } from "./code";

const finalList = (values: number[], target: number) => {
  const steps = deleteNodeSteps(values, target);
  return steps[steps.length - 1].data.values;
};

describe("deleteNodeSteps", () => {
  it("removes the target node by value", () => {
    expect(finalList([4, 5, 1, 9], 1)).toEqual([4, 1, 9]);
    expect(finalList([4, 5, 1, 9], 2)).toEqual([4, 5, 9]);
    expect(finalList([1, 2], 0)).toEqual([2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of deleteNodeSteps([4, 5, 1, 9], 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
