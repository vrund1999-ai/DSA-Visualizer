import { describe, it, expect } from "vitest";
import { heapSortSteps } from "./algorithm";
import { HEAP_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);
const last = <T>(a: T[]): T => a[a.length - 1];
const input = [5, 2, 9, 1, 7, 3, 8, 4, 6];

describe("heapSortSteps", () => {
  it("sorts ascending and descending", () => {
    expect(last(heapSortSteps(input, { order: "asc" })).data.values).toEqual(
      [...input].sort((a, b) => a - b),
    );
    expect(last(heapSortSteps(input, { order: "desc" })).data.values).toEqual(
      [...input].sort((a, b) => b - a),
    );
  });

  it("never loses or duplicates an element mid-animation", () => {
    const target = multiset(input);
    for (const s of heapSortSteps(input, { order: "asc" })) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("keeps line indices in bounds and metrics monotonic", () => {
    let comparisons = 0;
    let swaps = 0;
    for (const s of heapSortSteps(input, { order: "asc" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(HEAP_SORT_CODE.length);
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.swaps).toBeGreaterThanOrEqual(swaps);
      comparisons = s.metrics!.comparisons;
      swaps = s.metrics!.swaps;
    }
  });

  it("is deterministic and handles a single element", () => {
    expect(heapSortSteps(input)).toEqual(heapSortSteps(input));
    expect(last(heapSortSteps([42])).data.values).toEqual([42]);
  });
});
