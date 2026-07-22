import type { Step } from "@/core/types";

export interface KthSmallestInput {
  heap: (number | null)[];
  k: number;
}

export interface KthSmallestData {
  heap: (number | null)[];
  current: number | null;
  stack: number[];
  visited: number[];
  count: number;
  k: number;
  answer: number | null;
}

export type KthSmallestStep = Step<KthSmallestData>;

const has = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * An in-order traversal of a BST visits values in ascending order, so the kth
 * node visited is the kth smallest. This walks it iteratively with an explicit
 * stack. `line` indexes CODE.
 */
export function kthSmallestSteps(input: KthSmallestInput): KthSmallestStep[] {
  const { heap, k } = input;
  const steps: KthSmallestStep[] = [];
  const stack: number[] = [];
  const visited: number[] = [];
  let count = 0;
  let answer: number | null = null;

  const snap = (line: number, explanation: string, current: number | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { heap: [...heap], current, stack: [...stack], visited: [...visited], count, k, answer },
      highlights: [],
      metrics: { count },
    });
  };

  let node: number | null = has(heap, 0) ? 0 : null;
  snap(2, `Find the ${k}th smallest via in-order traversal.`, node);

  while (node !== null || stack.length) {
    while (node !== null) {
      stack.push(node);
      snap(4, `Go left from ${heap[node]}, stacking it.`, node);
      node = has(heap, 2 * node + 1) ? 2 * node + 1 : null;
    }
    node = stack.pop()!;
    count++;
    visited.push(node);
    if (count === k) {
      answer = heap[node] as number;
      snap(6, `Visit ${heap[node]} (#${count}) — that's the ${k}th smallest.`, node);
      return steps;
    }
    snap(6, `Visit ${heap[node]} (#${count}); not the ${k}th yet.`, node);
    node = has(heap, 2 * node + 2) ? 2 * node + 2 : null;
  }

  return steps;
}
