import { describe, it, expect } from "vitest";
import { sortPeopleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (names: string[], heights: number[]) => {
  const steps = sortPeopleSteps(names, heights);
  return steps[steps.length - 1].data.answer;
};

describe("sortPeopleSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(["Mary", "John", "Emma"], [180, 165, 170])).toEqual(["Mary", "Emma", "John"]);
    expect(solve(["Alice", "Bob", "Bob"], [155, 185, 150])).toEqual(["Bob", "Alice", "Bob"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortPeopleSteps(["Mary", "John", "Emma"], [180, 165, 170])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
