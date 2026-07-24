import { describe, it, expect } from "vitest";
import { courseOrderSteps } from "./algorithm";
import { CODE } from "./code";

const order = (numCourses: number, prereqs: [number, number][]) => {
  const steps = courseOrderSteps(numCourses, prereqs);
  return steps[steps.length - 1].data.answer;
};

// verify an order respects all prerequisites
const isValid = (n: number, prereqs: [number, number][], ord: number[]) => {
  if (ord.length !== n) return false;
  const pos = new Map(ord.map((c, i) => [c, i]));
  return prereqs.every(([a, b]) => pos.get(b)! < pos.get(a)!);
};

describe("courseOrderSteps", () => {
  it("returns a valid topological order", () => {
    expect(order(2, [[1, 0]])).toEqual([0, 1]);
    const ord = order(4, [[1, 0], [2, 0], [3, 1], [3, 2]]) as number[];
    expect(isValid(4, [[1, 0], [2, 0], [3, 1], [3, 2]], ord)).toBe(true);
  });

  it("returns [] when a cycle exists", () => {
    expect(order(2, [[1, 0], [0, 1]])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of courseOrderSteps(4, [[1, 0], [2, 0], [3, 1], [3, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
