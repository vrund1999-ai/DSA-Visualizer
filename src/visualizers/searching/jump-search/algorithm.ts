import type { Highlight } from "@/core/types";
import type { SearchInput, SearchStep } from "../types";

/**
 * Pure step generator for jump search over a sorted array: jump ahead in blocks
 * of √n until overshooting the target, then scan the last block linearly.
 * `line` points into JUMP_SEARCH_CODE.
 */
export function jumpSearchSteps(input: SearchInput): SearchStep[] {
  const values = [...input.values].sort((a, b) => a - b);
  const target = input.target;
  const n = values.length;
  const steps: SearchStep[] = [];
  let comparisons = 0;
  let foundIndex: number | null = null;

  const visited = (upto: number): Highlight[] =>
    Array.from({ length: Math.max(0, upto) }, (_, i) => ({
      ref: i,
      role: "visited" as const,
    }));

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

  const step = Math.max(1, Math.floor(Math.sqrt(n)));
  let prev = 0;
  let curr = step;
  push(0, `Block size = ⌊√${n}⌋ = ${step}. Jump ahead one block at a time.`, []);

  while (curr < n && values[curr - 1] < target) {
    comparisons++;
    push(2, `Block end a[${curr - 1}] = ${values[curr - 1]} < ${target} — jump forward.`, [
      ...visited(prev),
      { ref: curr - 1, role: "current" },
    ]);
    prev = curr;
    curr += step;
  }

  const end = Math.min(curr, n);
  for (let i = prev; i < end; i++) {
    comparisons++;
    const window: Highlight[] = Array.from({ length: end - prev }, (_, k) => ({
      ref: prev + k,
      role: "active" as const,
    }));
    push(6, `Scan the block: a[${i}] = ${values[i]} vs ${target}.`, [
      ...visited(prev),
      ...window,
      { ref: i, role: "current" },
    ]);
    if (values[i] === target) {
      foundIndex = i;
      push(6, `Match! ${target} is at index ${i}.`, [
        ...visited(i),
        { ref: i, role: "target" },
      ]);
      return steps;
    }
  }

  foundIndex = -1;
  push(7, `${target} is not present.`, [...visited(end)]);
  return steps;
}
