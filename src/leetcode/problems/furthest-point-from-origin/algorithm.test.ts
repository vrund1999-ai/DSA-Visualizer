import { describe, it, expect } from "vitest";
import { furthestSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (moves: string) => {
  const steps = furthestSteps(moves);
  return steps[steps.length - 1].data.answer;
};

describe("furthestSteps", () => {
  it("computes |L - R| + wildcards", () => {
    expect(solve("L_RL__R__")).toBe(5); // L=2, R=2, wild=5 → |0|+5
    expect(solve("_R__LL_")).toBe(5);
    expect(solve("RRR_L")).toBe(3); // R=3, L=1, wild=1 → |2|+1
    expect(solve("_______")).toBe(7);
    expect(solve("LR")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of furthestSteps("_R__LL_")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
