import { describe, it, expect } from "vitest";
import { balancedSteps } from "./algorithm";
import { CODE } from "./code";

const balanced = (heap: (number | null)[]) => {
  const steps = balancedSteps(heap);
  return steps[steps.length - 1].data.result;
};

describe("balancedSteps", () => {
  it("accepts balanced trees", () => {
    expect(balanced([3, 9, 20, null, null, 15, 7])).toBe(true);
    expect(balanced([])).toBe(true);
  });

  it("rejects unbalanced trees", () => {
    // 1 with a left chain 2 -> 3 (depth 3) and no right subtree.
    expect(balanced([1, 2, null, 3, null, null, null, 4])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of balancedSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
