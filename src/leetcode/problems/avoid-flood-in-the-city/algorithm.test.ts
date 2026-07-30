import { describe, it, expect } from "vitest";
import { floodSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (rains: number[]) => {
  const steps = floodSteps(rains);
  return steps[steps.length - 1].data;
};

/** validate a returned plan actually avoids flooding. */
const isValid = (rains: number[], ans: number[]) => {
  if (ans.length !== rains.length) return false;
  const full = new Set<number>();
  for (let i = 0; i < rains.length; i++) {
    if (rains[i] > 0) {
      if (ans[i] !== -1) return false;
      if (full.has(rains[i])) return false;
      full.add(rains[i]);
    } else {
      if (ans[i] < 1) return false;
      full.delete(ans[i]);
    }
  }
  return true;
};

describe("floodSteps", () => {
  it("returns a valid flood-free plan when possible", () => {
    for (const rains of [[1, 2, 3, 4], [1, 2, 0, 0, 2, 1], [1, 0, 2, 0, 2, 1]]) {
      const { ans, flooded } = solve(rains);
      expect(flooded).toBe(false);
      expect(isValid(rains, ans)).toBe(true);
    }
  });

  it("returns [] when a flood is unavoidable", () => {
    const { ans, flooded } = solve([1, 2, 0, 1, 2]);
    expect(flooded).toBe(true);
    expect(ans).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of floodSteps([1, 2, 0, 0, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
