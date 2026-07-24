import type { Step } from "@/core/types";

export interface SortArrayData {
  values: number[];
  /** [lo, hi) range of the segment currently being merged */
  range: [number, number] | null;
  /** indices written during the current merge */
  writing: number[];
  /** index just written */
  wrote: number | null;
  sorted: boolean;
}

export type SortArrayStep = Step<SortArrayData>;

/**
 * Bottom-up merge sort so the whole array stays visible in one buffer: merge runs of
 * width 1, 2, 4, … in place via a scratch copy, recording each write. `line` indexes
 * CODE (the recursive form shown; the visualization runs the iterative equivalent).
 */
export function sortArraySteps(input: number[]): SortArrayStep[] {
  const steps: SortArrayStep[] = [];
  const values = [...input];
  const n = values.length;

  const snap = (o: Partial<SortArrayData>): SortArrayData => ({ values: [...values], range: null, writing: [], wrote: null, sorted: false, ...o });
  const push = (line: number, explanation: string, data: SortArrayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, "Bottom-up merge sort: merge runs of width 1, 2, 4, …", snap({}));

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
        push(10, `Write ${values[k]} at index ${k}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k }));
        k++;
      }
      while (i < left.length) {
        values[k] = left[i++];
        writing.push(k);
        push(11, `Copy remaining ${values[k]} at index ${k}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k }));
        k++;
      }
      while (j < right.length) {
        values[k] = right[j++];
        writing.push(k);
        push(11, `Copy remaining ${values[k]} at index ${k}.`, snap({ range: [lo, hi], writing: [...writing], wrote: k }));
        k++;
      }
    }
  }

  push(5, `Sorted: [${values.join(", ")}].`, snap({ sorted: true }));
  return steps;
}
