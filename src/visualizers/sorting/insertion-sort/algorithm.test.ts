import { describe, it, expect } from "vitest";
import { insertionSortSteps } from "./algorithm";
import { INSERTION_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);

describe("insertionSortSteps", () => {
  const input = [5, 2, 9, 1, 7, 3, 8, 4, 6];

  it("final step is fully sorted (ascending)", () => {
    const steps = insertionSortSteps(input, { order: "asc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final step is fully sorted (descending)", () => {
    const steps = insertionSortSteps(input, { order: "desc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => b - a));
  });

  it("never loses or duplicates an element mid-animation", () => {
    const steps = insertionSortSteps(input, { order: "asc" });
    const target = multiset(input);
    for (const s of steps) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("every step's line index is within the code bounds", () => {
    const steps = insertionSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(INSERTION_SORT_CODE.length);
    }
  });

  it("comparisons and swaps are monotonically non-decreasing", () => {
    const steps = insertionSortSteps(input, { order: "asc" });
    let comparisons = 0;
    let swaps = 0;
    for (const s of steps) {
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.swaps).toBeGreaterThanOrEqual(swaps);
      comparisons = s.metrics!.comparisons;
      swaps = s.metrics!.swaps;
    }
  });

  it("does zero swaps on already-sorted input", () => {
    const sorted = [1, 2, 3, 4, 5];
    const steps = insertionSortSteps(sorted, { order: "asc" });
    expect(steps[steps.length - 1].metrics!.swaps).toBe(0);
  });

  it("is deterministic (pure)", () => {
    expect(insertionSortSteps(input, { order: "asc" })).toEqual(
      insertionSortSteps(input, { order: "asc" }),
    );
  });

  it("handles a single-element array", () => {
    const steps = insertionSortSteps([42], { order: "asc" });
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[steps.length - 1].data.values).toEqual([42]);
  });
});
