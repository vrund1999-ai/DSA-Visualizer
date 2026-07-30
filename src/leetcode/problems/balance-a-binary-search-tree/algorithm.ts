import type { Step } from "@/core/types";

export interface BalanceBSTData {
  sorted: number[];
  /** balanced tree built so far, as a heap array */
  heap: (number | null)[];
  /** [lo, hi] range being built */
  range: [number, number] | null;
  /** index chosen as the current subtree root */
  mid: number | null;
  answer: (number | null)[] | null;
}

export type BalanceBSTStep = Step<BalanceBSTData>;

/**
 * A BST's in-order traversal is sorted, and a balanced tree results from always making the middle of a
 * range the subtree root — that halves the elements to each side. Recursing on the halves builds a
 * height-balanced BST. Nodes go into a heap array (children of i at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function balanceBSTSteps(sorted: number[]): BalanceBSTStep[] {
  const steps: BalanceBSTStep[] = [];
  const heap: (number | null)[] = [];
  const setHeap = (idx: number, v: number) => {
    while (heap.length <= idx) heap.push(null);
    heap[idx] = v;
  };

  const snap = (o: Partial<BalanceBSTData>): BalanceBSTData => ({ sorted, heap: [...heap], range: null, mid: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BalanceBSTData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `In-order values (sorted): [${sorted.join(", ")}]. Build a balanced BST middle-out.`);

  function build(lo: number, hi: number, heapIdx: number): void {
    if (lo > hi) return;
    const mid = (lo + hi) >> 1;
    setHeap(heapIdx, sorted[mid]);
    push(6, `Range [${lo}, ${hi}]: middle ${sorted[mid]} becomes this subtree's root.`, { range: [lo, hi], mid });
    build(lo, mid - 1, 2 * heapIdx + 1);
    build(mid + 1, hi, 2 * heapIdx + 2);
  }

  build(0, sorted.length - 1, 0);
  push(11, "Balanced BST built.", { answer: [...heap] });
  return steps;
}
