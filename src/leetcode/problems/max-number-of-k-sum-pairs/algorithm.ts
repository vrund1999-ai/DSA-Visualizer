import type { Step } from "@/core/types";

export interface KSumPairsData {
  nums: number[];
  k: number;
  l: number | null;
  r: number | null;
  sum: number | null;
  /** indices removed as a matched pair this step */
  removed: number[];
  ops: number;
  answer: number | null;
}

export type KSumPairsStep = Step<KSumPairsData>;

/**
 * After sorting, two pointers converge: if the ends sum to k we've found a pair and shrink both,
 * otherwise a too-small sum advances the left pointer and a too-large sum retreats the right. Each
 * matched pair is one operation. `line` indexes CODE.
 */
export function kSumPairsSteps(input: number[], k: number): KSumPairsStep[] {
  const steps: KSumPairsStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let ops = 0;

  const snap = (o: Partial<KSumPairsData>): KSumPairsData => ({ nums, k, l: null, r: null, sum: null, removed: [], ops, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KSumPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort [${nums.join(", ")}]; two pointers seek pairs summing to ${k}.`);

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === k) {
      ops++;
      push(6, `${nums[l]} + ${nums[r]} = ${k} → pair #${ops}. l++, r--`, { l, r, sum, removed: [l, r], ops });
      l++;
      r--;
    } else if (sum < k) {
      push(8, `${nums[l]} + ${nums[r]} = ${sum} < ${k} → l++`, { l, r, sum });
      l++;
    } else {
      push(10, `${nums[l]} + ${nums[r]} = ${sum} > ${k} → r--`, { l, r, sum });
      r--;
    }
  }

  push(13, `Maximum k-sum operations: ${ops}.`, { answer: ops });
  return steps;
}
