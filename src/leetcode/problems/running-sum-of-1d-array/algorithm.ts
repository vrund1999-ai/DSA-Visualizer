import type { Step } from "@/core/types";

export interface RunningSumData {
  nums: number[];
  /** index being updated */
  cur: number | null;
  done: boolean;
}

export type RunningSumStep = Step<RunningSumData>;

/**
 * The running sum at index i is nums[i] plus the running sum already stored at i−1, so
 * a single left-to-right pass turns the array into its prefix sums in place. `line`
 * indexes CODE.
 */
export function runningSumSteps(input: number[]): RunningSumStep[] {
  const steps: RunningSumStep[] = [];
  const nums = [...input];

  const snap = (o: Partial<RunningSumData>): RunningSumData => ({ nums: [...nums], cur: null, done: false, ...o });
  const push = (line: number, explanation: string, data: RunningSumData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, "Each element becomes the sum of itself and everything before it.", snap({}));

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i];
    nums[i] += nums[i - 1];
    push(2, `nums[${i}] = ${prev} + ${nums[i - 1]} = ${nums[i]}.`, snap({ cur: i }));
  }

  push(4, `Running sums: [${nums.join(", ")}].`, snap({ done: true }));
  return steps;
}
