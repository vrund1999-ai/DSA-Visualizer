import { describe, it, expect } from "vitest";
import { quickSortSteps } from "./algorithm";
import { QUICK_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);

describe("quickSortSteps", () => {
  const input = [5, 2, 9, 1, 7, 3, 8, 4, 6];

  it("final step is fully sorted (ascending)", () => {
    const steps = quickSortSteps(input, { order: "asc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final step is fully sorted (descending)", () => {
    const steps = quickSortSteps(input, { order: "desc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => b - a));
  });

  it("never loses or duplicates an element mid-animation", () => {
    const steps = quickSortSteps(input, { order: "asc" });
    const target = multiset(input);
    for (const s of steps) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("every step's line index is within the code bounds", () => {
    const steps = quickSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(QUICK_SORT_CODE.length);
    }
  });

  it("comparisons and swaps are monotonically non-decreasing", () => {
    const steps = quickSortSteps(input, { order: "asc" });
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
    expect(quickSortSteps(input, { order: "asc" })).toEqual(
      quickSortSteps(input, { order: "asc" }),
    );
  });

  it("handles a single-element array", () => {
    const steps = quickSortSteps([42], { order: "asc" });
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[steps.length - 1].data.values).toEqual([42]);
  });

  it("handles already-sorted and reverse-sorted input", () => {
    const asc = [1, 2, 3, 4, 5, 6];
    const desc = [6, 5, 4, 3, 2, 1];
    const fromAsc = quickSortSteps(asc, { order: "asc" });
    const fromDesc = quickSortSteps(desc, { order: "asc" });
    expect(fromAsc[fromAsc.length - 1].data.values).toEqual(asc);
    expect(fromDesc[fromDesc.length - 1].data.values).toEqual(asc);
  });

  it("handles duplicate values", () => {
    const dup = [3, 1, 3, 2, 1, 3];
    const steps = quickSortSteps(dup, { order: "asc" });
    expect(steps[steps.length - 1].data.values).toEqual(
      [...dup].sort((a, b) => a - b),
    );
  });
});
