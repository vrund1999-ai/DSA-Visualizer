import { describe, it, expect } from "vitest";
import { interpolationSearchSteps } from "./algorithm";
import { INTERPOLATION_SEARCH_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];
const values = [3, 8, 12, 15, 20, 24, 31, 40, 55, 61];

describe("interpolationSearchSteps", () => {
  it("finds every present value at its sorted index", () => {
    for (const t of values) {
      const steps = interpolationSearchSteps({ values, target: t });
      expect(last(steps).data.values[last(steps).data.foundIndex!]).toBe(t);
    }
  });

  it("reports -1 when absent", () => {
    expect(last(interpolationSearchSteps({ values, target: 999 })).data.foundIndex).toBe(-1);
    expect(last(interpolationSearchSteps({ values, target: 13 })).data.foundIndex).toBe(-1);
  });

  it("keeps line indices in bounds and comparisons monotonic", () => {
    let c = 0;
    for (const s of interpolationSearchSteps({ values, target: 31 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(INTERPOLATION_SEARCH_CODE.length);
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(c);
      c = s.metrics!.comparisons;
    }
  });

  it("is deterministic (pure)", () => {
    expect(interpolationSearchSteps({ values, target: 20 })).toEqual(
      interpolationSearchSteps({ values, target: 20 }),
    );
  });
});
