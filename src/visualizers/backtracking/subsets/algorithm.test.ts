import { describe, it, expect } from "vitest";
import { subsetsSteps } from "./algorithm";
import { SUBSETS_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];

describe("subsetsSteps", () => {
  it("produces exactly 2^n distinct subsets", () => {
    for (const els of [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]) {
      const subsets = last(subsetsSteps(els)).data.subsets;
      expect(subsets).toHaveLength(2 ** els.length);
      const keys = new Set(subsets.map((s) => s.join(",")));
      expect(keys.size).toBe(2 ** els.length);
    }
  });

  it("includes the empty set and the full set", () => {
    const subsets = last(subsetsSteps([1, 2, 3])).data.subsets;
    expect(subsets.some((s) => s.length === 0)).toBe(true);
    expect(subsets.some((s) => s.join(",") === "1,2,3")).toBe(true);
  });

  it("every emitted subset is a subset of the input", () => {
    const els = [4, 7, 9];
    const set = new Set(els);
    for (const s of last(subsetsSteps(els)).data.subsets) {
      for (const v of s) expect(set.has(v)).toBe(true);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of subsetsSteps([1, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(SUBSETS_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(subsetsSteps([1, 2, 3])).toEqual(subsetsSteps([1, 2, 3]));
  });
});
