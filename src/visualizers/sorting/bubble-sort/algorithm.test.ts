import { describe, it, expect } from "vitest";
import { bubbleSortSteps } from "./algorithm";
import { BUBBLE_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);

describe("bubbleSortSteps", () => {
  const input = [5, 2, 9, 1, 7, 3, 8, 4, 6];

  it("final step is fully sorted (ascending)", () => {
    const steps = bubbleSortSteps(input, { order: "asc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final step is fully sorted (descending)", () => {
    const steps = bubbleSortSteps(input, { order: "desc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => b - a));
  });

  it("never loses or duplicates an element mid-animation", () => {
    const steps = bubbleSortSteps(input, { order: "asc" });
    const target = multiset(input);
    for (const s of steps) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("every step's line index is within the code bounds", () => {
    const steps = bubbleSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BUBBLE_SORT_CODE.length);
    }
  });

  it("comparisons and swaps are monotonically non-decreasing", () => {
    const steps = bubbleSortSteps(input, { order: "asc" });
    let comparisons = 0;
    let swaps = 0;
    for (const s of steps) {
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.swaps).toBeGreaterThanOrEqual(swaps);
      comparisons = s.metrics!.comparisons;
      swaps = s.metrics!.swaps;
    }
  });

  it("is deterministic (pure)", () => {
    expect(bubbleSortSteps(input, { order: "asc" })).toEqual(
      bubbleSortSteps(input, { order: "asc" }),
    );
  });

  it("exits early on already-sorted input", () => {
    const sorted = [1, 2, 3, 4, 5];
    const steps = bubbleSortSteps(sorted, { order: "asc" });
    // One pass of comparisons, no swaps.
    expect(steps[steps.length - 1].metrics!.swaps).toBe(0);
  });

  it("handles a single-element array", () => {
    const steps = bubbleSortSteps([42], { order: "asc" });
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[steps.length - 1].data.values).toEqual([42]);
  });
});
