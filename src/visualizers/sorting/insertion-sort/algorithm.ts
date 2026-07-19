import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for insertion sort, written as the swap-based variant so
 * the whole array always holds every value (clean, in-place animation): the
 * value at index i bubbles left past larger neighbours until it fits. `line`
 * points at the executing line in INSERTION_SORT_CODE.
 */
export function insertionSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  let comparisons = 0;
  let swaps = 0;

  // true when the left neighbour must move past the key for the chosen order.
  const outOfOrder = (left: number, right: number) =>
    options.order === "asc" ? left > right : left < right;

  // The sorted prefix is [0, sortedEnd).
  let sortedEnd = 1;
  const sortedHighlights = (): Highlight[] =>
    Array.from({ length: sortedEnd }, (_, idx) => ({
      ref: idx,
      role: "sorted" as const,
    }));

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...a] },
      highlights: [...sortedHighlights(), ...highlights],
      metrics: { comparisons, swaps },
    });
  };

  push(
    0,
    "Start insertion sort: grow a sorted prefix by sliding each value left into place.",
    [],
  );

  for (let i = 1; i < n; i++) {
    let j = i;
    push(1, `Take a[${i}] = ${a[i]} and slide it left into the sorted prefix.`, [
      { ref: i, role: "current" },
    ]);

    while (j > 0) {
      comparisons++;
      push(2, `Compare a[${j - 1}] = ${a[j - 1]} with a[${j}] = ${a[j]}.`, [
        { ref: j - 1, role: "compared" },
        { ref: j, role: "current" },
      ]);
      if (!outOfOrder(a[j - 1], a[j])) break;

      [a[j - 1], a[j]] = [a[j], a[j - 1]];
      swaps++;
      push(3, `Out of order — swap them.`, [
        { ref: j - 1, role: "swapped" },
        { ref: j, role: "swapped" },
      ]);
      j--;
    }

    sortedEnd = i + 1;
  }

  push(6, "Done — the array is fully sorted.", []);

  return steps;
}
