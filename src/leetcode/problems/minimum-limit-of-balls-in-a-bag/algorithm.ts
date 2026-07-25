import type { Step } from "@/core/types";

export interface BallsData {
  nums: number[];
  maxOps: number;
  lo: number;
  hi: number;
  /** penalty (max allowed bag size) being tested */
  mid: number | null;
  /** splits needed per bag under mid */
  perBag: number[];
  ops: number | null;
  feasible: boolean | null;
  answer: number | null;
}

export type BallsStep = Step<BallsData>;

/**
 * The maximum bag size after splitting is monotone: a larger cap needs fewer splits. So binary
 * search the cap and, for each candidate, count the splits ceil(n/cap)−1 every bag requires; the
 * cap is feasible when the total stays within the operation budget. `line` indexes CODE.
 */
export function ballsSteps(nums: number[], maxOps: number): BallsStep[] {
  const steps: BallsStep[] = [];
  let lo = 1;
  let hi = Math.max(...nums);

  const snap = (o: Partial<BallsData>): BallsData => ({ nums, maxOps, lo, hi, mid: null, perBag: [], ops: null, feasible: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BallsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Binary-search the smallest max-bag-size using at most ${maxOps} splits.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const perBag = nums.map((n) => Math.ceil(n / mid) - 1);
    const ops = perBag.reduce((a, b) => a + b, 0);
    const feasible = ops <= maxOps;
    push(5, `Try penalty ${mid}: ${ops} split(s) needed [${perBag.join(", ")}].`, { mid, perBag, ops, feasible });
    if (feasible) {
      hi = mid;
      push(10, `${ops} ≤ ${maxOps} → cap ${mid} works; search lower (hi = ${hi}).`, { mid, perBag, ops, feasible });
    } else {
      lo = mid + 1;
      push(11, `${ops} > ${maxOps} → cap ${mid} too small; raise lo to ${lo}.`, { mid, perBag, ops, feasible });
    }
  }

  push(13, `Minimum possible penalty: ${lo}.`, { answer: lo });
  return steps;
}
