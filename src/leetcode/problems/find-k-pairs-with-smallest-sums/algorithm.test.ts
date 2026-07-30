import { describe, it, expect } from "vitest";
import { kPairsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums1: number[], nums2: number[], k: number) => {
  const steps = kPairsSteps(nums1, nums2, k);
  return steps[steps.length - 1].data.answer;
};

// Brute: all pairs sorted by sum, take k (sums must match; exact pairs can vary on ties).
const bruteSums = (nums1: number[], nums2: number[], k: number) => {
  const all: number[] = [];
  for (const a of nums1) for (const b of nums2) all.push(a + b);
  return all.sort((x, y) => x - y).slice(0, k);
};

describe("kPairsSteps", () => {
  it("returns the k smallest-sum pairs", () => {
    expect(solve([1, 7, 11], [2, 4, 6], 3)).toEqual([[1, 2], [1, 4], [1, 6]]);
    expect(solve([1, 1, 2], [1, 2, 3], 2)).toEqual([[1, 1], [1, 1]]);
  });

  it("has sums matching a brute-force ordering", () => {
    const cases: [number[], number[], number][] = [
      [[1, 7, 11], [2, 4, 6], 5],
      [[1, 2, 4, 5, 6], [3, 5, 7, 9], 7],
      [[1, 2], [3], 3],
    ];
    for (const [a, b, k] of cases) {
      const pairs = solve(a, b, k)!;
      expect(pairs.map(([x, y]) => x + y)).toEqual(bruteSums(a, b, k));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kPairsSteps([1, 7, 11], [2, 4, 6], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
