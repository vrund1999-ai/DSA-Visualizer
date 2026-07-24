import type { Highlight, Step } from "@/core/types";

export interface MaxOnesData {
  nums: number[];
  i: number | null;
  run: number;
  best: number;
  runStart: number;
}

export type MaxOnesStep = Step<MaxOnesData>;

/**
 * One pass tracking the current run of 1s: each 1 extends it, each 0 resets it to
 * zero. The longest run seen is the answer. `line` indexes CODE.
 */
export function maxOnesSteps(nums: number[]): MaxOnesStep[] {
  const steps: MaxOnesStep[] = [];
  let run = 0;
  let best = 0;
  let runStart = 0;

  const snap = (o: Partial<MaxOnesData>): MaxOnesData => ({ nums: [...nums], i: null, run, best, runStart, ...o });
  const push = (line: number, explanation: string, data: MaxOnesData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, "Track the current run of 1s; keep the longest.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (run === 0) runStart = i;
      run++;
    } else {
      run = 0;
      runStart = i + 1;
    }
    if (run > best) best = run;
    const hl: Highlight[] = [];
    for (let j = runStart; j < runStart + run; j++) hl.push({ ref: j, role: "active" });
    push(4, nums[i] === 1 ? `1 extends the run to ${run} (best ${best}).` : `0 resets the run.`, snap({ i }), [...hl, { ref: i, role: nums[i] === 1 ? "current" : "swapped" }]);
  }

  push(6, `Longest run of 1s is ${best}.`, snap({ i: null }), []);
  return steps;
}
