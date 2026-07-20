import type { Highlight } from "@/core/types";
import type { SortInput, SortOptions, SortStep } from "../types";

/**
 * Pure step generator for shell sort: gapped insertion sort with a halving gap
 * sequence, written swap-based so every frame is a permutation. `line` points
 * into SHELL_SORT_CODE.
 */
export function shellSortSteps(
  input: SortInput,
  options: SortOptions = { order: "asc" },
): SortStep[] {
  const a = [...input];
  const n = a.length;
  const steps: SortStep[] = [];
  let comparisons = 0;
  let swaps = 0;

  const outOfOrder = (left: number, right: number) =>
    options.order === "asc" ? left > right : left < right;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...a] },
      highlights,
      metrics: { comparisons, swaps },
    });
  };

  push(0, "Shell sort: run gapped insertion sorts, shrinking the gap to 1.", []);

  for (let gap = n >> 1; gap > 0; gap >>= 1) {
    push(0, `Gap = ${gap}.`, []);
    for (let i = gap; i < n; i++) {
      let j = i;
      while (j >= gap) {
        comparisons++;
        push(3, `Compare a[${j - gap}] = ${a[j - gap]} and a[${j}] = ${a[j]} (gap ${gap}).`, [
          { ref: j - gap, role: "compared" },
          { ref: j, role: "current" },
        ]);
        if (!outOfOrder(a[j - gap], a[j])) break;
        [a[j - gap], a[j]] = [a[j], a[j - gap]];
        swaps++;
        push(4, `Out of order — swap across the gap.`, [
          { ref: j - gap, role: "swapped" },
          { ref: j, role: "swapped" },
        ]);
        j -= gap;
      }
    }
  }

  push(8, "Done — the array is fully sorted.", [
    ...Array.from({ length: n }, (_, k) => ({ ref: k, role: "sorted" as const })),
  ]);

  return steps;
}
