import { describe, it, expect } from "vitest";
import { courseSteps } from "./algorithm";
import { CODE } from "./code";

const canFinish = (numCourses: number, prerequisites: [number, number][]) => {
  const steps = courseSteps({ numCourses, prerequisites });
  return steps[steps.length - 1].data.result;
};

describe("courseSteps", () => {
  it("returns true when there is no cycle", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
    expect(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
  });

  it("returns false when a cycle exists", () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    expect(canFinish(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of courseSteps({ numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
