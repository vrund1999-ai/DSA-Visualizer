import { describe, it, expect } from "vitest";
import { mergeSortSteps } from "./algorithm";
import { MERGE_SORT_CODE } from "./code";

describe("mergeSortSteps", () => {
  const input = [5, 2, 9, 1, 7, 3, 8, 4, 6, 0];

  it("final step is fully sorted (ascending)", () => {
    const steps = mergeSortSteps(input, { order: "asc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final step is fully sorted (descending)", () => {
    const steps = mergeSortSteps(input, { order: "desc" });
    const last = steps[steps.length - 1];
    expect(last.data.values).toEqual([...input].sort((a, b) => b - a));
  });

  // Merge sort is not in-place: it merges from an auxiliary buffer, so a slot
  // can be overwritten before its source slot is consumed. Transient snapshots
  // may therefore contain duplicates — the multiset is only guaranteed to be a
  // permutation of the input at the end (covered by the "fully sorted" tests).
  it("preserves the array length in every snapshot", () => {
    const steps = mergeSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.data.values).toHaveLength(input.length);
    }
  });

  it("uses only values drawn from the input at every snapshot", () => {
    const steps = mergeSortSteps(input, { order: "asc" });
    const allowed = new Set(input);
    for (const s of steps) {
      for (const v of s.data.values) expect(allowed.has(v)).toBe(true);
    }
  });

  it("every step's line index is within the code bounds", () => {
    const steps = mergeSortSteps(input, { order: "asc" });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(MERGE_SORT_CODE.length);
    }
  });

  it("comparisons and writes are monotonically non-decreasing", () => {
    const steps = mergeSortSteps(input, { order: "asc" });
    let comparisons = 0;
    let writes = 0;
    for (const s of steps) {
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.writes).toBeGreaterThanOrEqual(writes);
      comparisons = s.metrics!.comparisons;
      writes = s.metrics!.writes;
    }
  });

  it("is deterministic (pure)", () => {
    expect(mergeSortSteps(input, { order: "asc" })).toEqual(
      mergeSortSteps(input, { order: "asc" }),
    );
  });

  it("handles a single-element array", () => {
    const steps = mergeSortSteps([42], { order: "asc" });
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[steps.length - 1].data.values).toEqual([42]);
  });

  it("handles duplicate values", () => {
    const dup = [3, 1, 3, 2, 1, 3];
    const steps = mergeSortSteps(dup, { order: "asc" });
    expect(steps[steps.length - 1].data.values).toEqual(
      [...dup].sort((a, b) => a - b),
    );
  });
});
