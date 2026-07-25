import type { Step } from "@/core/types";

export interface DivByKData {
  nums: number[];
  k: number;
  pos: number | null;
  sum: number;
  /** remainder buckets, count per residue 0..k-1 */
  count: number[];
  /** residue touched this step */
  residue: number | null;
  added: number;
  ans: number;
  answer: number | null;
}

export type DivByKStep = Step<DivByKData>;

/**
 * Two prefix sums with the same remainder mod k bound a subarray whose sum is
 * divisible by k. Count how many earlier prefixes shared each running remainder,
 * seeding residue 0 with the empty prefix. `line` indexes CODE.
 */
export function divByKSteps(nums: number[], k: number): DivByKStep[] {
  const steps: DivByKStep[] = [];
  const count = new Array(k).fill(0);
  count[0] = 1;
  let sum = 0;
  let ans = 0;

  const snap = (pos: number, o: Partial<DivByKData>): DivByKData => ({ nums: [...nums], k, pos, sum, count: [...count], residue: null, added: 0, ans, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<DivByKData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, `Count subarrays divisible by ${k} via prefix remainders (seed 0→1).`, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = ((sum % k) + k) % k;
    const added = count[r];
    ans += added;
    push(7, `Prefix sum ${sum}, remainder ${r} — seen ${added}× before, +${added}.`, i, { residue: r, added });
    count[r]++;
  }

  push(10, `Subarrays divisible by ${k}: ${ans}.`, -1, { answer: ans });
  return steps;
}
