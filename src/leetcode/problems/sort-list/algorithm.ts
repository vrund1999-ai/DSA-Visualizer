import type { Step } from "@/core/types";

export interface SortListData {
  values: number[];
  /** [lo, hi) of the run currently being merged */
  range: [number, number] | null;
  /** indices written this merge */
  writing: number[];
  wrote: number | null;
  sorted: boolean;
}

export type SortListStep = Step<SortListData>;

/**
 * Merge sort is the natural O(n log n) list sort. To keep the whole sequence visible
 * we run the equivalent bottom-up merge over one buffer, merging runs of width 1, 2,
 * 4, … `line` indexes CODE (the recursive split/merge shown).
 */
export function sortListSteps(input: number[]): SortListStep[] {
  const steps: SortListStep[] = [];
  const values = [...input];
  const n = values.length;

  const snap = (o: Partial<SortListData>): SortListData => ({ values: [...values], range: null, writing: [], wrote: null, sorted: false, ...o });
  const push = (line: number, explanation: string, data: SortListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, "Merge sort: split into halves, sort each, merge.", snap({}));

  for (let width = 1; width < n; width *= 2) {
    for (let lo = 0; lo < n; lo += 2 * width) {
      const mid = Math.min(lo + width, n);
      const hi = Math.min(lo + 2 * width, n);
      if (mid >= hi) continue;
      const left = values.slice(lo, mid);
      const right = values.slice(mid, hi);
      push(9, `Merge [${left.join(", ")}] and [${right.join(", ")}].`, snap({ range: [lo, hi] }));
      let i = 0;
      let j = 0;
      let k = lo;
      const writing: number[] = [];
      while (i < left.length && j < right.length) {
        values[k] = left[i] <= right[j] ? left[i++] : right[j++];
        writing.push(k);
        push(9, `Write ${values[k]} at position ${k}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k }));
        k++;
      }
      while (i < left.length) { values[k] = left[i++]; writing.push(k); push(9, `Carry ${values[k]}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k })); k++; }
      while (j < right.length) { values[k] = right[j++]; writing.push(k); push(9, `Carry ${values[k]}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k })); k++; }
    }
  }

  push(9, `Sorted list: [${values.join(", ")}].`, snap({ sorted: true }));
  return steps;
}
