import { describe, it, expect } from "vitest";
import { deleteNodesSteps } from "./algorithm";
import { CODE } from "./code";

const modified = (nums: number[], head: number[]) => {
  const steps = deleteNodesSteps(nums, head);
  return steps[steps.length - 1].data.answer;
};

describe("deleteNodesSteps", () => {
  it("removes nodes whose value is in the array", () => {
    expect(modified([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([4, 5]);
    expect(modified([1], [1, 2, 1, 2, 1, 2])).toEqual([2, 2, 2]);
    expect(modified([5], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(modified([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of deleteNodesSteps([1, 2, 3], [1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
