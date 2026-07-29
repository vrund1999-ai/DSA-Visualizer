import type { Step } from "@/core/types";

export interface LeftRightData {
  nums: number[];
  total: number;
  idx: number | null;
  left: number;
  right: number | null;
  ans: (number | null)[];
  answer: number[] | null;
}

export type LeftRightStep = Step<LeftRightData>;

/**
 * For each index, leftSum is the running prefix and rightSum is the total minus the prefix minus the
 * current element. Keeping the prefix as we scan gives both sums in O(1), and the answer is their
 * absolute difference. `line` indexes CODE.
 */
export function leftRightSteps(nums: number[]): LeftRightStep[] {
  const steps: LeftRightStep[] = [];
  const total = nums.reduce((a, b) => a + b, 0);
  const ans: (number | null)[] = new Array(nums.length).fill(null);
  let left = 0;

  const snap = (o: Partial<LeftRightData>): LeftRightData => ({ nums, total, idx: null, left, right: null, ans: [...ans], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LeftRightData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Total = ${total}. Track the running left sum; right = total − left − nums[i].`);

  for (let i = 0; i < nums.length; i++) {
    const right = total - left - nums[i];
    ans[i] = Math.abs(left - right);
    push(6, `i=${i}: left ${left}, right ${right} → |${left} − ${right}| = ${ans[i]}.`, { idx: i, right });
    left += nums[i];
  }

  push(9, `Answer: [${ans.join(", ")}].`, { answer: ans.map((x) => x!) });
  return steps;
}
