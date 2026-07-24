import { describe, it, expect } from "vitest";
import { reverseKSteps } from "./algorithm";
import { CODE } from "./code";

const reverseK = (values: number[], k: number) => {
  const steps = reverseKSteps(values, k);
  return steps[steps.length - 1].data.order;
};

describe("reverseKSteps", () => {
  it("reverses full groups and leaves the short tail", () => {
    expect(reverseK([1, 2, 3, 4, 5], 2)).toEqual([2, 1, 4, 3, 5]);
    expect(reverseK([1, 2, 3, 4, 5], 3)).toEqual([3, 2, 1, 4, 5]);
    expect(reverseK([1, 2, 3, 4], 4)).toEqual([4, 3, 2, 1]);
    expect(reverseK([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseKSteps([1, 2, 3, 4, 5], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
