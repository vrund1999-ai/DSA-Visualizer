import { describe, it, expect } from "vitest";
import { robTreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = robTreeSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("robTreeSteps", () => {
  it("computes the maximum robbed amount", () => {
    expect(solve([3, 2, 3, null, 3, null, 1])).toBe(7);
    expect(solve([3, 4, 5, 1, 3, null, 1])).toBe(9);
    expect(solve([1])).toBe(1);
    expect(solve([2, 1, 3, null, 4])).toBe(7);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of robTreeSteps([3, 2, 3, null, 3, null, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
