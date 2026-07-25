import { describe, it, expect } from "vitest";
import { trimBSTSteps } from "./algorithm";
import { CODE } from "./code";

const kept = (heap: (number | null)[], low: number, high: number) => {
  const steps = trimBSTSteps(heap, low, high);
  const { kept } = steps[steps.length - 1].data;
  return kept.map((i) => heap[i]).sort((a, b) => (a as number) - (b as number));
};

describe("trimBSTSteps", () => {
  it("keeps exactly the in-range nodes", () => {
    expect(kept([1, 0, 2], 1, 2)).toEqual([1, 2]);
    expect(kept([2, 1, 3], 1, 3)).toEqual([1, 2, 3]);
    expect(kept([3, 1, 4, null, 2], 2, 4)).toEqual([2, 3, 4]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of trimBSTSteps([3, 1, 4, null, 2], 2, 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
