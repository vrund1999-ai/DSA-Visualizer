import { describe, it, expect } from "vitest";
import { lcaDeepestSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = lcaDeepestSteps(heap);
  const idx = steps[steps.length - 1].data.answer;
  return idx === null ? null : heap[idx];
};

describe("lcaDeepestSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])).toBe(2); // deepest leaves 7,4 -> LCA 2
    expect(solve([1])).toBe(1);
    expect(solve([0, 1, 3, null, 2])).toBe(2); // deepest leaf is 2 alone
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcaDeepestSteps([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
