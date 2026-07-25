import type { Step } from "@/core/types";

export interface PermutationsIIData {
  nums: number[];
  used: boolean[];
  /** indices (into sorted nums) on the current path */
  path: number[];
  /** index being considered */
  considering: number | null;
  /** index skipped as a duplicate this step */
  skipped: number | null;
  results: number[][];
  found: boolean;
}

export type PermutationsIIStep = Step<PermutationsIIData>;

/**
 * Backtracking over sorted numbers. Skipping a duplicate value whose identical
 * predecessor is unused avoids generating the same permutation twice. `line` indexes
 * CODE.
 */
export function permutationsIISteps(input: number[]): PermutationsIIStep[] {
  const steps: PermutationsIIStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);
  const path: number[] = [];
  const results: number[][] = [];

  const snap = (o: Partial<PermutationsIIData>): PermutationsIIData => ({ nums: [...nums], used: [...used], path: [...path], considering: null, skipped: null, results: results.map((r) => [...r]), found: false, ...o });
  const push = (line: number, explanation: string, data: PermutationsIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Sort, then backtrack skipping duplicate branches.", snap({}));

  const backtrack = () => {
    if (path.length === nums.length) {
      results.push(path.map((i) => nums[i]));
      push(5, `Complete permutation [${path.map((i) => nums[i]).join(", ")}].`, snap({ found: true }));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        push(10, `Skip nums[${i}]=${nums[i]} (duplicate of an unused equal value).`, snap({ skipped: i }));
        continue;
      }
      used[i] = true;
      path.push(i);
      push(11, `Choose nums[${i}]=${nums[i]}; path [${path.map((p) => nums[p]).join(", ")}].`, snap({ considering: i }));
      backtrack();
      used[i] = false;
      path.pop();
    }
  };
  backtrack();

  push(16, `Done — ${results.length} unique permutation(s).`, snap({}));
  return steps;
}
