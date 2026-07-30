import { describe, it, expect } from "vitest";
import { envelopeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (env: number[][]) => {
  const steps = envelopeSteps(env);
  return steps[steps.length - 1].data.answer;
};

describe("envelopeSteps", () => {
  it("computes the maximum nesting", () => {
    expect(solve([[5, 4], [6, 4], [6, 7], [2, 3]])).toBe(3);
    expect(solve([[1, 1], [1, 1], [1, 1]])).toBe(1);
    expect(solve([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]])).toBe(4);
    expect(solve([[1, 1]])).toBe(1);
  });

  it("does not mutate the caller's array", () => {
    const env = [[5, 4], [2, 3]];
    envelopeSteps(env);
    expect(env).toEqual([[5, 4], [2, 3]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of envelopeSteps([[5, 4], [6, 4], [6, 7], [2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
