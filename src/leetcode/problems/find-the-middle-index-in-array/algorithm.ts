import type { Step } from "@/core/types";

export interface MiddleIndexData {
  nums: number[];
  scan: number | null;
  leftSum: number;
  rightSum: number | null;
  answer: number | null;
}

export type MiddleIndexStep = Step<MiddleIndexData>;

/**
 * The middle index is the leftmost i where the sum strictly left of i equals the sum strictly right of i.
 * Track a running left sum; the right sum is total − left − nums[i]. `line` indexes CODE.
 */
export function middleIndexSteps(nums: number[]): MiddleIndexStep[] {
  const steps: MiddleIndexStep[] = [];
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;

  const snap = (o: Partial<MiddleIndexData>): MiddleIndexData => ({
    nums,
    scan: null,
    leftSum: left,
    rightSum: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MiddleIndexData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Total = ${total}. Find where left sum equals right sum.`);

  for (let i = 0; i < nums.length; i++) {
    const right = total - left - nums[i];
    if (left === right) {
      push(5, `Index ${i}: left ${left} = right ${right} → middle index.`, { scan: i, rightSum: right, answer: i });
      return steps;
    }
    push(4, `Index ${i}: left ${left} ≠ right ${right}.`, { scan: i, rightSum: right });
    left += nums[i];
  }

  push(8, `No balanced index → -1.`, { answer: -1 });
  return steps;
}
