import { describe, it, expect } from "vitest";
import { cousinsSteps } from "./algorithm";
import { CODE } from "./code";

const isCousins = (heap: (number | null)[], x: number, y: number) => {
  const steps = cousinsSteps(heap, x, y);
  return steps[steps.length - 1].data.answer;
};

describe("cousinsSteps", () => {
  it("detects cousins", () => {
    expect(isCousins([1, 2, 3, 4, null, null, 5], 4, 5)).toBe(true);
    expect(isCousins([1, 2, 3, null, 4, null, 5], 5, 4)).toBe(true);
    expect(isCousins([1, 2, 3, 4], 2, 3)).toBe(false); // siblings? no, different depth: 2,3 depth1 same parent 1
    expect(isCousins([1, 2, 3, null, 4], 2, 3)).toBe(false); // same depth, same parent
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cousinsSteps([1, 2, 3, 4, null, null, 5], 4, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
