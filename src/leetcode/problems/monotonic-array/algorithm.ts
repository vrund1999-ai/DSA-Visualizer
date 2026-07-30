import type { Step } from "@/core/types";

export interface MonotonicData {
  nums: number[];
  scan: number | null;
  inc: boolean;
  dec: boolean;
  answer: boolean | null;
}

export type MonotonicStep = Step<MonotonicData>;

/**
 * Monotonic Array: an array is monotonic if it never both rises and falls. Track two flags — could still be
 * non-decreasing (inc) and could still be non-increasing (dec) — and clear whichever an adjacent pair
 * violates. `line` indexes CODE.
 */
export function monotonicSteps(nums: number[]): MonotonicStep[] {
  const steps: MonotonicStep[] = [];
  let inc = true;
  let dec = true;

  const snap = (o: Partial<MonotonicData>): MonotonicData => ({ nums, scan: null, inc, dec, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MonotonicData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Assume both non-decreasing and non-increasing; disprove as we scan.`);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) dec = false;
    if (nums[i] < nums[i - 1]) inc = false;
    push(nums[i] > nums[i - 1] ? 3 : nums[i] < nums[i - 1] ? 4 : 2, `${nums[i - 1]} → ${nums[i]}: inc=${inc}, dec=${dec}.`, { scan: i });
  }

  const answer = inc || dec;
  push(6, `inc=${inc} or dec=${dec} → ${answer}.`, { answer });
  return steps;
}
