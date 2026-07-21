import { describe, it, expect } from "vitest";
import { twoSumSteps } from "./algorithm";
import { TWO_SUM_CODE } from "./code";

describe("twoSumSteps", () => {
  it("finds the pair of indices that sum to the target", () => {
    const steps = twoSumSteps({ nums: [2, 7, 11, 15, 9], target: 20 });
    const last = steps[steps.length - 1];
    expect(last.data.status).toBe("found");
    expect(last.data.found).toEqual([2, 4]);
  });

  it("returns the first (earliest-completing) valid pair", () => {
    // 3 is stored, then at index 1 the complement 3 is already in the map.
    const steps = twoSumSteps({ nums: [3, 3], target: 6 });
    expect(steps[steps.length - 1].data.found).toEqual([0, 1]);
  });

  it("reports no solution when none exists", () => {
    const steps = twoSumSteps({ nums: [1, 2, 3], target: 100 });
    const last = steps[steps.length - 1];
    expect(last.data.status).toBe("none");
    expect(last.data.found).toBeNull();
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = twoSumSteps({ nums: [2, 7, 11, 15, 9], target: 20 });
    expect(steps.length).toBeGreaterThan(0);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(TWO_SUM_CODE.length);
    }
  });

  it("never grows the map beyond the elements scanned before the match", () => {
    const steps = twoSumSteps({ nums: [2, 7, 11, 15, 9], target: 20 });
    // Match happens at index 4; the map should hold the 4 earlier values.
    const last = steps[steps.length - 1];
    expect(last.data.map.map((e) => e.value)).toEqual([2, 7, 11, 15]);
  });
});
