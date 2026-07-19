import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for quicksort using Lomuto partitioning (last element as
 * pivot). Emits a snapshot per comparison, swap, and pivot placement. `line`
 * points into QUICK_SORT_CODE.
 */
export function quickSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  const locked = new Set<number>();
  let comparisons = 0;
  let swaps = 0;

  // true when a[j] belongs on the "less-than-pivot" side for the chosen order.
  const beforePivot = (x: number, pivot: number) =>
    options.order === "asc" ? x < pivot : x > pivot;

  const push = (
    line: number,
    explanation: string,
    highlights: Highlight[],
    pivotIdx?: number,
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...a] },
      highlights: [
        ...highlights,
        ...(pivotIdx !== undefined ? [{ ref: pivotIdx, role: "pivot" as const }] : []),
        ...[...locked].map((idx) => ({ ref: idx, role: "sorted" as const })),
      ],
      metrics: { comparisons, swaps },
    });
  };

  const partition = (lo: number, hi: number): number => {
    const pivot = a[hi];
    push(7, `Choose a[${hi}] = ${pivot} as the pivot.`, [], hi);
    let i = lo;
    for (let j = lo; j < hi; j++) {
      comparisons++;
      push(
        10,
        `Compare a[${j}] = ${a[j]} with pivot ${pivot}.`,
        [{ ref: j, role: "compared" }],
        hi,
      );
      if (beforePivot(a[j], pivot)) {
        if (i !== j) {
          [a[i], a[j]] = [a[j], a[i]];
          swaps++;
          push(
            11,
            `a[${j}] belongs on the left — swap into index ${i}.`,
            [
              { ref: i, role: "swapped" },
              { ref: j, role: "swapped" },
            ],
            hi,
          );
        }
        i++;
      }
    }
    if (i !== hi) {
      [a[i], a[hi]] = [a[hi], a[i]];
      swaps++;
    }
    locked.add(i);
    push(15, `Place the pivot at its final index ${i}.`, [
      { ref: i, role: "swapped" },
    ]);
    return i;
  };

  const quickSort = (lo: number, hi: number) => {
    if (lo >= hi) {
      if (lo === hi) locked.add(lo);
      return;
    }
    const p = partition(lo, hi);
    quickSort(lo, p - 1);
    quickSort(p + 1, hi);
  };

  push(0, "Start quicksort: partition around a pivot, then sort each side.", []);
  quickSort(0, n - 1);
  for (let k = 0; k < n; k++) locked.add(k);
  push(5, "Done — every pivot is in place and the array is fully sorted.", []);

  return steps;
}
