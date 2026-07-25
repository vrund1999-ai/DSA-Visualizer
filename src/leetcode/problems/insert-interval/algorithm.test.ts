import { describe, it, expect } from "vitest";
import { insertIntervalSteps } from "./algorithm";
import { CODE } from "./code";

const insert = (intervals: [number, number][], nv: [number, number]) => {
  const steps = insertIntervalSteps(intervals, nv);
  return steps[steps.length - 1].data.result;
};

describe("insertIntervalSteps", () => {
  it("inserts and merges", () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
    expect(insert([], [5, 7])).toEqual([[5, 7]]);
    expect(insert([[1, 5]], [6, 8])).toEqual([[1, 5], [6, 8]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of insertIntervalSteps([[1, 2], [3, 5], [6, 7]], [4, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
