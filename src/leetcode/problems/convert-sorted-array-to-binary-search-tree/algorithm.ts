import type { Highlight, Step } from "@/core/types";

export interface SortedBSTData {
  nums: number[];
  heap: (number | null)[];
  lo: number | null;
  hi: number | null;
  mid: number | null;
}

export type SortedBSTStep = Step<SortedBSTData>;

/**
 * Picking the middle element as the root keeps the two halves balanced, and
 * recursing on each half does the same all the way down — producing a
 * height-balanced BST. Nodes are placed into a heap array for display. `line`
 * indexes CODE.
 */
export function sortedBSTSteps(nums: number[]): SortedBSTStep[] {
  const steps: SortedBSTStep[] = [];
  const heap: (number | null)[] = [];

  const setNode = (pos: number, val: number) => {
    while (heap.length <= pos) heap.push(null);
    heap[pos] = val;
  };

  const snap = (lo: number | null, hi: number | null, mid: number | null): SortedBSTData => ({
    nums: [...nums],
    heap: [...heap],
    lo,
    hi,
    mid,
  });
  const push = (line: number, explanation: string, data: SortedBSTData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const build = (lo: number, hi: number, pos: number) => {
    if (lo > hi) return;
    const mid = (lo + hi) >> 1;
    setNode(pos, nums[mid]);
    const span: Highlight[] = [];
    for (let k = lo; k <= hi; k++) span.push({ ref: k, role: k === mid ? "target" : "active" });
    push(4, `Range [${lo}, ${hi}] → middle ${nums[mid]} becomes this subtree's root.`, snap(lo, hi, mid), span);
    build(lo, mid - 1, 2 * pos + 1);
    build(mid + 1, hi, 2 * pos + 2);
  };

  push(1, "Pick each range's middle as the root to keep the tree balanced.", snap(0, nums.length - 1, null), []);
  build(0, nums.length - 1, 0);
  push(9, "Built a height-balanced BST from the sorted array.", snap(null, null, null), []);
  return steps;
}
