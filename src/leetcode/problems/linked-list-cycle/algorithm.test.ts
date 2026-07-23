import { describe, it, expect } from "vitest";
import { cycleSteps } from "./algorithm";
import { CODE } from "./code";

const hasCycle = (values: number[], pos: number) => {
  const steps = cycleSteps({ values, pos });
  return steps[steps.length - 1].data.result;
};

describe("cycleSteps", () => {
  it("detects a cycle", () => {
    expect(hasCycle([3, 2, 0, -4], 1)).toBe(true);
    expect(hasCycle([1, 2], 0)).toBe(true);
  });

  it("returns false with no cycle", () => {
    expect(hasCycle([1, 2, 3], -1)).toBe(false);
    expect(hasCycle([1], -1)).toBe(false);
    expect(hasCycle([], -1)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cycleSteps({ values: [3, 2, 0, -4], pos: 1 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
