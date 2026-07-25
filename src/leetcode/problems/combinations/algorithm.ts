import type { Step } from "@/core/types";

export interface CombinationsData {
  n: number;
  k: number;
  /** current partial combination */
  path: number[];
  /** number being considered */
  considering: number | null;
  results: number[][];
  found: boolean;
}

export type CombinationsStep = Step<CombinationsData>;

/**
 * Backtracking that builds strictly increasing combinations: from `start`, add each
 * candidate, recurse choosing only larger numbers (so no duplicates or reorderings),
 * and undo. `line` indexes CODE.
 */
export function combinationsSteps(n: number, k: number): CombinationsStep[] {
  const steps: CombinationsStep[] = [];
  const path: number[] = [];
  const results: number[][] = [];

  const snap = (o: Partial<CombinationsData>): CombinationsData => ({ n, k, path: [...path], considering: null, results: results.map((r) => [...r]), found: false, ...o });
  const push = (line: number, explanation: string, data: CombinationsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Choose ${k} numbers from 1..${n} (order does not matter).`, snap({}));

  const backtrack = (start: number) => {
    if (path.length === k) {
      results.push([...path]);
      push(4, `Complete: [${path.join(", ")}].`, snap({ found: true }));
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      push(7, `Add ${i}; path [${path.join(", ")}].`, snap({ considering: i }));
      backtrack(i + 1);
      path.pop();
      push(9, `Backtrack — remove ${i}.`, snap({ considering: i }));
    }
  };
  backtrack(1);

  push(12, `Done — ${results.length} combination(s).`, snap({}));
  return steps;
}
