import type { Step } from "@/core/types";

export interface KDistinctData {
  nums: number[];
  k: number;
  left: number;
  right: number;
  /** distinct count in the current window */
  distinct: number;
  /** running atMost(k) total */
  atMostK: number;
  answer: number | null;
}

export type KDistinctStep = Step<KDistinctData>;

const atMostCount = (nums: number[], m: number): number => {
  if (m < 0) return 0;
  const count = new Map<number, number>();
  let left = 0;
  let res = 0;
  for (let right = 0; right < nums.length; right++) {
    count.set(nums[right], (count.get(nums[right]) ?? 0) + 1);
    while (count.size > m) {
      const c = count.get(nums[left])! - 1;
      if (c === 0) count.delete(nums[left]);
      else count.set(nums[left], c);
      left++;
    }
    res += right - left + 1;
  }
  return res;
};

/**
 * "Exactly k distinct" is hard to slide directly, but atMost(k) − atMost(k−1) counts
 * it. We visualize the atMost(k) sliding window (shrinking when distinct exceeds k) and
 * report the subtraction. `line` indexes CODE.
 */
export function kDistinctSteps(nums: number[], k: number): KDistinctStep[] {
  const steps: KDistinctStep[] = [];
  const count = new Map<number, number>();
  let left = 0;
  let atMostK = 0;

  const snap = (right: number, o: Partial<KDistinctData>): KDistinctData => ({ nums: [...nums], k, left, right, distinct: count.size, atMostK, answer: null, ...o });
  const push = (line: number, explanation: string, right: number, o: Partial<KDistinctData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(right, o), highlights: [] });
  };

  push(1, `Count subarrays with exactly ${k} distinct via atMost(${k}) − atMost(${k - 1}).`, -1);

  for (let right = 0; right < nums.length; right++) {
    count.set(nums[right], (count.get(nums[right]) ?? 0) + 1);
    while (count.size > k) {
      const c = count.get(nums[left])! - 1;
      if (c === 0) count.delete(nums[left]);
      else count.set(nums[left], c);
      left++;
    }
    atMostK += right - left + 1;
    push(10, `Window [${left}, ${right}] (${count.size} distinct) → +${right - left + 1}, atMost(${k})=${atMostK}.`, right);
  }

  const answer = atMostK - atMostCount(nums, k - 1);
  push(14, `atMost(${k}) − atMost(${k - 1}) = ${answer}.`, nums.length - 1, { answer });
  return steps;
}
