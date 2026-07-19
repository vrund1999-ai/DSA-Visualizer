import { describe, it, expect } from "vitest";
import { linearSearchSteps } from "./algorithm";
import { LINEAR_SEARCH_CODE } from "./code";

describe("linearSearchSteps", () => {
  const values = [8, 3, 5, 1, 9, 2, 7];

  it("finds a present target and reports its index", () => {
    const steps = linearSearchSteps({ values, target: 9 });
    const last = steps[steps.length - 1];
    expect(last.data.foundIndex).toBe(4);
  });

  it("reports -1 when the target is absent", () => {
    const steps = linearSearchSteps({ values, target: 42 });
    const last = steps[steps.length - 1];
    expect(last.data.foundIndex).toBe(-1);
  });

  it("finds the first occurrence with duplicates", () => {
    const steps = linearSearchSteps({ values: [4, 4, 4], target: 4 });
    expect(steps[steps.length - 1].data.foundIndex).toBe(0);
  });

  it("stops scanning once the target is found", () => {
    const steps = linearSearchSteps({ values, target: 5 });
    // index 2 found ⇒ 3 comparisons total (indices 0,1,2).
    expect(steps[steps.length - 1].metrics!.comparisons).toBe(3);
  });

  it("every step's line index is within the code bounds", () => {
    const steps = linearSearchSteps({ values, target: 9 });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(LINEAR_SEARCH_CODE.length);
    }
  });

  it("comparisons are monotonically non-decreasing", () => {
    const steps = linearSearchSteps({ values, target: 42 });
    let comparisons = 0;
    for (const s of steps) {
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      comparisons = s.metrics!.comparisons;
    }
  });

  it("is deterministic (pure)", () => {
    expect(linearSearchSteps({ values, target: 9 })).toEqual(
      linearSearchSteps({ values, target: 9 }),
    );
  });
});
