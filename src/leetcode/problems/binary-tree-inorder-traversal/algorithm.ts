import type { Step } from "@/core/types";

export interface InorderData {
  heap: (number | null)[];
  current: number | null;
  stack: number[];
  visited: number[];
  result: number[];
}

export type InorderStep = Step<InorderData>;

const has = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * Iterative in-order with an explicit stack: push the whole left spine, then pop
 * and record a node before turning to its right subtree. This yields left → node
 * → right order. `line` indexes CODE.
 */
export function inorderSteps(heap: (number | null)[]): InorderStep[] {
  const steps: InorderStep[] = [];
  const stack: number[] = [];
  const visited: number[] = [];
  const result: number[] = [];

  const snap = (line: number, explanation: string, current: number | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { heap: [...heap], current, stack: [...stack], visited: [...visited], result: [...result] },
      highlights: [],
    });
  };

  let node: number | null = has(heap, 0) ? 0 : null;
  snap(2, "Traverse left → node → right using a stack.", node);

  while (node !== null || stack.length) {
    while (node !== null) {
      stack.push(node);
      snap(5, `Push ${heap[node]} and go left.`, node);
      node = has(heap, 2 * node + 1) ? 2 * node + 1 : null;
    }
    node = stack.pop()!;
    visited.push(node);
    result.push(heap[node] as number);
    snap(8, `Pop ${heap[node]} and record it.`, node);
    node = has(heap, 2 * node + 2) ? 2 * node + 2 : null;
  }

  snap(11, `In-order traversal: [${result.join(", ")}].`, null);
  return steps;
}
