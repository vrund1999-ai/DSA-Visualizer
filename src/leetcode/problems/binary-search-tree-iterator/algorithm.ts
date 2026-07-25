import type { Step } from "@/core/types";

export interface BstIterData {
  heap: (number | null)[];
  /** stack of heap indices (top = next smallest) */
  stack: number[];
  /** index just returned by next() */
  cur: number | null;
  output: number[];
  answer: number[] | null;
}

export type BstIterStep = Step<BstIterData>;

/**
 * The iterator keeps a stack holding the unvisited left spine, so its top is always the smallest
 * remaining value. next() pops that node and then pushes the left spine of its right subtree,
 * yielding the in-order sequence one O(1)-amortized step at a time. `line` indexes CODE.
 */
export function bstIterSteps(input: (number | null)[]): BstIterStep[] {
  const steps: BstIterStep[] = [];
  const heap = [...input];
  const stack: number[] = [];
  const output: number[] = [];

  const snap = (o: Partial<BstIterData>): BstIterData => ({ heap: [...heap], stack: [...stack], cur: null, output: [...output], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BstIterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const valid = (i: number) => i < heap.length && heap[i] !== null;

  const pushLeft = (i: number) => {
    while (valid(i)) {
      stack.push(i);
      push(6, `Push ${heap[i]} onto the stack; go to its left child.`, { cur: i });
      i = 2 * i + 1;
    }
  };

  push(2, "Prime the stack with the leftmost spine (smallest values on top).");
  pushLeft(0);

  while (stack.length > 0) {
    const i = stack.pop()!;
    output.push(heap[i]!);
    push(11, `next() → ${heap[i]} (in-order position ${output.length}).`, { cur: i });
    pushLeft(2 * i + 2);
  }

  push(13, `Iterator exhausted; in-order sequence: [${output.join(", ")}].`, { answer: [...output] });
  return steps;
}
