import { describe, it, expect } from "vitest";
import { groupSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (groupSizes: number[]) => {
  const steps = groupSteps(groupSizes);
  return steps[steps.length - 1].data.answer!;
};

const valid = (groupSizes: number[], groups: number[][]) => {
  const seen = new Set<number>();
  for (const g of groups) {
    for (const p of g) {
      if (seen.has(p) || groupSizes[p] !== g.length) return false;
      seen.add(p);
    }
  }
  return seen.size === groupSizes.length;
};

describe("groupSteps", () => {
  it("partitions people into correctly sized groups", () => {
    for (const gs of [[3, 3, 3, 3, 3, 1, 3], [2, 1, 3, 3, 3, 2], [1, 1, 1], [4, 4, 4, 4]]) {
      expect(valid(gs, solve(gs))).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of groupSteps([3, 3, 3, 3, 3, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
