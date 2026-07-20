import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for heap sort. Builds a max-heap (min-heap for
 * descending), then repeatedly swaps the root to the sorted tail and sifts the
 * new root down. In-place and swap-based, so every frame is a permutation.
 * `line` points into HEAP_SORT_CODE.
 */
export function heapSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  const locked = new Set<number>();
  let comparisons = 0;
  let swaps = 0;

  // For ascending we want a max-heap: "higher priority" = larger value.
  const higher = (x: number, y: number) =>
    options.order === "asc" ? x > y : x < y;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...a] },
      highlights: [
        ...highlights,
        ...[...locked].map((idx) => ({ ref: idx, role: "sorted" as const })),
      ],
      metrics: { comparisons, swaps },
    });
  };

  const siftDown = (i: number, end: number) => {
    while (2 * i + 1 < end) {
      let c = 2 * i + 1;
      if (c + 1 < end) {
        comparisons++;
        if (higher(a[c + 1], a[c])) c++;
      }
      push(9, `Compare root a[${i}] = ${a[i]} with child a[${c}] = ${a[c]}.`, [
        { ref: i, role: "current" },
        { ref: c, role: "compared" },
      ]);
      comparisons++;
      if (!higher(a[c], a[i])) break;
      [a[i], a[c]] = [a[c], a[i]];
      swaps++;
      push(10, `Child has higher priority — swap down.`, [
        { ref: i, role: "swapped" },
        { ref: c, role: "swapped" },
      ]);
      i = c;
    }
  };

  push(0, "Build a max-heap, then extract the max to the end repeatedly.", []);
  // build heap
  for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(i, n);

  for (let end = n - 1; end > 0; end--) {
    [a[0], a[end]] = [a[end], a[0]];
    swaps++;
    push(2, `Move the heap's root (extreme value) to index ${end}.`, [
      { ref: 0, role: "swapped" },
      { ref: end, role: "swapped" },
    ]);
    locked.add(end);
    siftDown(0, end);
  }

  for (let k = 0; k < n; k++) locked.add(k);
  push(4, "Done — the array is fully sorted.", []);

  return steps;
}
