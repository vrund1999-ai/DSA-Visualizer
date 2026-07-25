import type { Step } from "@/core/types";

export interface ClosestZeroData {
  nums: number[];
  idx: number | null;
  bestIdx: number;
  best: number;
  updated: boolean;
  answer: number | null;
}

export type ClosestZeroStep = Step<ClosestZeroData>;

/**
 * Scan once, keeping the value with the smallest absolute distance to zero; when two values are
 * equally close (like -2 and 2) the larger one wins, so a strict tie-break on sign settles it.
 * `line` indexes CODE.
 */
export function closestZeroSteps(nums: number[]): ClosestZeroStep[] {
  const steps: ClosestZeroStep[] = [];
  let best = nums[0];
  let bestIdx = 0;

  const snap = (o: Partial<ClosestZeroData>): ClosestZeroData => ({ nums, idx: null, bestIdx, best, updated: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ClosestZeroData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Track the value nearest zero; start with ${best}.`);

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const closer = Math.abs(n) < Math.abs(best) || (Math.abs(n) === Math.abs(best) && n > best);
    if (closer) {
      best = n;
      bestIdx = i;
      push(5, `${n} is closer to 0 (or larger on a tie) → new best.`, { idx: i, bestIdx, best, updated: true });
    } else {
      push(3, `${n} is no closer than ${best}; keep best.`, { idx: i });
    }
  }

  push(7, `Closest number to zero: ${best}.`, { answer: best });
  return steps;
}
