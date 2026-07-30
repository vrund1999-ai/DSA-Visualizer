import { describe, it, expect } from "vitest";
import { nestedIteratorSteps, type Nested } from "./algorithm";
import { CODE } from "./code";

const solve = (nestedList: Nested[]) => {
  const steps = nestedIteratorSteps(nestedList);
  return steps[steps.length - 1].data.output;
};

describe("nestedIteratorSteps", () => {
  it("flattens depth-first", () => {
    expect(solve([[1, 1], 2, [1, 1]])).toEqual([1, 1, 2, 1, 1]);
    expect(solve([1, [4, [6]]])).toEqual([1, 4, 6]);
    expect(solve([[], [3], []])).toEqual([3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nestedIteratorSteps([[1, 1], 2, [1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
