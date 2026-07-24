import type { Step } from "@/core/types";

export interface BuildTreeInput {
  preorder: number[];
  inorder: number[];
}

export interface BuildTreeData {
  preorder: number[];
  inorder: number[];
  heap: (number | null)[];
  p: number;
  midInorder: number | null;
  placed: number | null;
}

export type BuildTreeStep = Step<BuildTreeData>;

/**
 * Preorder gives the next root at each step; finding that root in inorder splits
 * the remaining values into the left subtree (before it) and right subtree
 * (after it). Recursing builds the whole tree. Nodes go into a heap array for
 * display. `line` indexes CODE.
 */
export function buildTreeSteps(input: BuildTreeInput): BuildTreeStep[] {
  const { preorder, inorder } = input;
  const pos = new Map(inorder.map((v, i) => [v, i]));
  const heap: (number | null)[] = [];
  const steps: BuildTreeStep[] = [];
  let p = 0;

  const setNode = (i: number, v: number) => {
    while (heap.length <= i) heap.push(null);
    heap[i] = v;
  };
  const snap = (midInorder: number | null, placed: number | null): BuildTreeData => ({
    preorder: [...preorder],
    inorder: [...inorder],
    heap: [...heap],
    p,
    midInorder,
    placed,
  });
  const push = (line: number, explanation: string, data: BuildTreeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const build = (lo: number, hi: number, pos2: number) => {
    if (lo > hi) return;
    const val = preorder[p++];
    setNode(pos2, val);
    const mid = pos.get(val)!;
    push(7, `Root ${val} (from preorder). It splits inorder at index ${mid}.`, snap(mid, pos2));
    build(lo, mid - 1, 2 * pos2 + 1);
    build(mid + 1, hi, 2 * pos2 + 2);
  };

  push(2, "Preorder gives each root; inorder locates its split point.", snap(null, null));
  build(0, inorder.length - 1, 0);
  push(12, "Tree fully reconstructed.", snap(null, null));
  return steps;
}
