import type { Step } from "@/core/types";

export interface ArithData {
  nums: number[];
  i: number | null;
  j: number | null;
  d: number | null;
  /** dp[i] as [diff, length] pairs for the current i */
  curMap: [number, number][];
  best: number;
  answer: number | null;
}

export type ArithStep = Step<ArithData>;

/**
 * An arithmetic subsequence ending at i is defined by its common difference. dp[i][d] tracks the longest
 * run ending at i with difference d; extending from an earlier j with the same d adds one. The overall
 * maximum is the answer. `line` indexes CODE.
 */
export function arithSteps(nums: number[]): ArithStep[] {
  const steps: ArithStep[] = [];
  const dp = nums.map(() => new Map<number, number>());
  let best = 1;

  const snap = (o: Partial<ArithData>): ArithData => ({ nums, i: null, j: null, d: null, curMap: [], best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ArithData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "dp[i][d] = longest arithmetic run ending at i with common difference d.");

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i] - nums[j];
      const len = (dp[j].get(d) || 1) + 1;
      dp[i].set(d, Math.max(dp[i].get(d) || 0, len));
      best = Math.max(best, dp[i].get(d)!);
      push(8, `nums[${i}]−nums[${j}] = ${d}: run ending at ${i} with diff ${d} is ${dp[i].get(d)} (best ${best}).`, { i, j, d, curMap: [...dp[i].entries()] });
    }
  }

  push(11, `Longest arithmetic subsequence length: ${best}.`, { answer: best });
  return steps;
}
