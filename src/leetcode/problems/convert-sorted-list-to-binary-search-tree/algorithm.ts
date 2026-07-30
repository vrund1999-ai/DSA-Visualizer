import type { Step } from "@/core/types";

export interface SortedBstData {
  nums: number[];
  heap: (number | null)[];
  /** array index chosen as the current subtree root */
  midIndex: number | null;
  /** the subrange [lo, hi] being built */
  range: [number, number] | null;
  done: boolean;
}

export type SortedBstStep = Step<SortedBstData>;

/**
 * Convert a sorted list to a height-balanced BST: the middle element becomes the subtree root and each half
 * is built recursively. We place nodes into a heap array (index i's children are 2i+1 / 2i+2) so the tree
 * renders directly. `line` indexes CODE.
 */
export function sortedBstSteps(nums: number[]): SortedBstStep[] {
  const steps: SortedBstStep[] = [];

  // dry run to size the heap array
  const placements: { value: number; index: number; lo: number; hi: number; mid: number }[] = [];
  const dry = (lo: number, hi: number, idx: number) => {
    if (lo > hi) return;
    const mid = (lo + hi) >> 1;
    placements.push({ value: nums[mid], index: idx, lo, hi, mid });
    dry(lo, mid - 1, 2 * idx + 1);
    dry(mid + 1, hi, 2 * idx + 2);
  };
  dry(0, nums.length - 1, 0);

  const maxIndex = placements.length ? Math.max(...placements.map((p) => p.index)) : 0;
  const heap: (number | null)[] = new Array(maxIndex + 1).fill(null);

  const snap = (o: Partial<SortedBstData>): SortedBstData => ({
    nums,
    heap: [...heap],
    midIndex: null,
    range: null,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SortedBstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Build a balanced BST from the sorted values by taking the middle as each subtree's root.`);

  for (const p of placements) {
    heap[p.index] = p.value;
    push(4, `Range [${p.lo}..${p.hi}] → middle index ${p.mid} (value ${p.value}) becomes a node.`, {
      midIndex: p.mid,
      range: [p.lo, p.hi],
    });
  }

  push(9, `Balanced BST built from ${nums.length} value(s).`, { done: true });
  return steps;
}
