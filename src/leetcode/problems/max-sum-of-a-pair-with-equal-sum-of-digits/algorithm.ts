import type { Step } from "@/core/types";

export interface MaxSumData {
  nums: number[];
  idx: number | null;
  digitSum: number | null;
  /** digitSum -> largest value seen with that digit sum */
  best: [number, number][];
  /** the paired value we just combined with, if any */
  partner: number | null;
  ans: number;
  answer: number | null;
}

export type MaxSumStep = Step<MaxSumData>;

const dsum = (n: number) => {
  let s = 0;
  let x = n;
  while (x > 0) { s += x % 10; x = Math.floor(x / 10); }
  return s;
};

/**
 * Two numbers can pair only if their digit sums match, and for any digit-sum bucket the best
 * pair uses the two largest members. So we keep just the largest value seen per bucket and,
 * on each new number, try pairing it with that stored maximum. `line` indexes CODE.
 */
export function maxSumSteps(input: number[]): MaxSumStep[] {
  const steps: MaxSumStep[] = [];
  const best = new Map<number, number>();
  let ans = -1;

  const snap = (o: Partial<MaxSumData>): MaxSumData => ({ nums: input, idx: null, digitSum: null, best: [...best.entries()], partner: null, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Keep the largest number seen per digit-sum bucket; pair each new number with it.");

  for (let i = 0; i < input.length; i++) {
    const n = input[i];
    const ds = dsum(n);
    push(4, `${n} has digit sum ${ds}.`, { idx: i, digitSum: ds });
    if (best.has(ds)) {
      const partner = best.get(ds)!;
      ans = Math.max(ans, n + partner);
      push(6, `Bucket ${ds} already holds ${partner}; pair sum ${n + partner} (best ${ans}).`, { idx: i, digitSum: ds, partner });
    }
    if (n > (best.get(ds) ?? 0)) {
      best.set(ds, n);
      push(8, `${n} is the new max for bucket ${ds}.`, { idx: i, digitSum: ds });
    }
  }

  push(10, `Maximum equal-digit-sum pair sum: ${ans}.`, { answer: ans });
  return steps;
}
