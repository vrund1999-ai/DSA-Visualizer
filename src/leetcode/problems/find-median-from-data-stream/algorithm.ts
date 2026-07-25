import type { Step } from "@/core/types";

export interface MedianData {
  /** low half (a max-heap), shown sorted ascending; top = last */
  lo: number[];
  /** high half (a min-heap), shown sorted ascending; top = first */
  hi: number[];
  /** number just added */
  added: number | null;
  median: number | null;
}

export type MedianStep = Step<MedianData>;

/**
 * Keep the smaller half in a max-heap (`lo`) and the larger half in a min-heap
 * (`hi`), with lo holding the extra element on odd counts. The median is lo's top (or
 * the average of the two tops). Heaps are modeled as sorted arrays for clarity. `line`
 * indexes CODE.
 */
export function medianSteps(stream: number[]): MedianStep[] {
  const steps: MedianStep[] = [];
  const lo: number[] = []; // ascending; max is at the end
  const hi: number[] = []; // ascending; min is at the front

  const insert = (arr: number[], x: number) => {
    let i = 0;
    while (i < arr.length && arr[i] < x) i++;
    arr.splice(i, 0, x);
  };

  const median = (): number => (lo.length > hi.length ? lo[lo.length - 1] : (lo[lo.length - 1] + hi[0]) / 2);

  const snap = (o: Partial<MedianData>): MedianData => ({ lo: [...lo], hi: [...hi], added: null, median: null, ...o });
  const push = (line: number, explanation: string, data: MedianData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Balance a max-heap (low half) and a min-heap (high half).", snap({}));

  for (const x of stream) {
    insert(lo, x);
    const moved = lo.pop()!; // largest of low
    insert(hi, moved);
    if (hi.length > lo.length) {
      insert(lo, hi.shift()!);
    }
    push(7, `Add ${x}; median = ${median()}.`, snap({ added: x, median: median() }));
  }

  return steps;
}
