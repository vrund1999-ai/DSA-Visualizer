import type { Highlight } from "@/core/types";
import type { SearchInput, SearchStep } from "../types";

/**
 * Pure step generator for binary search. The input values are sorted ascending
 * (defensively, so the visualizer is always valid) before searching. `line`
 * points into BINARY_SEARCH_CODE.
 */
export function binarySearchSteps(input: SearchInput): SearchStep[] {
  const values = [...input.values].sort((a, b) => a - b);
  const target = input.target;
  const n = values.length;
  const steps: SearchStep[] = [];
  let comparisons = 0;
  let foundIndex: number | null = null;

  // Highlight every cell: outside [lo,hi] is eliminated, mid is the cursor, the
  // rest is the live window. Pointer labels (lo/mid/hi) ride along as badges.
  const frame = (lo: number, hi: number, mid?: number): Highlight[] =>
    Array.from({ length: n }, (_, i) => {
      const role: Highlight["role"] =
        i < lo || i > hi ? "visited" : i === mid ? "current" : "active";
      const badge =
        i === mid ? "mid" : i === lo ? "lo" : i === hi ? "hi" : undefined;
      return { ref: i, role, badge };
    });

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...values], target, foundIndex },
      highlights,
      metrics: { comparisons },
    });
  };

  let lo = 0;
  let hi = n - 1;
  push(0, `Search the sorted array for ${target}; window is [${lo}, ${hi}].`, [
    ...frame(lo, hi),
  ]);

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    push(2, `Look at the middle: a[${mid}] = ${values[mid]}.`, [
      ...frame(lo, hi, mid),
    ]);
    comparisons++;

    if (values[mid] === target) {
      foundIndex = mid;
      push(3, `Match! ${target} is at index ${mid}.`, [
        ...frame(lo, hi).map((h) =>
          h.ref === mid ? { ...h, role: "target" as const } : h,
        ),
      ]);
      return steps;
    }

    if (values[mid] < target) {
      push(4, `${values[mid]} < ${target} — discard the left half.`, [
        ...frame(lo, hi, mid),
      ]);
      lo = mid + 1;
    } else {
      push(5, `${values[mid]} > ${target} — discard the right half.`, [
        ...frame(lo, hi, mid),
      ]);
      hi = mid - 1;
    }
  }

  foundIndex = -1;
  push(7, `Window is empty — ${target} is not present.`, [
    ...frame(0, -1),
  ]);

  return steps;
}
