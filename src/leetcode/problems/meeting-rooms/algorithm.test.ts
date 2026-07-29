import { describe, it, expect } from "vitest";
import { meetingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (intervals: number[][]) => {
  const steps = meetingSteps(intervals);
  return steps[steps.length - 1].data.answer;
};

describe("meetingSteps", () => {
  it("detects whether all meetings can be attended", () => {
    expect(solve([[0, 30], [5, 10], [15, 20]])).toBe(false);
    expect(solve([[7, 10], [2, 4]])).toBe(true);
    expect(solve([[5, 8], [6, 8]])).toBe(false);
    expect(solve([[1, 5]])).toBe(true);
    expect(solve([[1, 2], [2, 3], [3, 4]])).toBe(true);
  });

  it("does not mutate the caller's array", () => {
    const input = [[3, 4], [1, 2]];
    meetingSteps(input);
    expect(input).toEqual([[3, 4], [1, 2]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of meetingSteps([[0, 30], [5, 10], [15, 20]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
