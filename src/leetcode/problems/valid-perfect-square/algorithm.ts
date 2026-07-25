import type { Step } from "@/core/types";

export interface PerfectSquareData {
  num: number;
  lo: number;
  hi: number;
  mid: number | null;
  square: number | null;
  answer: boolean | null;
}

export type PerfectSquareStep = Step<PerfectSquareData>;

/**
 * Since m·m grows monotonically, we binary-search m in [1, num]: compare mid² to num and keep the
 * half that could still contain the exact root. If we ever land on mid² = num it's a perfect square.
 * `line` indexes CODE.
 */
export function perfectSquareSteps(num: number): PerfectSquareStep[] {
  const steps: PerfectSquareStep[] = [];
  let lo = 1;
  let hi = num;

  const snap = (o: Partial<PerfectSquareData>): PerfectSquareData => ({ num, lo, hi, mid: null, square: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PerfectSquareData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Binary-search an integer m with m² = ${num} in [1, ${num}].`);

  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    const square = mid * mid;
    if (square === num) {
      push(5, `${mid}² = ${square} = ${num} → perfect square.`, { mid, square, answer: true });
      return steps;
    }
    if (square < num) {
      push(6, `${mid}² = ${square} < ${num} → search higher (lo = ${mid + 1}).`, { mid, square });
      lo = mid + 1;
    } else {
      push(7, `${mid}² = ${square} > ${num} → search lower (hi = ${mid - 1}).`, { mid, square });
      hi = mid - 1;
    }
  }

  push(9, `No integer squares to ${num} → not a perfect square.`, { answer: false });
  return steps;
}
