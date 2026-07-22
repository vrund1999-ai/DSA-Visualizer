import type { Step } from "@/core/types";

export interface SqrtData {
  x: number;
  lo: number;
  hi: number;
  mid: number | null;
  midSq: number | null;
  ans: number;
}

export type SqrtStep = Step<SqrtData>;

/**
 * Binary-search the integer square root: mid² ≤ x means mid is a valid answer and
 * a bigger one might exist (go right); otherwise mid is too big (go left). `line`
 * indexes CODE.
 */
export function sqrtSteps(x: number): SqrtStep[] {
  const steps: SqrtStep[] = [];
  let lo = 0;
  let hi = x;
  let ans = 0;

  const snap = (o: Partial<SqrtData>): SqrtData => ({ x, lo, hi, mid: null, midSq: null, ans, ...o });
  const push = (line: number, explanation: string, data: SqrtData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Binary-search the largest m with m² ≤ ${x}.`, snap({}));

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const midSq = mid * mid;
    if (midSq <= x) {
      ans = mid;
      push(5, `${mid}² = ${midSq} ≤ ${x} — ${mid} works; try larger (lo = ${mid + 1}).`, snap({ mid, midSq, ans }));
      lo = mid + 1;
    } else {
      push(6, `${mid}² = ${midSq} > ${x} — too big; go smaller (hi = ${mid - 1}).`, snap({ mid, midSq }));
      hi = mid - 1;
    }
  }

  push(8, `⌊√${x}⌋ = ${ans}.`, snap({ mid: null }));
  return steps;
}
