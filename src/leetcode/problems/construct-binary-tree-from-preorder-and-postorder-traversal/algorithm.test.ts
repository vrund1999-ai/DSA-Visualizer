import { describe, it, expect } from "vitest";
import { prePostSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (pre: number[], post: number[]) => {
  const steps = prePostSteps(pre, post);
  return steps[steps.length - 1].data.answer!;
};

function preorder(heap: (number | null)[]): number[] {
  const out: number[] = [];
  const rec = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    out.push(heap[i] as number);
    rec(2 * i + 1);
    rec(2 * i + 2);
  };
  rec(0);
  return out;
}

describe("prePostSteps", () => {
  it("reconstructs a tree matching the preorder", () => {
    const cases: [number[], number[]][] = [
      [[1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]],
      [[1], [1]],
      [[1, 2, 3], [2, 3, 1]],
    ];
    for (const [pre, post] of cases) {
      const heap = solve(pre, post);
      expect(preorder(heap)).toEqual(pre);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of prePostSteps([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
