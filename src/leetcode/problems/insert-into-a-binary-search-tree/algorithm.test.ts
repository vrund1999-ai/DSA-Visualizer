import { describe, it, expect } from "vitest";
import { insertBSTSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], val: number) => {
  const steps = insertBSTSteps(heap, val);
  return steps[steps.length - 1].data.answer!;
};

// in-order must be sorted and include val
function inorder(heap: (number | null)[]): number[] {
  const out: number[] = [];
  const rec = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    rec(2 * i + 1);
    out.push(heap[i] as number);
    rec(2 * i + 2);
  };
  rec(0);
  return out;
}

describe("insertBSTSteps", () => {
  it("inserts while preserving BST order", () => {
    const cases: [(number | null)[], number][] = [
      [[4, 2, 7, 1, 3], 5],
      [[40, 20, 60, 10, 30, 50, 70], 25],
      [[], 5],
      [[1], 2],
    ];
    for (const [heap, val] of cases) {
      const io = inorder(solve(heap, val));
      expect(io).toContain(val);
      expect(io).toEqual([...io].sort((a, b) => a - b));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of insertBSTSteps([4, 2, 7, 1, 3], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
