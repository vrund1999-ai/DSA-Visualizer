import type { Step } from "@/core/types";

export interface NumSubseqData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  /** sum nums[lo] + nums[hi] at this step */
  pairSum: number | null;
  /** 2^(hi-lo) added when the pair fits */
  added: number | null;
  count: number;
  answer: number | null;
}

export type NumSubseqStep = Step<NumSubseqData>;

const MOD = 1_000_000_007;

/**
 * Only the min and max of a subsequence matter, so we sort and use two pointers. When nums[lo]+
 * nums[hi] ≤ target, every subset of the elements strictly between them can join nums[lo] as the
 * min — that's 2^(hi−lo) subsequences — then we advance lo; otherwise the max is too big, so we
 * shrink hi. `line` indexes CODE.
 */
export function numSubseqSteps(input: number[], target: number): NumSubseqStep[] {
  const steps: NumSubseqStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  const n = nums.length;
  const pow = new Array(n).fill(1);
  for (let i = 1; i < n; i++) pow[i] = (pow[i - 1] * 2) % MOD;

  let lo = 0;
  let hi = n - 1;
  let count = 0;

  const snap = (o: Partial<NumSubseqData>): NumSubseqData => ({ nums, target, lo, hi, pairSum: null, added: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NumSubseqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Sort: [${nums.join(", ")}]. Two pointers on min and max (target ${target}).`);

  while (lo <= hi) {
    const pairSum = nums[lo] + nums[hi];
    if (pairSum <= target) {
      const added = pow[hi - lo];
      count = (count + added) % MOD;
      push(7, `${nums[lo]} + ${nums[hi]} = ${pairSum} ≤ ${target} → +2^${hi - lo} = ${added} (count ${count}). lo++`, { pairSum, added });
      lo++;
    } else {
      push(10, `${nums[lo]} + ${nums[hi]} = ${pairSum} > ${target} → max too big, hi--`, { pairSum });
      hi--;
    }
  }

  push(13, `Number of valid subsequences: ${count}.`, { answer: count });
  return steps;
}
