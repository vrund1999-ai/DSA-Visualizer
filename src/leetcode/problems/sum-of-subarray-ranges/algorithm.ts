import type { Step } from "@/core/types";

export interface SubRangesData {
  nums: number[];
  i: number | null;
  j: number | null;
  mn: number | null;
  mx: number | null;
  range: number | null;
  total: number;
  answer: number | null;
}

export type SubRangesStep = Step<SubRangesData>;

/**
 * The range of a subarray is max − min. Fixing a left endpoint i and extending the right endpoint j,
 * the running min and max update in O(1), so every subarray's range is added exactly once as the
 * window grows. `line` indexes CODE.
 */
export function subRangesSteps(nums: number[]): SubRangesStep[] {
  const steps: SubRangesStep[] = [];
  let total = 0;

  const snap = (o: Partial<SubRangesData>): SubRangesData => ({ nums, i: null, j: null, mn: null, mx: null, range: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SubRangesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Sum (max − min) over every subarray by growing each window.");

  for (let i = 0; i < nums.length; i++) {
    let mn = nums[i];
    let mx = nums[i];
    for (let j = i; j < nums.length; j++) {
      mn = Math.min(mn, nums[j]);
      mx = Math.max(mx, nums[j]);
      const range = mx - mn;
      total += range;
      push(7, `[${i}..${j}]: max ${mx} − min ${mn} = ${range} (total ${total}).`, { i, j, mn, mx, range });
    }
  }

  push(10, `Sum of all subarray ranges: ${total}.`, { answer: total });
  return steps;
}
