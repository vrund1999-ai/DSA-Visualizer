import { describe, it, expect } from "vitest";
import { selectionSortSteps } from "./algorithm";
import { SELECTION_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);

describe("selectionSortSteps", () => {
  const input = [5, 2, 9, 1, 7, 3, 8, 4, 6];

  it("final step is fully sorted (ascending)", () => {
    const steps = selectionSortSteps(input, { order: "asc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final step is fully sorted (descending)", () => {
    const steps = selectionSortSteps(input, { order: "desc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => b - a));
  });

  it("never loses or duplicates an element mid-animation", () => {
    const steps = selectionSortSteps(input, { order: "asc" });
    const target = multiset(input);
    for (const s of steps) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("every step's line index is within the code bounds", () => {
    const steps = selectionSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(SELECTION_SORT_CODE.length);
    }
  });

  it("comparisons and swaps are monotonically non-decreasing", () => {
    const steps = selectionSortSteps(input, { order: "asc" });
    let comparisons = 0;
    let swaps = 0;
    for (const s of steps) {
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.swaps).toBeGreaterThanOrEqual(swaps);
      comparisons = s.metrics!.comparisons;
      swaps = s.metrics!.swaps;
    }
  });

  it("performs at most n-1 swaps", () => {
    const steps = selectionSortSteps(input, { order: "asc" });
    expect(steps[steps.length - 1].metrics!.swaps).toBeLessThanOrEqual(
      input.length - 1,
    );
  });

  it("is deterministic (pure)", () => {
    expect(selectionSortSteps(input, { order: "asc" })).toEqual(
      selectionSortSteps(input, { order: "asc" }),
    );
  });

  it("handles a single-element array", () => {
    const steps = selectionSortSteps([42], { order: "asc" });
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[steps.length - 1].data.values).toEqual([42]);
  });
});
