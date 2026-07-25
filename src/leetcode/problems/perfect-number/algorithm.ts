import type { Step } from "@/core/types";

export interface PerfectData {
  num: number;
  d: number | null;
  /** the paired divisor num/d when d divides num */
  pair: number | null;
  divisors: number[];
  sum: number;
  answer: boolean | null;
}

export type PerfectStep = Step<PerfectData>;

/**
 * A perfect number equals the sum of its proper divisors. Divisors pair up as d and num/d,
 * so scanning only to √num finds them all; we accumulate both members of each pair
 * (avoiding double-counting a square root). `line` indexes CODE.
 */
export function perfectSteps(num: number): PerfectStep[] {
  const steps: PerfectStep[] = [];
  const divisors: number[] = [];
  let sum = 0;

  const snap = (o: Partial<PerfectData>): PerfectData => ({ num, d: null, pair: null, divisors: [...divisors], sum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PerfectData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (num <= 1) {
    push(1, `${num} ≤ 1, cannot be perfect.`, { answer: false });
    return steps;
  }

  sum = 1;
  divisors.push(1);
  push(2, `1 is a proper divisor of every num > 1 (sum = 1).`);

  for (let d = 2; d * d <= num; d++) {
    push(3, `Test divisor candidate d = ${d}.`, { d });
    if (num % d === 0) {
      sum += d;
      divisors.push(d);
      const pair = num / d;
      if (d !== pair) {
        sum += pair;
        divisors.push(pair);
        push(6, `${d} divides ${num}; add pair ${d} + ${pair} (sum = ${sum}).`, { d, pair });
      } else {
        push(6, `${d} divides ${num}; it's √${num}, add once (sum = ${sum}).`, { d, pair });
      }
    }
  }

  const answer = sum === num;
  push(9, `Sum of proper divisors = ${sum}; ${answer ? "equals" : "≠"} ${num} → ${answer}.`, { answer });
  return steps;
}
