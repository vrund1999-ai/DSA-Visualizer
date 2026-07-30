import type { Step } from "@/core/types";

export interface BuildTreeData {
  inorder: number[];
  postorder: number[];
  /** tree built so far, as a heap array */
  heap: (number | null)[];
  /** postorder index currently consumed */
  postIdx: number | null;
  /** inorder range [lo, hi] for the current call */
  range: [number, number] | null;
  /** inorder index of the current root */
  mid: number | null;
  answer: (number | null)[] | null;
}

export type BuildTreeStep = Step<BuildTreeData>;

/**
 * Postorder ends with the whole tree's root; its position in inorder splits the elements into the left
 * and right subtrees. Consuming postorder from the back and recursing right-subtree-first reconstructs
 * the tree. Nodes are placed into a heap array (children of i at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function buildTreeSteps(inorder: number[], postorder: number[]): BuildTreeStep[] {
  const steps: BuildTreeStep[] = [];
  const pos = new Map(inorder.map((v, i) => [v, i]));
  let p = postorder.length - 1;
  const heap: (number | null)[] = [];

  const setHeap = (idx: number, v: number) => {
    while (heap.length <= idx) heap.push(null);
    heap[idx] = v;
  };

  const snap = (o: Partial<BuildTreeData>): BuildTreeData => ({ inorder, postorder, heap: [...heap], postIdx: null, range: null, mid: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BuildTreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "The last postorder value is the root; its inorder position splits the subtrees.");

  function build(lo: number, hi: number, heapIdx: number): void {
    if (lo > hi) return;
    const val = postorder[p--];
    setHeap(heapIdx, val);
    const mid = pos.get(val)!;
    push(6, `Root ${val} (postorder). Inorder[${lo}..${hi}] splits at index ${mid}.`, { postIdx: p + 1, range: [lo, hi], mid });
    build(mid + 1, hi, 2 * heapIdx + 2);
    build(lo, mid - 1, 2 * heapIdx + 1);
  }

  build(0, inorder.length - 1, 0);
  push(12, "Tree reconstructed.", { answer: [...heap] });
  return steps;
}
