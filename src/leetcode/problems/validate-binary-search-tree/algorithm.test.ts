import { describe, it, expect } from "vitest";
import { bstSteps } from "./algorithm";
import { CODE } from "./code";

const isValid = (heap: (number | null)[]) => {
  const steps = bstSteps(heap);
  return steps[steps.length - 1].data.result;
};

describe("bstSteps", () => {
  it("accepts a valid BST", () => {
    expect(isValid([5, 3, 8, 2, 4, 7, 9])).toBe(true);
    expect(isValid([2, 1, 3])).toBe(true);
  });

  it("rejects an out-of-order root", () => {
    // 5 with children 1 and 4 — 4 in the right subtree is < 5.
    expect(isValid([5, 1, 4, null, null, 3, 6])).toBe(false);
  });

  it("rejects a deep bound violation", () => {
    // Right child 3 is inside root's right subtree but < root 5.
    expect(isValid([5, 4, 6, null, null, 3, 7])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bstSteps([5, 3, 8, 2, 4, 7, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
