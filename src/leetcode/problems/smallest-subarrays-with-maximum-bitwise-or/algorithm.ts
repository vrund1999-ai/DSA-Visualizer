import type { Step } from "@/core/types";

export interface SmallestOrData {
  nums: number[];
  ans: number[];
  i: number | null;
  /** end index of the subarray for the current i */
  end: number | null;
  answer: number[] | null;
}

export type SmallestOrStep = Step<SmallestOrData>;

/**
 * The maximum OR from index i onward includes every bit that appears anywhere to its right. To capture
 * all of them, the subarray must extend to the nearest occurrence of each such bit; the farthest of those
 * nearest positions sets the end. Tracking each bit's closest at-or-after index makes this O(30) per i.
 * `line` indexes CODE.
 */
export function smallestOrSteps(nums: number[]): SmallestOrStep[] {
  const steps: SmallestOrStep[] = [];
  const n = nums.length;
  const ans = new Array(n).fill(1);
  const last: Record<number, number> = {};

  const snap = (o: Partial<SmallestOrData>): SmallestOrData => ({ nums, ans: [...ans], i: null, end: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SmallestOrData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Scan right to left, tracking the nearest at-or-after index of each bit.");

  for (let i = n - 1; i >= 0; i--) {
    for (let b = 0; b < 30; b++) if (nums[i] & (1 << b)) last[b] = i;
    let end = i;
    for (let b = 0; b < 30; b++) if (last[b] !== undefined) end = Math.max(end, last[b]);
    ans[i] = end - i + 1;
    push(10, `i=${i}: reach the nearest of every appearing bit → end ${end}, length ${ans[i]}.`, { i, end });
  }

  push(12, `Smallest subarray lengths: [${ans.join(", ")}].`, { answer: [...ans] });
  return steps;
}
