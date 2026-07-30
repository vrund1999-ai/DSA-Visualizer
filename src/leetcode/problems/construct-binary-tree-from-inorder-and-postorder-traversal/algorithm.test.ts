import { describe, it, expect } from "vitest";
import { buildTreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (inorder: number[], postorder: number[]) => {
  const steps = buildTreeSteps(inorder, postorder);
  return steps[steps.length - 1].data.answer;
};

// Reconstruct inorder + postorder from the heap array to verify correctness.
function traversals(heap: (number | null)[]) {
  const inorder: number[] = [];
  const postorder: number[] = [];
  const rec = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    rec(2 * i + 1);
    inorder.push(heap[i] as number);
    rec(2 * i + 2);
  };
  const recPost = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    recPost(2 * i + 1);
    recPost(2 * i + 2);
    postorder.push(heap[i] as number);
  };
  rec(0);
  recPost(0);
  return { inorder, postorder };
}

describe("buildTreeSteps", () => {
  it("reconstructs a tree consistent with both traversals", () => {
    const cases: [number[], number[]][] = [
      [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]],
      [[2, 1], [2, 1]],
      [[1, 2, 3, 4, 5, 6, 7], [1, 3, 2, 5, 7, 6, 4]],
      [[-1], [-1]],
    ];
    for (const [inorder, postorder] of cases) {
      const heap = solve(inorder, postorder)!;
      const t = traversals(heap);
      expect(t.inorder).toEqual(inorder);
      expect(t.postorder).toEqual(postorder);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of buildTreeSteps([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
