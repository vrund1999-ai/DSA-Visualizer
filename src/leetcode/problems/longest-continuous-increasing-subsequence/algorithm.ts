import type { Step } from "@/core/types";

export interface LcisData {
  nums: number[];
  i: number | null;
  /** start index of the current increasing run */
  runStart: number;
  cur: number;
  best: number;
  /** [start, end] of the best run seen so far */
  bestRange: [number, number];
  answer: number | null;
}

export type LcisStep = Step<LcisData>;

/**
 * A single pass extends the current increasing run while each element beats its predecessor and resets
 * to length 1 otherwise, tracking the longest run seen. `line` indexes CODE.
 */
export function lcisSteps(nums: number[]): LcisStep[] {
  const steps: LcisStep[] = [];

  const snap = (o: Partial<LcisData>): LcisData => ({ nums, i: null, runStart: 0, cur: nums.length ? 1 : 0, best: nums.length ? 1 : 0, bestRange: [0, 0], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LcisData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (nums.length === 0) {
    push(1, "Empty array → 0.", { answer: 0, bestRange: [0, -1] });
    return steps;
  }

  let best = 1;
  let cur = 1;
  let runStart = 0;
  let bestRange: [number, number] = [0, 0];

  push(2, "Track the current increasing run and the best length seen.", { runStart, cur, best, bestRange });

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur++;
      if (cur > best) {
        best = cur;
        bestRange = [runStart, i];
      }
      push(6, `nums[${i}]=${nums[i]} > ${nums[i - 1]}: extend run to length ${cur} (best ${best}).`, { i, runStart, cur, best, bestRange });
    } else {
      runStart = i;
      cur = 1;
      push(8, `nums[${i}]=${nums[i]} ≤ ${nums[i - 1]}: reset run at index ${i}.`, { i, runStart, cur, best, bestRange });
    }
  }

  push(11, `Longest continuous increasing run: ${best}.`, { answer: best, bestRange, best });
  return steps;
}
