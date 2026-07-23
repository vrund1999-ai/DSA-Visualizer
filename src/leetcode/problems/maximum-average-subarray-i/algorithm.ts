import type { Highlight, Step } from "@/core/types";

export interface MaxAvgInput {
  nums: number[];
  k: number;
}

export interface MaxAvgData {
  nums: number[];
  k: number;
  windowStart: number;
  sum: number;
  bestSum: number;
  bestStart: number;
}

export type MaxAvgStep = Step<MaxAvgData>;

/**
 * A fixed-width window of size k slides one step at a time; the running sum is
 * updated in O(1) by adding the entering element and subtracting the leaving one.
 * The largest sum gives the largest average. `line` indexes CODE.
 */
export function maxAvgSteps(input: MaxAvgInput): MaxAvgStep[] {
  const { nums, k } = input;
  const steps: MaxAvgStep[] = [];
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let bestSum = sum;
  let bestStart = 0;

  const win = (start: number, role: string): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = start; j < start + k; j++) hl.push({ ref: j, role: role as Highlight["role"] });
    return hl;
  };
  const snap = (o: Partial<MaxAvgData>): MaxAvgData => ({ nums: [...nums], k, windowStart: 0, sum, bestSum, bestStart, ...o });
  const push = (line: number, explanation: string, data: MaxAvgData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { bestSum } });
  };

  push(3, `First window (size ${k}) sums to ${sum}.`, snap({ windowStart: 0 }), win(0, "target"));

  for (let i = k; i < nums.length; i++) {
    const start = i - k + 1;
    sum += nums[i] - nums[i - k];
    const improved = sum > bestSum;
    if (improved) {
      bestSum = sum;
      bestStart = start;
    }
    push(6, `Slide: +${nums[i]} −${nums[i - k]} → sum ${sum}${improved ? ` (new best)` : ""}.`, snap({ windowStart: start }), improved ? win(start, "target") : win(start, "active"));
  }

  push(8, `Max sum ${bestSum} → max average ${(bestSum / k).toFixed(5)}.`, snap({ windowStart: bestStart }), win(bestStart, "target"));
  return steps;
}
