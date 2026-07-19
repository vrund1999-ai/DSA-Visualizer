import type { Highlight } from "@/core/types";
import type { SearchInput, SearchStep } from "../types";

/**
 * Pure step generator for linear search: scan left→right, comparing each
 * element to the target. `line` points into LINEAR_SEARCH_CODE.
 */
export function linearSearchSteps(input: SearchInput): SearchStep[] {
  const { values, target } = input;
  const steps: SearchStep[] = [];
  let comparisons = 0;
  let foundIndex: number | null = null;

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

  const visited = (upto: number): Highlight[] =>
    Array.from({ length: upto }, (_, idx) => ({
      ref: idx,
      role: "visited" as const,
    }));

  push(0, `Scan the array from the left, looking for ${target}.`, []);

  for (let i = 0; i < values.length; i++) {
    comparisons++;
    push(1, `Compare a[${i}] = ${values[i]} with the target ${target}.`, [
      ...visited(i),
      { ref: i, role: "current" },
    ]);
    if (values[i] === target) {
      foundIndex = i;
      push(2, `Match! ${target} is at index ${i}.`, [
        ...visited(i),
        { ref: i, role: "target" },
      ]);
      return steps;
    }
  }

  foundIndex = -1;
  push(5, `Reached the end without a match — ${target} is not present.`, [
    ...visited(values.length),
  ]);

  return steps;
}
