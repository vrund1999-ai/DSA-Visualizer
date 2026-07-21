import { describe, it, expect } from "vitest";
import { reverseSteps } from "./algorithm";
import { CODE } from "./code";

describe("reverseSteps", () => {
  it("reverses every node into the prev-chain", () => {
    const steps = reverseSteps([1, 2, 3, 4, 5]);
    const last = steps[steps.length - 1].data;
    expect(last.reversedCount).toBe(5);
    expect(last.values.slice(0, last.reversedCount).reverse()).toEqual([5, 4, 3, 2, 1]);
  });

  it("handles the empty list", () => {
    const steps = reverseSteps([]);
    expect(steps[steps.length - 1].data.reversedCount).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseSteps([1, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
