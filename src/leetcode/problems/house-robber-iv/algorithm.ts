import type { Step } from "@/core/types";

export interface RobberIVData {
  nums: number[];
  k: number;
  lo: number;
  hi: number;
  /** capability being tested */
  mid: number | null;
  /** indices greedily robbed under mid */
  robbed: number[];
  count: number | null;
  feasible: boolean | null;
  answer: number | null;
}

export type RobberIVStep = Step<RobberIVData>;

/**
 * The capability (max amount stolen from any one house) is monotonic: a larger cap only makes
 * robbing k non-adjacent houses easier. So we binary-search the cap and test feasibility greedily
 * — walk left to right taking every affordable house and skipping its neighbor. `line` indexes CODE.
 */
export function robberIVSteps(nums: number[], k: number): RobberIVStep[] {
  const steps: RobberIVStep[] = [];
  let lo = Math.min(...nums);
  let hi = Math.max(...nums);

  const snap = (o: Partial<RobberIVData>): RobberIVData => ({ nums, k, lo, hi, mid: null, robbed: [], count: null, feasible: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RobberIVData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const canRob = (cap: number) => {
    const robbed: number[] = [];
    for (let i = 0; i < nums.length; i++) if (nums[i] <= cap) { robbed.push(i); i++; }
    return { feasible: robbed.length >= k, count: robbed.length, robbed };
  };

  push(1, `Binary-search the smallest capability that still lets us rob ${k} non-adjacent houses.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const { feasible, count, robbed } = canRob(mid);
    push(5, `Test cap ${mid}: greedily rob ${count} house(s) ≤ ${mid}.`, { mid, robbed, count, feasible });
    if (feasible) {
      hi = mid;
      push(10, `${count} ≥ ${k} → cap ${mid} works; search lower (hi = ${hi}).`, { mid, robbed, count, feasible });
    } else {
      lo = mid + 1;
      push(11, `${count} < ${k} → cap ${mid} too small; raise lo to ${lo}.`, { mid, robbed, count, feasible });
    }
  }

  push(13, `Minimum capability: ${lo}.`, { answer: lo });
  return steps;
}
