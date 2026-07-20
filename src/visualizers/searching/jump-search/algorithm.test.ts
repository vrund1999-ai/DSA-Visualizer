import { describe, it, expect } from "vitest";
import { jumpSearchSteps } from "./algorithm";
import { JUMP_SEARCH_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];
const values = [3, 8, 12, 15, 20, 24, 31, 40, 55, 61];

describe("jumpSearchSteps", () => {
  it("finds every present value at its sorted index", () => {
    for (const t of values) {
      const steps = jumpSearchSteps({ values, target: t });
      expect(last(steps).data.values[last(steps).data.foundIndex!]).toBe(t);
    }
  });

  it("reports -1 when absent", () => {
    expect(last(jumpSearchSteps({ values, target: 999 })).data.foundIndex).toBe(-1);
  });

  it("keeps line indices in bounds and comparisons monotonic", () => {
    let c = 0;
    for (const s of jumpSearchSteps({ values, target: 31 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(JUMP_SEARCH_CODE.length);
      expect(s.metrics!.comparisons).toBeGreaterThanOrEqual(c);
      c = s.metrics!.comparisons;
    }
  });

  it("is deterministic (pure)", () => {
    expect(jumpSearchSteps({ values, target: 20 })).toEqual(
      jumpSearchSteps({ values, target: 20 }),
    );
  });
});
