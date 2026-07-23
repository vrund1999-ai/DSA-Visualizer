import type { Highlight, Step } from "@/core/types";

export interface PivotData {
  nums: number[];
  total: number;
  i: number | null;
  left: number;
  right: number | null;
  answer: number | null;
}

export type PivotStep = Step<PivotData>;

/**
 * Keep a running left-sum; the right-sum is the total minus the left-sum and the
 * current element. The pivot is the first index where those two sums are equal.
 * `line` indexes CODE.
 */
export function pivotSteps(nums: number[]): PivotStep[] {
  const steps: PivotStep[] = [];
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  let answer: number | null = null;

  const snap = (o: Partial<PivotData>): PivotData => ({ nums: [...nums], total, i: null, left, right: null, answer, ...o });
  const push = (line: number, explanation: string, data: PivotData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Total sum is ${total}. Find where left-sum equals right-sum.`, snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const right = total - left - nums[i];
    const leftHl: Highlight[] = [];
    for (let j = 0; j < i; j++) leftHl.push({ ref: j, role: "sorted" });
    const rightHl: Highlight[] = [];
    for (let j = i + 1; j < nums.length; j++) rightHl.push({ ref: j, role: "active" });
    if (left === right) {
      answer = i;
      push(5, `At i=${i}: left ${left} = right ${right} — pivot found.`, snap({ i, right, answer }), [...leftHl, ...rightHl, { ref: i, role: "target" }]);
      return steps;
    }
    push(4, `At i=${i}: left ${left} vs right ${right} — not equal.`, snap({ i, right }), [...leftHl, ...rightHl, { ref: i, role: "current" }]);
    left += nums[i];
  }

  answer = -1;
  push(8, "No pivot index — return -1.", snap({ i: null, answer: -1 }), []);
  return steps;
}
