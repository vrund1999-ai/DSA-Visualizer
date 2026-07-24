import { describe, it, expect } from "vitest";
import { powerValueSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (lo: number, hi: number, k: number) => {
  const steps = powerValueSteps(lo, hi, k);
  return steps[steps.length - 1].data.answer;
};

describe("powerValueSteps", () => {
  it("returns the kth integer ordered by power then value", () => {
    expect(kth(12, 15, 2)).toBe(13);
    expect(kth(1, 1, 1)).toBe(1);
    expect(kth(7, 11, 4)).toBe(7);
    expect(kth(10, 20, 5)).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powerValueSteps(12, 15, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
