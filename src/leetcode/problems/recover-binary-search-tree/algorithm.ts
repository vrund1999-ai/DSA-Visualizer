import type { Step } from "@/core/types";

export interface RecoverBstData {
  heap: (number | null)[];
  /** heap index being visited in the inorder walk */
  cur: number | null;
  /** previous visited index */
  prev: number | null;
  first: number | null;
  second: number | null;
  phase: "scan" | "swap" | "done";
  answer: number[] | null;
}

export type RecoverBstStep = Step<RecoverBstData>;

/**
 * An in-order walk of a BST is sorted, so exactly one or two adjacent descents reveal the two
 * swapped nodes: `first` is the higher node of the earliest descent, `second` is the lower node of
 * the latest. Swapping their values restores the BST. `line` indexes CODE.
 */
export function recoverBstSteps(input: (number | null)[]): RecoverBstStep[] {
  const steps: RecoverBstStep[] = [];
  const heap = [...input];
  let prev: number | null = null;
  let first: number | null = null;
  let second: number | null = null;

  const snap = (o: Partial<RecoverBstData>): RecoverBstData => ({ heap: [...heap], cur: null, prev, first, second, phase: "scan", answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RecoverBstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "In-order should be sorted; find the adjacent pairs that descend.");

  const inorder = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    inorder(2 * i + 1);
    push(5, `Visit ${heap[i]}${prev !== null ? ` (prev ${heap[prev]})` : ""}.`, { cur: i });
    if (prev !== null && heap[prev]! > heap[i]!) {
      if (first === null) first = prev;
      second = i;
      push(7, `Descent ${heap[prev]} > ${heap[i]} → mark swapped candidates.`, { cur: i, first, second });
    }
    prev = i;
    inorder(2 * i + 2);
  };

  inorder(0);

  if (first !== null && second !== null) {
    const tmp = heap[first];
    heap[first] = heap[second];
    heap[second] = tmp;
    push(13, `Swap the two out-of-place values (${heap[second]} ↔ ${heap[first]}).`, { first, second, phase: "swap" });
  }

  const sorted: number[] = [];
  const collect = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    collect(2 * i + 1);
    sorted.push(heap[i]!);
    collect(2 * i + 2);
  };
  collect(0);
  push(14, `BST restored; in-order is now sorted: [${sorted.join(", ")}].`, { phase: "done", answer: sorted });
  return steps;
}
