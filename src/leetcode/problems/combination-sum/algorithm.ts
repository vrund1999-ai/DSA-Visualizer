import type { Highlight, Step } from "@/core/types";

export interface CombinationSumInput {
  candidates: number[];
  target: number;
}

export interface CombinationSumData {
  candidates: number[];
  target: number;
  remain: number;
  current: number[];
  results: number[][];
}

export type CombinationSumStep = Step<CombinationSumData>;

/**
 * Backtracking: at each step try each candidate from `start` onward, subtracting
 * it from the remaining target. Passing i (not i+1) lets a number be reused;
 * remain 0 records a combination, remain < 0 prunes the branch. `line` indexes
 * CODE.
 */
export function combinationSumSteps(input: CombinationSumInput): CombinationSumStep[] {
  const { candidates, target } = input;
  const steps: CombinationSumStep[] = [];
  const results: number[][] = [];
  const current: number[] = [];

  const snap = (remain: number): CombinationSumData => ({
    candidates: [...candidates],
    target,
    remain,
    current: [...current],
    results: results.map((r) => [...r]),
  });
  const push = (line: number, explanation: string, remain: number, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data: snap(remain), highlights, metrics: { found: results.length } });
  };

  const bt = (start: number, remain: number) => {
    if (remain === 0) {
      results.push([...current]);
      push(3, `Remaining is 0 — record [${current.join(", ")}].`, remain, []);
      return;
    }
    if (remain < 0) {
      push(4, `Overshot the target (remaining ${remain}) — prune.`, remain, []);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      push(6, `Add ${candidates[i]} (remaining → ${remain - candidates[i]}).`, remain - candidates[i], [{ ref: i, role: "current" }]);
      bt(i, remain - candidates[i]);
      current.pop();
      push(8, `Backtrack — remove ${candidates[i]}.`, remain, [{ ref: i, role: "swapped" }]);
    }
  };

  push(1, `Build combinations of candidates summing to ${target} (reuse allowed).`, target, []);
  bt(0, target);
  push(12, `Found ${results.length} combination(s).`, 0, []);
  return steps;
}
