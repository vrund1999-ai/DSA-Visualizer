import { describe, it, expect } from "vitest";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";

const nextGreater = (vals: number[]) => {
  const steps = nextGreaterSteps(vals);
  return steps[steps.length - 1].data.answer;
};

describe("nextGreaterSteps", () => {
  it("finds the next strictly greater value per node", () => {
    expect(nextGreater([2, 1, 5])).toEqual([5, 5, 0]);
    expect(nextGreater([2, 7, 4, 3, 5])).toEqual([7, 0, 5, 5, 0]);
    expect(nextGreater([1, 7, 5, 1, 9, 2, 5, 1])).toEqual([7, 9, 9, 9, 0, 5, 0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextGreaterSteps([2, 7, 4, 3, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
