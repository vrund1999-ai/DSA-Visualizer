import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for top-down merge sort. Recursively splits the array,
 * then merges sorted halves back into the single working array `a`, emitting a
 * snapshot per comparison and per write. `line` points into MERGE_SORT_CODE.
 */
export function mergeSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const steps: SortStep[] = [];
  let comparisons = 0;
  let writes = 0;

  // true when x should be placed before y for the chosen order.
  const takeFirst = (x: number, y: number) =>
    options.order === "asc" ? x <= y : x >= y;

  // Highlight every index in [lo, hi) as the active working range.
  const range = (lo: number, hi: number): Highlight[] =>
    Array.from({ length: hi - lo }, (_, idx) => ({
      ref: lo + idx,
      role: "active" as const,
    }));

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...a] },
      highlights,
      metrics: { comparisons, writes },
    });
  };

  const merge = (lo: number, mid: number, hi: number) => {
    const left = a.slice(lo, mid);
    const right = a.slice(mid, hi);
    push(7, `Merge the sorted halves [${lo}, ${mid}) and [${mid}, ${hi}).`, [
      ...range(lo, hi),
    ]);

    let i = 0;
    let j = 0;
    let k = lo;
    while (i < left.length && j < right.length) {
      comparisons++;
      push(
        11,
        `Compare left ${left[i]} and right ${right[j]}; take the smaller.`,
        [...range(lo, hi), { ref: k, role: "compared" }],
      );
      if (takeFirst(left[i], right[j])) {
        a[k] = left[i++];
      } else {
        a[k] = right[j++];
      }
      writes++;
      push(12, `Write ${a[k]} into index ${k}.`, [
        ...range(lo, hi),
        { ref: k, role: "swapped" },
      ]);
      k++;
    }
    while (i < left.length) {
      a[k] = left[i++];
      writes++;
      push(13, `Copy remaining left value ${a[k]} into index ${k}.`, [
        ...range(lo, hi),
        { ref: k, role: "swapped" },
      ]);
      k++;
    }
    while (j < right.length) {
      a[k] = right[j++];
      writes++;
      push(14, `Copy remaining right value ${a[k]} into index ${k}.`, [
        ...range(lo, hi),
        { ref: k, role: "swapped" },
      ]);
      k++;
    }
  };

  const mergeSort = (lo: number, hi: number) => {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >> 1;
    push(2, `Split [${lo}, ${hi}) at index ${mid}.`, [...range(lo, hi)]);
    mergeSort(lo, mid);
    mergeSort(mid, hi);
    merge(lo, mid, hi);
  };

  push(0, "Start merge sort: divide the array in half, sort each half, then merge.", []);
  mergeSort(0, a.length);
  push(
    6,
    "Done — every merge is complete and the array is fully sorted.",
    Array.from({ length: a.length }, (_, idx) => ({
      ref: idx,
      role: "sorted" as const,
    })),
  );

  return steps;
}
