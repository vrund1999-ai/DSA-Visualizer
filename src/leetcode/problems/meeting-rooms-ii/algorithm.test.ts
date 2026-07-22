import { describe, it, expect } from "vitest";
import { meetingSteps } from "./algorithm";
import { CODE } from "./code";

const rooms = (intervals: [number, number][]) => {
  const steps = meetingSteps(intervals);
  return steps[steps.length - 1].data.maxRooms;
};

describe("meetingSteps", () => {
  it("computes the minimum rooms needed", () => {
    expect(rooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    expect(rooms([[7, 10], [2, 4]])).toBe(1);
    expect(rooms([[1, 5], [2, 6], [3, 7]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of meetingSteps([[0, 30], [5, 10], [15, 20]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
