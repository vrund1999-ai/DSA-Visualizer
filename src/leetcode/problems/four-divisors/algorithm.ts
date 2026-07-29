import type { Step } from "@/core/types";

export interface FourDivData {
  nums: number[];
  idx: number | null;
  divisors: number[];
  /** whether the current number has exactly four divisors */
  qualifies: boolean | null;
  added: number | null;
  total: number;
  answer: number | null;
}

export type FourDivStep = Step<FourDivData>;

/**
 * Divisors pair as d and n/d, so scanning to √n finds them all. A number with exactly four divisors
 * contributes their sum to the answer; others are ignored. `line` indexes CODE.
 */
export function fourDivSteps(nums: number[]): FourDivStep[] {
  const steps: FourDivStep[] = [];
  let total = 0;

  const snap = (o: Partial<FourDivData>): FourDivData => ({ nums, idx: null, divisors: [], qualifies: null, added: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FourDivData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Sum the divisors of every number that has exactly four of them.");

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const divs = new Set<number>([1, n]);
    for (let d = 2; d * d <= n; d++) if (n % d === 0) { divs.add(d); divs.add(n / d); }
    const divisors = [...divs].sort((a, b) => a - b);
    const qualifies = divisors.length === 4;
    if (qualifies) {
      const added = divisors.reduce((a, b) => a + b, 0);
      total += added;
      push(7, `${n} has 4 divisors {${divisors.join(", ")}} → add ${added} (total ${total}).`, { idx: i, divisors, qualifies, added });
    } else {
      push(6, `${n} has ${divisors.length} divisors {${divisors.join(", ")}} → skip.`, { idx: i, divisors, qualifies });
    }
  }

  push(9, `Sum of divisors of four-divisor numbers: ${total}.`, { answer: total });
  return steps;
}
