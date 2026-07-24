import type { Step } from "@/core/types";

export interface SplitArrayData {
  nums: number[];
  k: number;
  lo: number;
  hi: number;
  cap: number | null;
  pieces: number | null;
  answer: number | null;
}

export type SplitArrayStep = Step<SplitArrayData>;

/**
 * Binary search the answer (the largest subarray sum). For a candidate cap, greedily
 * count how many contiguous pieces stay within it; if that fits in k splits the cap
 * is feasible and we try smaller. `line` indexes CODE.
 */
export function splitArraySteps(nums: number[], k: number): SplitArrayStep[] {
  const steps: SplitArrayStep[] = [];
  let lo = Math.max(...nums);
  let hi = nums.reduce((a, b) => a + b, 0);

  const snap = (o: Partial<SplitArrayData>): SplitArrayData => ({ nums: [...nums], k, lo, hi, cap: null, pieces: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: SplitArrayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `The answer lies between ${lo} (largest element) and ${hi} (whole array).`, snap({}));

  while (lo < hi) {
    const cap = (lo + hi) >> 1;
    let pieces = 1;
    let sum = 0;
    for (const x of nums) {
      if (sum + x > cap) {
        pieces++;
        sum = 0;
      }
      sum += x;
    }
    push(9, `Cap ${cap} → needs ${pieces} piece(s).`, snap({ cap, pieces }));
    if (pieces <= k) {
      hi = cap;
      push(10, `${pieces} ≤ ${k} — feasible, try smaller (hi = ${hi}).`, snap({ cap, pieces }));
    } else {
      lo = cap + 1;
      push(11, `${pieces} > ${k} — too tight, raise (lo = ${lo}).`, snap({ cap, pieces }));
    }
  }

  push(13, `Minimum largest sum: ${lo}.`, snap({ answer: lo }));
  return steps;
}
