import type { Step } from "@/core/types";

export interface ArrangeCoinsData {
  n: number;
  lo: number;
  hi: number;
  k: number | null;
  /** coins needed for k complete rows */
  need: number | null;
  answer: number | null;
}

export type ArrangeCoinsStep = Step<ArrangeCoinsData>;

/**
 * The first k rows need k(k+1)/2 coins, which grows monotonically, so we binary
 * search the largest k whose triangular number does not exceed n. `line` indexes
 * CODE.
 */
export function arrangeCoinsSteps(n: number): ArrangeCoinsStep[] {
  const steps: ArrangeCoinsStep[] = [];
  let lo = 0;
  let hi = n;

  const snap = (o: Partial<ArrangeCoinsData>): ArrangeCoinsData => ({ n, lo, hi, k: null, need: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: ArrangeCoinsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Binary search the number of complete rows from ${n} coins.`, snap({}));

  while (lo <= hi) {
    const k = (lo + hi) >> 1;
    const need = (k * (k + 1)) / 2;
    if (need === n) {
      push(5, `${k} rows need exactly ${need} coins → answer ${k}.`, snap({ k, need, answer: k }));
      return steps;
    } else if (need < n) {
      push(6, `${k} rows need ${need} ≤ ${n} — try more rows (lo = ${k + 1}).`, snap({ k, need }));
      lo = k + 1;
    } else {
      push(7, `${k} rows need ${need} > ${n} — too many (hi = ${k - 1}).`, snap({ k, need }));
      hi = k - 1;
    }
  }

  push(9, `Largest number of complete rows: ${hi}.`, snap({ answer: hi }));
  return steps;
}
