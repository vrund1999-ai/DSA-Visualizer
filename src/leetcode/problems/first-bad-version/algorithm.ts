import type { Step } from "@/core/types";

export interface FirstBadInput {
  n: number;
  /** First version that is bad; everything from here on is bad. */
  bad: number;
}

export interface FirstBadData {
  n: number;
  bad: number;
  lo: number;
  hi: number;
  mid: number | null;
  answer: number | null;
}

export type FirstBadStep = Step<FirstBadData>;

/**
 * Versions are good then bad, so this is a lower-bound binary search for the
 * first bad one: if mid is bad, the answer is mid or earlier; if good, it's after
 * mid. `line` indexes CODE.
 */
export function firstBadSteps(input: FirstBadInput): FirstBadStep[] {
  const { n, bad } = input;
  const steps: FirstBadStep[] = [];
  let lo = 1;
  let hi = n;
  let answer: number | null = null;

  const snap = (o: Partial<FirstBadData>): FirstBadData => ({ n, bad, lo, hi, mid: null, answer, ...o });
  const push = (line: number, explanation: string, data: FirstBadData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Search versions 1..${n} for the first bad one.`, snap({}));

  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (mid >= bad) {
      push(4, `Version ${mid} is bad — the first bad is at ${mid} or earlier.`, snap({ mid }));
      hi = mid;
    } else {
      push(5, `Version ${mid} is good — the first bad is after ${mid}.`, snap({ mid }));
      lo = mid + 1;
    }
  }

  answer = lo;
  push(7, `First bad version is ${lo}.`, snap({ mid: null, answer }));
  return steps;
}
