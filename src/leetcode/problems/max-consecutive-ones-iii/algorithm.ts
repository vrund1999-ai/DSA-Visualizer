import type { Step } from "@/core/types";

export interface MaxOnesData {
  nums: number[];
  k: number;
  left: number;
  right: number;
  zeros: number;
  best: number;
  isBest: boolean;
  answer: number | null;
}

export type MaxOnesStep = Step<MaxOnesData>;

/**
 * Longest window containing at most k zeros (each zero can be flipped to one). Extend
 * right; when the window holds more than k zeros, shrink from the left past enough
 * zeros to restore the budget. `line` indexes CODE.
 */
export function maxOnesSteps(nums: number[], k: number): MaxOnesStep[] {
  const steps: MaxOnesStep[] = [];
  let left = 0;
  let zeros = 0;
  let best = 0;

  const snap = (right: number, o: Partial<MaxOnesData>): MaxOnesData => ({ nums: [...nums], k, left, right, zeros, best, isBest: false, answer: null, ...o });
  const push = (line: number, right: number, explanation: string, o: Partial<MaxOnesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(right, o), highlights: [] });
  };

  push(1, -1, `Sliding window allowing at most ${k} flipped zero(s).`);

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    push(3, right, `Include index ${right} (${nums[right]}); zeros in window = ${zeros}.`);
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
      push(6, right, `Over budget — advance left to ${left}.`);
    }
    const len = right - left + 1;
    const isBest = len > best;
    if (isBest) best = len;
    push(8, right, `Window [${left}, ${right}] length ${len}${isBest ? ` — new best ${best}` : ""}.`, { isBest });
  }

  push(10, -1, `Longest run after ≤${k} flips: ${best}.`, { answer: best });
  return steps;
}
