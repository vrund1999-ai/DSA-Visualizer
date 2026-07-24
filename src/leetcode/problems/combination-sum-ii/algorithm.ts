import type { Step } from "@/core/types";

export interface CombinationData {
  candidates: number[];
  target: number;
  /** indices of candidates in the current path */
  path: number[];
  remain: number;
  /** index being considered */
  considering: number | null;
  results: number[][];
  /** true on the step a result was recorded */
  found: boolean;
}

export type CombinationStep = Step<CombinationData>;

/**
 * Backtracking over the sorted candidates. Each number is used at most once (recurse
 * from i+1); duplicates are skipped when they'd start an identical branch at the same
 * depth, and the sorted order lets us prune once a candidate exceeds the remainder.
 * `line` indexes CODE.
 */
export function combinationSteps(input: number[], target: number): CombinationStep[] {
  const steps: CombinationStep[] = [];
  const candidates = [...input].sort((a, b) => a - b);
  const path: number[] = [];
  const results: number[][] = [];

  const snap = (o: Partial<CombinationData>): CombinationData => ({ candidates: [...candidates], target, path: [...path], remain: 0, considering: null, results: results.map((r) => [...r]), found: false, ...o });
  const push = (line: number, explanation: string, data: CombinationData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Sort, then backtrack for combinations summing to ${target}.`, snap({ remain: target }));

  const backtrack = (start: number, remain: number) => {
    if (remain === 0) {
      results.push(path.map((i) => candidates[i]));
      push(4, `Found combination [${path.map((i) => candidates[i]).join(", ")}].`, snap({ remain, found: true }));
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > remain) break;
      path.push(i);
      push(9, `Choose ${candidates[i]}; remaining ${remain - candidates[i]}.`, snap({ remain: remain - candidates[i], considering: i }));
      backtrack(i + 1, remain - candidates[i]);
      path.pop();
      push(11, `Backtrack — remove ${candidates[i]}.`, snap({ remain, considering: i }));
    }
  };
  backtrack(0, target);

  push(14, `Done — ${results.length} combination(s).`, snap({ remain: 0 }));
  return steps;
}
