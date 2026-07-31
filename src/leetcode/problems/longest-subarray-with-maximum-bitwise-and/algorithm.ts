import type { Step } from "@/core/types";

export interface MaxAndData {
  nums: number[];
  max: number;
  scan: number | null;
  run: number;
  best: number;
  /** [start, end] of the best run found */
  bestWindow: [number, number] | null;
  answer: number | null;
}

export type MaxAndStep = Step<MaxAndData>;

/**
 * Longest Subarray With Maximum Bitwise AND: ANDing more elements can only clear bits, so the maximum AND of
 * any subarray equals the maximum element. The answer is the longest consecutive run of that maximum value.
 * `line` indexes CODE.
 */
export function maxAndSteps(nums: number[]): MaxAndStep[] {
  const steps: MaxAndStep[] = [];
  const max = Math.max(...nums);
  let run = 0;
  let best = 0;
  let bestWindow: [number, number] | null = null;

  const snap = (o: Partial<MaxAndData>): MaxAndData => ({
    nums,
    max,
    scan: null,
    run,
    best,
    bestWindow,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxAndData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Max element is ${max}; find the longest consecutive run of it.`);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      run++;
      if (run > best) {
        best = run;
        bestWindow = [i - run + 1, i];
      }
      push(7, `nums[${i}] = ${max} → run ${run}. Best ${best}.`, { scan: i });
    } else {
      run = 0;
      push(6, `nums[${i}] = ${nums[i]} ≠ ${max} → reset run.`, { scan: i });
    }
  }

  push(9, `Longest run of the maximum = ${best}.`, { answer: best });
  return steps;
}
