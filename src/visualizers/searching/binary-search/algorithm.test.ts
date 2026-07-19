import { describe, it, expect } from "vitest";
import { binarySearchSteps } from "./algorithm";
import { BINARY_SEARCH_CODE } from "./code";

describe("binarySearchSteps", () => {
  const values = [10, 4, 7, 1, 9, 2, 6]; // intentionally unsorted input

  it("sorts defensively and finds a present target", () => {
    const steps = binarySearchSteps({ values, target: 7 });
    const last = steps[steps.length - 1];
    const sorted = [...values].sort((a, b) => a - b);
    expect(last.data.foundIndex).toBe(sorted.indexOf(7));
    expect(last.data.values[last.data.foundIndex!]).toBe(7);
  });

  it("reports -1 when the target is absent", () => {
    const steps = binarySearchSteps({ values, target: 42 });
    expect(steps[steps.length - 1].data.foundIndex).toBe(-1);
  });

  it("finds every present element", () => {
    const sorted = [...values].sort((a, b) => a - b);
    for (const t of sorted) {
      const s = binarySearchSteps({ values, target: t });
      const last = s[s.length - 1];
      expect(last.data.values[last.data.foundIndex!]).toBe(t);
    }
  });

  it("uses at most ceil(log2(n)) + 1 comparisons", () => {
    const steps = binarySearchSteps({ values, target: 42 });
    const maxComparisons = Math.ceil(Math.log2(values.length)) + 1;
    expect(steps[steps.length - 1].metrics!.comparisons).toBeLessThanOrEqual(
      maxComparisons,
    );
  });

  it("every step's line index is within the code bounds", () => {
    const steps = binarySearchSteps({ values, target: 7 });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BINARY_SEARCH_CODE.length);
    }
  });

  it("keeps the displayed array sorted in every snapshot", () => {
    const steps = binarySearchSteps({ values, target: 7 });
    const sorted = [...values].sort((a, b) => a - b);
    for (const s of steps) expect(s.data.values).toEqual(sorted);
  });

  it("is deterministic (pure)", () => {
    expect(binarySearchSteps({ values, target: 7 })).toEqual(
      binarySearchSteps({ values, target: 7 }),
    );
  });
});
