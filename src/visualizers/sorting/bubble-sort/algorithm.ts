import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for bubble sort. Emits an immutable snapshot at every
 * meaningful action (compare, swap, lock-in, early-exit). The `line` field
 * points at the executing line in BUBBLE_SORT_CODE.
 */
export function bubbleSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  const locked = new Set<number>();
  let comparisons = 0;
  let swaps = 0;

  const outOfOrder = (x: number, y: number) =>
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

  push(
    0,
    "Start bubble sort: repeatedly compare adjacent elements and bubble the largest toward the end.",
    [],
  );

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    push(1, `Pass ${i + 1}: reset the swap flag.`, []);

    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      push(
        3,
        `Compare a[${j}] = ${a[j]} and a[${j + 1}] = ${a[j + 1]}.`,
        [
          { ref: j, role: "compared" },
          { ref: j + 1, role: "compared" },
        ],
      );

      if (outOfOrder(a[j], a[j + 1])) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
        swapped = true;
        push(4, `They are out of order — swap them.`, [
          { ref: j, role: "swapped" },
          { ref: j + 1, role: "swapped" },
        ]);
      }
    }

    locked.add(n - i - 1);
    push(
      8,
      swapped
        ? `End of pass ${i + 1}: the largest unsorted value is now locked at index ${n - i - 1}.`
        : `No swaps this pass — the array is already sorted, so stop early.`,
      [],
    );
    if (!swapped) break;
  }

  for (let k = 0; k < n; k++) locked.add(k);
  push(9, "Done — the array is fully sorted.", []);

  return steps;
}
