import { describe, it, expect } from "vitest";
import { bottomLeftSteps } from "./algorithm";
import { CODE } from "./code";

const bottomLeft = (heap: (number | null)[]) => {
  const steps = bottomLeftSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("bottomLeftSteps", () => {
  it("finds the deepest-level leftmost value", () => {
    expect(bottomLeft([2, 1, 3])).toBe(1);
    expect(bottomLeft([1, 2, 3, 4, null, 5, 6, null, null, null, null, 7])).toBe(7);
    expect(bottomLeft([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bottomLeftSteps([1, 2, 3, 4, null, 5, 6, null, null, null, null, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
