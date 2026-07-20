import { describe, it, expect } from "vitest";
import { shellSortSteps } from "./algorithm";
import { SHELL_SORT_CODE } from "./code";

const multiset = (xs: number[]) => [...xs].sort((a, b) => a - b);
const last = <T>(a: T[]): T => a[a.length - 1];
const input = [5, 2, 9, 1, 7, 3, 8, 4, 6, 0];

describe("shellSortSteps", () => {
  it("sorts ascending and descending", () => {
    expect(last(shellSortSteps(input, { order: "asc" })).data.values).toEqual(
      [...input].sort((a, b) => a - b),
    );
    expect(last(shellSortSteps(input, { order: "desc" })).data.values).toEqual(
      [...input].sort((a, b) => b - a),
    );
  });

  it("never loses or duplicates an element mid-animation", () => {
    const target = multiset(input);
    for (const s of shellSortSteps(input, { order: "asc" })) {
      expect(multiset(s.data.values)).toEqual(target);
    }
  });

  it("keeps line indices in bounds and metrics monotonic", () => {
    let comparisons = 0;
    let swaps = 0;
    for (const s of shellSortSteps(input, { order: "asc" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(SHELL_SORT_CODE.length);
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(comparisons);
      expect(s.metrics!.swaps).toBeGreaterThanOrEqual(swaps);
      comparisons = s.metrics!.comparisons;
      swaps = s.metrics!.swaps;
    }
  });

  it("is deterministic and handles a single element", () => {
    expect(shellSortSteps(input)).toEqual(shellSortSteps(input));
    expect(last(shellSortSteps([42])).data.values).toEqual([42]);
  });
});
