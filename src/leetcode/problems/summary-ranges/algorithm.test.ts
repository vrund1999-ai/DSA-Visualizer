import { describe, it, expect } from "vitest";
import { summaryRangesSteps } from "./algorithm";
import { CODE } from "./code";

const ranges = (nums: number[]) => {
  const steps = summaryRangesSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("summaryRangesSteps", () => {
  it("compresses consecutive runs", () => {
    expect(ranges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
    expect(ranges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });

  it("handles empty input", () => {
    expect(ranges([])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of summaryRangesSteps([0, 1, 2, 4, 5, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
