import type { Step } from "@/core/types";

export interface MergeKData {
  /** Remaining (unmerged) values per list; heads are index 0. */
  lists: number[][];
  heap: { value: number; list: number }[];
  merged: number[];
  takenFrom: number | null;
}

export type MergeKStep = Step<MergeKData>;

/**
 * A min-heap holds the current head of each list; popping the smallest and
 * pushing that list's next head repeatedly yields the fully merged order in
 * O(N log k). (Heap shown as a sorted list of heads.) `line` indexes CODE.
 */
export function mergeKSteps(input: number[][]): MergeKStep[] {
  const lists = input.map((l) => [...l]);
  const steps: MergeKStep[] = [];
  const merged: number[] = [];
  // heap = one entry per non-empty list (its current head), kept sorted.
  const heap: { value: number; list: number }[] = [];
  const insert = (value: number, list: number) => {
    let i = heap.length;
    while (i > 0 && heap[i - 1].value > value) i--;
    heap.splice(i, 0, { value, list });
  };
  lists.forEach((l, i) => { if (l.length) insert(l[0], i); });

  const snap = (takenFrom: number | null): MergeKData => ({
    lists: lists.map((l) => [...l]),
    heap: heap.map((h) => ({ ...h })),
    merged: [...merged],
    takenFrom,
  });
  const push = (line: number, explanation: string, data: MergeKData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { merged: data.merged.length } });
  };

  push(2, "Seed a min-heap with the head of each list.", snap(null));

  while (heap.length) {
    const { value, list } = heap.shift()!;
    merged.push(value);
    lists[list].shift();
    push(6, `Take the smallest head ${value} (from list ${list}).`, snap(list));
    if (lists[list].length) insert(lists[list][0], list);
  }

  push(9, `Merged all lists: [${merged.join(", ")}].`, snap(null));
  return steps;
}
