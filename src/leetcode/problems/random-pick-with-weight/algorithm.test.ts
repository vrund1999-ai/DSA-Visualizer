import { describe, it, expect } from "vitest";
import { pickWeightSteps } from "./algorithm";
import { CODE } from "./code";

// resolve which index a given target lands on
const pickFor = (weights: number[], target: number) => {
  const steps = pickWeightSteps(weights, [target]);
  const pickStep = [...steps].reverse().find((s) => s.data.picked !== null);
  return pickStep!.data.picked;
};

describe("pickWeightSteps", () => {
  it("resolves targets to weight-proportional indices", () => {
    const w = [1, 3, 2, 4]; // prefix [1,4,6,10]
    expect(pickFor(w, 1)).toBe(0);
    expect(pickFor(w, 2)).toBe(1);
    expect(pickFor(w, 4)).toBe(1);
    expect(pickFor(w, 5)).toBe(2);
    expect(pickFor(w, 6)).toBe(2);
    expect(pickFor(w, 7)).toBe(3);
    expect(pickFor(w, 10)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pickWeightSteps([1, 3, 2, 4], [1, 4, 6, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
