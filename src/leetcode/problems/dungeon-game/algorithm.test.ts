import { describe, it, expect } from "vitest";
import { dungeonSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (d: number[][]) => {
  const steps = dungeonSteps(d);
  return steps[steps.length - 1].data.answer;
};

describe("dungeonSteps", () => {
  it("computes the minimum starting health", () => {
    expect(solve([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])).toBe(7);
    expect(solve([[0]])).toBe(1);
    expect(solve([[100]])).toBe(1);
    expect(solve([[-3]])).toBe(4);
    expect(solve([[1, -3, 3], [0, -2, 0], [-3, -3, -3]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dungeonSteps([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
