import { describe, it, expect } from "vitest";
import { evalDivSteps } from "./algorithm";
import { CODE } from "./code";

const firstAnswer = (
  equations: [string, string][],
  values: number[],
  queries: [string, string][],
) => {
  const steps = evalDivSteps(equations, values, queries);
  return steps[steps.length - 1].data.answer;
};

describe("evalDivSteps", () => {
  it("evaluates the first query along the graph", () => {
    const eq: [string, string][] = [["a", "b"], ["b", "c"]];
    expect(firstAnswer(eq, [2, 3], [["a", "c"]])).toBeCloseTo(6);
    expect(firstAnswer(eq, [2, 3], [["b", "a"]])).toBeCloseTo(0.5);
    expect(firstAnswer(eq, [2, 3], [["a", "e"]])).toBe(-1); // unknown var
    expect(firstAnswer(eq, [2, 3], [["x", "x"]])).toBe(-1); // unknown var
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const eq: [string, string][] = [["a", "b"], ["b", "c"]];
    for (const s of evalDivSteps(eq, [2, 3], [["a", "c"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
