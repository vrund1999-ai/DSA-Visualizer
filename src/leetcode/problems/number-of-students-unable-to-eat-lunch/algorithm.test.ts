import { describe, it, expect } from "vitest";
import { lunchSteps } from "./algorithm";
import { CODE } from "./code";

const stuck = (students: number[], sandwiches: number[]) => {
  const steps = lunchSteps(students, sandwiches);
  return steps[steps.length - 1].data.answer;
};

describe("lunchSteps", () => {
  it("counts students unable to eat", () => {
    expect(stuck([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
    expect(stuck([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
    expect(stuck([0, 0], [1, 1])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lunchSteps([1, 1, 0, 0], [0, 1, 0, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
