import { describe, it, expect } from "vitest";
import { cycleIISteps } from "./algorithm";
import { CODE } from "./code";

const entry = (values: number[], cyclePos: number) => {
  const steps = cycleIISteps(values, cyclePos);
  return steps[steps.length - 1].data.entry;
};

describe("cycleIISteps", () => {
  it("finds the cycle entry index", () => {
    expect(entry([3, 2, 0, -4], 1)).toBe(1);
    expect(entry([1, 2], 0)).toBe(0);
    expect(entry([1], 0)).toBe(0);
  });

  it("returns null when there is no cycle", () => {
    expect(entry([1, 2, 3, 4], -1)).toBeNull();
    expect(entry([1], -1)).toBeNull();
    expect(entry([], -1)).toBeNull();
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cycleIISteps([3, 2, 0, -4], 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
