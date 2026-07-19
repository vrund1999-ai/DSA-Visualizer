import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for selection sort. Each pass scans the unsorted tail
 * for the extreme element and swaps it into place. `line` points at the
 * executing line in SELECTION_SORT_CODE.
 */
export function selectionSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  const locked = new Set<number>();
  let comparisons = 0;
  let swaps = 0;

  // "better" means "belongs earlier" for the chosen order.
  const better = (x: number, y: number) =>
    options.order === "asc" ? x < y : x > y;

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
    "Start selection sort: repeatedly pick the smallest remaining value and place it at the front.",
    [],
  );

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    push(1, `Pass ${i + 1}: assume index ${i} holds the smallest value.`, [
      { ref: i, role: "current" },
    ]);

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      push(
        3,
        `Compare a[${j}] = ${a[j]} against the current best a[${min}] = ${a[min]}.`,
        [
          { ref: min, role: "current" },
          { ref: j, role: "compared" },
        ],
      );
      if (better(a[j], a[min])) {
        min = j;
        push(3, `a[${j}] = ${a[j]} is a new best — remember index ${j}.`, [
          { ref: min, role: "current" },
        ]);
      }
    }

    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      swaps++;
      push(6, `Swap the smallest value into index ${i}.`, [
        { ref: i, role: "swapped" },
        { ref: min, role: "swapped" },
      ]);
    } else {
      push(5, `a[${i}] is already the smallest — no swap needed.`, [
        { ref: i, role: "current" },
      ]);
    }

    locked.add(i);
  }

  for (let k = 0; k < n; k++) locked.add(k);
  push(8, "Done — the array is fully sorted.", []);

  return steps;
}
