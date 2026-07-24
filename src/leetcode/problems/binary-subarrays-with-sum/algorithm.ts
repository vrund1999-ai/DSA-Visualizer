import type { Step } from "@/core/types";

export interface BinarySubarrayData {
  nums: number[];
  goal: number;
  pos: number | null;
  sum: number;
  ans: number;
  /** prefix-sum -> count map, as entries for display */
  seen: [number, number][];
  /** the prefix value looked up this step (sum - goal) */
  lookedUp: number | null;
  /** how many matches this step contributed */
  added: number;
  answer: number | null;
}

export type BinarySubarrayStep = Step<BinarySubarrayData>;

/**
 * Count subarrays with a given sum via prefix sums: for each running sum, the number
 * of earlier prefixes equal to sum − goal is the number of subarrays ending here that
 * hit the goal. `line` indexes CODE.
 */
export function binarySubarraySteps(nums: number[], goal: number): BinarySubarrayStep[] {
  const steps: BinarySubarrayStep[] = [];
  const seen = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let ans = 0;

  const entries = () => [...seen.entries()];
  const snap = (o: Partial<BinarySubarrayData>): BinarySubarrayData => ({ nums: [...nums], goal, pos: null, sum, ans, seen: entries(), lookedUp: null, added: 0, answer: null, ...o });
  const push = (line: number, explanation: string, data: BinarySubarrayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Count subarrays summing to ${goal} using prefix sums (seed 0→1).`, snap({}));

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const need = sum - goal;
    const added = seen.get(need) ?? 0;
    ans += added;
    push(6, `At index ${i}: prefix ${sum}, need ${need} → +${added} subarray(s).`, snap({ pos: i, lookedUp: need, added }));
    seen.set(sum, (seen.get(sum) ?? 0) + 1);
  }

  push(9, `Total subarrays with sum ${goal}: ${ans}.`, snap({ answer: ans }));
  return steps;
}
