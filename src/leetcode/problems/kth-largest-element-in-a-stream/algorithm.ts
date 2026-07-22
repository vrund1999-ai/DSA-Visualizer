import type { Step } from "@/core/types";

export interface KthStreamInput {
  k: number;
  initial: number[];
  adds: number[];
}

export interface KthStreamData {
  k: number;
  heap: number[];
  added: number | null;
  popped: number | null;
  answer: number | null;
}

export type KthStreamStep = Step<KthStreamData>;

/**
 * Maintain a min-heap holding only the k largest values seen. Adding pushes the
 * value and, if the heap grew past k, pops the smallest — so the heap's minimum
 * is always the kth largest. (Shown as a sorted list, min first.) `line` indexes
 * CODE.
 */
export function kthStreamSteps(input: KthStreamInput): KthStreamStep[] {
  const { k, initial, adds } = input;
  const steps: KthStreamStep[] = [];
  const heap: number[] = []; // sorted ascending; heap[0] = min

  const insert = (x: number) => {
    let i = heap.length;
    while (i > 0 && heap[i - 1] > x) i--;
    heap.splice(i, 0, x);
  };

  const snap = (o: Partial<KthStreamData>): KthStreamData => ({
    k,
    heap: [...heap],
    added: null,
    popped: null,
    answer: heap.length >= k ? heap[0] : null,
    ...o,
  });
  const push = (line: number, explanation: string, data: KthStreamData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const add = (val: number, viaConstructor: boolean) => {
    insert(val);
    let popped: number | null = null;
    if (heap.length > k) popped = heap.shift() ?? null;
    const answer = heap.length >= k ? heap[0] : null;
    push(viaConstructor ? 4 : 9, `${viaConstructor ? "init " : "add("}${val}${viaConstructor ? "" : ")"} → ${popped !== null ? `drop ${popped}; ` : ""}kth largest = ${answer ?? "—"}.`, snap({ added: val, popped, answer }));
  };

  push(3, `new KthLargest(${k}, [${initial.join(", ")}]) — keep the ${k} largest in a min-heap.`, snap({}));
  for (const x of initial) add(x, true);
  for (const x of adds) add(x, false);
  return steps;
}
