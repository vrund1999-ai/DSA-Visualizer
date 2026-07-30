import type { Step } from "@/core/types";

export interface MaxDistData {
  arrays: number[][];
  activeArr: number | null;
  lo: number;
  hi: number;
  best: number;
  answer: number | null;
}

export type MaxDistStep = Step<MaxDistData>;

/**
 * Maximum Distance in Arrays: each array is sorted, so its smallest is arr[0] and largest arr[last]. Sweep
 * left to right tracking the min-first (lo) and max-last (hi) seen so far in *earlier* arrays; the best gap
 * with the current array is max(|cur.last − lo|, |hi − cur.first|). This guarantees the two endpoints come
 * from different arrays. `line` indexes CODE.
 */
export function maxDistSteps(arrays: number[][]): MaxDistStep[] {
  const steps: MaxDistStep[] = [];
  let lo = arrays[0][0];
  let hi = arrays[0][arrays[0].length - 1];
  let best = 0;

  const snap = (o: Partial<MaxDistData>): MaxDistData => ({
    arrays,
    activeArr: null,
    lo,
    hi,
    best,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxDistData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Start with array 0: lo = ${lo}, hi = ${hi}.`, { activeArr: 0 });

  for (let i = 1; i < arrays.length; i++) {
    const a = arrays[i];
    const first = a[0];
    const last = a[a.length - 1];
    const cand = Math.max(Math.abs(last - lo), Math.abs(hi - first));
    best = Math.max(best, cand);
    push(9, `Array ${i}: max(|${last} − ${lo}|, |${hi} − ${first}|) = ${cand}. Best ${best}.`, { activeArr: i });
    lo = Math.min(lo, first);
    hi = Math.max(hi, last);
  }

  push(13, `Maximum distance = ${best}.`, { answer: best });
  return steps;
}
