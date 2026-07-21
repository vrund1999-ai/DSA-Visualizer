import type { Highlight, Step } from "@/core/types";

export interface MaxSubData {
  nums: number[];
  i: number | null;
  cur: number;
  best: number;
  curStart: number;
  bestStart: number;
  bestEnd: number;
}

export type MaxSubStep = Step<MaxSubData>;

/**
 * Kadane's algorithm: `cur` is the best subarray sum ending exactly at i. Either
 * extend the previous run or restart at i (whichever is larger); `best` tracks
 * the maximum over all positions. `line` indexes CODE.
 */
export function maxSubArraySteps(nums: number[]): MaxSubStep[] {
  const steps: MaxSubStep[] = [];
  let cur = nums[0];
  let best = nums[0];
  let curStart = 0;
  let bestStart = 0;
  let bestEnd = 0;

  const marks = (i: number): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = bestStart; k <= bestEnd; k++) hl.push({ ref: k, role: "target" });
    for (let k = curStart; k <= i; k++) hl.push({ ref: k, role: "active" });
    hl.push({ ref: i, role: "current" });
    return hl;
  };
  const snap = (o: Partial<MaxSubData>): MaxSubData => ({
    nums: [...nums],
    i: null,
    cur,
    best,
    curStart,
    bestStart,
    bestEnd,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: MaxSubData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, `Start: cur = best = nums[0] = ${nums[0]}.`, snap({ i: 0 }), marks(0));

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > cur + nums[i]) {
      cur = nums[i];
      curStart = i;
      push(3, `Restart at ${nums[i]} — a fresh subarray beats extending (${cur}).`, snap({ i }), marks(i));
    } else {
      cur = cur + nums[i];
      push(3, `Extend the run: cur + ${nums[i]} = ${cur}.`, snap({ i }), marks(i));
    }
    if (cur > best) {
      best = cur;
      bestStart = curStart;
      bestEnd = i;
      push(4, `New best sum ${best} (subarray [${bestStart}..${bestEnd}]).`, snap({ i }), marks(i));
    }
  }

  const finalHl: Highlight[] = [];
  for (let k = bestStart; k <= bestEnd; k++) finalHl.push({ ref: k, role: "target" });
  push(6, `Maximum subarray sum is ${best}.`, snap({ i: null }), finalHl);
  return steps;
}
