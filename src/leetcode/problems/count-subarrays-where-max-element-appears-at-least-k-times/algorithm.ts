import type { Step } from "@/core/types";

export interface CountMaxData {
  nums: number[];
  mx: number;
  k: number;
  left: number;
  right: number | null;
  count: number;
  total: number;
  answer: number | null;
}

export type CountMaxStep = Step<CountMaxData>;

/**
 * Once a window [left, right] contains the maximum k times, every start position 0…left−1 forms a valid
 * subarray ending at right. Advancing left just past the earliest maximum keeps exactly k−1 in the
 * window, so `left` counts the valid starts to add at each right. `line` indexes CODE.
 */
export function countMaxSteps(nums: number[], k: number): CountMaxStep[] {
  const steps: CountMaxStep[] = [];
  const mx = Math.max(...nums);
  let total = 0;
  let count = 0;
  let left = 0;

  const snap = (o: Partial<CountMaxData>): CountMaxData => ({ nums, mx, k, left, right: null, count, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CountMaxData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Maximum element is ${mx}; count subarrays containing it at least ${k} times.`);

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === mx) count++;
    while (count >= k) {
      if (nums[left] === mx) count--;
      left++;
    }
    total += left;
    push(9, `right=${right}: window has ${count} max(es), ${left} valid start(s) → total ${total}.`, { right });
  }

  push(11, `Total qualifying subarrays: ${total}.`, { answer: total });
  return steps;
}
