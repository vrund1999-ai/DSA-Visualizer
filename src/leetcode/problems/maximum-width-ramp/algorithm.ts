import type { Step } from "@/core/types";

export interface WidthRampData {
  nums: number[];
  phase: "build" | "scan";
  stack: number[];
  /** index i being pushed (build) or j scanning (scan) */
  cur: number | null;
  /** index popped this step */
  popped: number | null;
  best: number;
  answer: number | null;
}

export type WidthRampStep = Step<WidthRampData>;

/**
 * First build a stack of candidate ramp starts: indices whose values strictly decrease
 * (a smaller earlier value can only help). Then scan from the right, popping every
 * start ≤ nums[j]; each pop gives a ramp width j − i, and the widest wins. `line`
 * indexes CODE.
 */
export function widthRampSteps(nums: number[]): WidthRampStep[] {
  const steps: WidthRampStep[] = [];
  const stack: number[] = [];

  const snap = (o: Partial<WidthRampData>): WidthRampData => ({ nums: [...nums], phase: "build", stack: [...stack], cur: null, popped: null, best: 0, answer: null, ...o });
  const push = (line: number, explanation: string, data: WidthRampData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Build a decreasing-value stack of candidate ramp starts.", snap({ phase: "build" }));

  for (let i = 0; i < nums.length; i++) {
    if (!stack.length || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
      push(4, `Push index ${i} (value ${nums[i]}) as a candidate start.`, snap({ phase: "build", cur: i }));
    }
  }

  let best = 0;
  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[j]) {
      const i = stack.pop()!;
      best = Math.max(best, j - i);
      push(9, `nums[${i}]=${nums[i]} ≤ nums[${j}]=${nums[j]} — ramp width ${j - i} (best ${best}).`, snap({ phase: "scan", cur: j, popped: i, best }));
    }
    if (stack.length) push(6, `Scan j=${j} (value ${nums[j]}).`, snap({ phase: "scan", cur: j, best }));
  }

  push(12, `Maximum width ramp: ${best}.`, snap({ phase: "scan", best, answer: best }));
  return steps;
}
