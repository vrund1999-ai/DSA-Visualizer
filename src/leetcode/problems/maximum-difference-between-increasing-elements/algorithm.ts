import type { Step } from "@/core/types";

export interface MaxDiffData {
  nums: number[];
  scan: number | null;
  /** index of the current minimum */
  minIndex: number;
  best: number;
  /** [i, j] achieving the best difference */
  bestPair: [number, number] | null;
  answer: number | null;
}

export type MaxDiffStep = Step<MaxDiffData>;

/**
 * Maximum Difference Between Increasing Elements: track the smallest value seen so far to its left; each
 * larger element gives a candidate difference nums[j] − min. Return the best, or −1 if never increasing.
 * `line` indexes CODE.
 */
export function maxDiffSteps(nums: number[]): MaxDiffStep[] {
  const steps: MaxDiffStep[] = [];
  let minIndex = 0;
  let best = -1;
  let bestPair: [number, number] | null = null;

  const snap = (o: Partial<MaxDiffData>): MaxDiffData => ({
    nums,
    scan: null,
    minIndex,
    best,
    bestPair,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxDiffData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Track the running minimum and the best increasing difference.`);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[minIndex]) {
      const d = nums[i] - nums[minIndex];
      if (d > best) {
        best = d;
        bestPair = [minIndex, i];
      }
      push(4, `nums[${i}] = ${nums[i]} > min ${nums[minIndex]} → diff ${d}. Best ${best}.`, { scan: i });
    } else {
      minIndex = i;
      push(6, `nums[${i}] = ${nums[i]} is a new minimum.`, { scan: i });
    }
  }

  push(8, best === -1 ? `Never increasing → -1.` : `Maximum difference = ${best}.`, { answer: best });
  return steps;
}
