import type { Step } from "@/core/types";

export interface ConcatData {
  nums: number[];
  ans: (number | null)[];
  /** source index i */
  i: number | null;
  done: boolean;
}

export type ConcatStep = Step<ConcatData>;

/**
 * Build ans of length 2n by copying each nums[i] into both slot i and slot i+n.
 * `line` indexes CODE.
 */
export function concatSteps(nums: number[]): ConcatStep[] {
  const steps: ConcatStep[] = [];
  const n = nums.length;
  const ans: (number | null)[] = new Array(2 * n).fill(null);

  const snap = (o: Partial<ConcatData>): ConcatData => ({ nums: [...nums], ans: [...ans], i: null, done: false, ...o });
  const push = (line: number, explanation: string, data: ConcatData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "ans has length 2n; each nums[i] goes to slot i and slot i+n.", snap({}));

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
    push(4, `Copy ${nums[i]} into ans[${i}] and ans[${i + n}].`, snap({ i }));
  }

  push(6, `Result: [${ans.join(", ")}].`, snap({ done: true }));
  return steps;
}
