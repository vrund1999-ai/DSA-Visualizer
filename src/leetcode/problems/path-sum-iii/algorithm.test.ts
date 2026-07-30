import { describe, it, expect } from "vitest";
import { pathSum3Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], target: number) => {
  const steps = pathSum3Steps(heap, target);
  return steps[steps.length - 1].data.answer;
};

// Brute reference: all downward paths.
function brute(heap: (number | null)[], target: number): number {
  let count = 0;
  const paths = (i: number, acc: number[]) => {
    if (i >= heap.length || heap[i] === null) return;
    const next = [...acc, heap[i] as number];
    let sum = 0;
    for (let k = next.length - 1; k >= 0; k--) {
      sum += next[k];
      if (sum === target) count++;
    }
    paths(2 * i + 1, next);
    paths(2 * i + 2, next);
  };
  paths(0, []);
  return count;
}

describe("pathSum3Steps", () => {
  it("counts downward paths summing to target", () => {
    const cases: [(number | null)[], number][] = [
      [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8],
      [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22],
      [[1], 1],
      [[1, 2, 3], 3],
      [[0, 0, 0], 0],
    ];
    for (const [heap, t] of cases) expect(solve(heap, t)).toBe(brute(heap, t));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pathSum3Steps([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
