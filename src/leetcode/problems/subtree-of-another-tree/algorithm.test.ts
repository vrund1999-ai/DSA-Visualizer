import { describe, it, expect } from "vitest";
import { subtreeSteps } from "./algorithm";
import { CODE } from "./code";

const isSub = (root: (number | null)[], subRoot: (number | null)[]) => {
  const steps = subtreeSteps(root, subRoot);
  return steps[steps.length - 1].data.answer;
};

describe("subtreeSteps", () => {
  it("detects subtree matches", () => {
    expect(isSub([3, 4, 5, 1, 2], [4, 1, 2])).toBe(true);
    expect(isSub([3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2])).toBe(false);
    expect(isSub([1, 1], [1])).toBe(true);
    expect(isSub([1, 2, 3], [4])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subtreeSteps([3, 4, 5, 1, 2], [4, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
