import { describe, it, expect } from "vitest";
import { searchBstSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], val: number) => {
  const steps = searchBstSteps(heap, val);
  const last = steps[steps.length - 1].data;
  return last.found === null ? null : heap[last.found];
};

describe("searchBstSteps", () => {
  it("finds an existing value", () => {
    expect(solve([4, 2, 7, 1, 3], 2)).toBe(2);
    expect(solve([4, 2, 7, 1, 3], 3)).toBe(3);
  });

  it("returns null when absent", () => {
    expect(solve([4, 2, 7, 1, 3], 5)).toBe(null);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of searchBstSteps([4, 2, 7, 1, 3], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
