import type { Step } from "@/core/types";

export interface RangeSumData {
  nums: number[];
  left: number;
  right: number;
  /** subarray sums (sorted once phase === "sorted") */
  sums: number[];
  phase: "generate" | "sorted";
  /** starting index currently generating */
  gen: number | null;
  total: number;
  answer: number | null;
}

export type RangeSumStep = Step<RangeSumData>;

const MOD = 1e9 + 7;

/**
 * Enumerate the sum of every contiguous subarray, sort those sums, and add up the ones ranked from `left`
 * to `right` (1-indexed). Accumulating each start's running sums avoids recomputation. `line` indexes CODE.
 */
export function rangeSumSteps(nums: number[], left: number, right: number): RangeSumStep[] {
  const steps: RangeSumStep[] = [];
  const n = nums.length;
  const sums: number[] = [];

  const snap = (o: Partial<RangeSumData>): RangeSumData => ({ nums, left, right, sums: [...sums], phase: "generate", gen: null, total: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RangeSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Collect the sum of every contiguous subarray.");
  for (let i = 0; i < n; i++) {
    let acc = 0;
    const before = sums.length;
    for (let j = i; j < n; j++) {
      acc += nums[j];
      sums.push(acc);
    }
    push(6, `Subarrays starting at ${i}: sums [${sums.slice(before).join(", ")}].`, { phase: "generate", gen: i });
  }

  sums.sort((a, b) => a - b);
  push(9, `Sorted ${sums.length} subarray sums.`, { phase: "sorted" });

  let total = 0;
  for (let k = left - 1; k < right; k++) total = (total + sums[k]) % MOD;
  push(12, `Sum of ranks ${left}…${right}: ${total}.`, { phase: "sorted", total, answer: total });
  return steps;
}
