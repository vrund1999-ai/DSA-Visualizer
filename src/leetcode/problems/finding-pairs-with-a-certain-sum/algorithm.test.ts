import { describe, it, expect } from "vitest";
import { findPairsSteps, type FindPairsOp } from "./algorithm";
import { CODE } from "./code";

const counts = (nums1: number[], nums2: number[], ops: FindPairsOp[]) => {
  const steps = findPairsSteps(nums1, nums2, ops);
  return steps[steps.length - 1].data.answers.filter((a): a is number => a !== null);
};

describe("findPairsSteps", () => {
  it("matches the canonical example", () => {
    expect(
      counts([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4], [
        { type: "count", tot: 7 },
        { type: "add", index: 3, val: 2 },
        { type: "count", tot: 8 },
        { type: "count", tot: 4 },
      ]),
    ).toEqual([8, 2, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = findPairsSteps([1], [1], [{ type: "count", tot: 2 }]);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
