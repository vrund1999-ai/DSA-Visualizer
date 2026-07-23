import { describe, it, expect } from "vitest";
import { gasSteps } from "./algorithm";
import { CODE } from "./code";

const start = (gas: number[], cost: number[]) => {
  const steps = gasSteps({ gas, cost });
  return steps[steps.length - 1].data.answer;
};

describe("gasSteps", () => {
  it("finds a valid starting station", () => {
    expect(start([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
    expect(start([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])).toBe(4);
  });

  it("returns -1 when impossible", () => {
    expect(start([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of gasSteps({ gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
