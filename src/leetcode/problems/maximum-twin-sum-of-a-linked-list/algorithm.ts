import type { Step } from "@/core/types";

export interface TwinSumData {
  vals: number[];
  l: number | null;
  r: number | null;
  twin: number | null;
  best: number;
  answer: number | null;
}

export type TwinSumStep = Step<TwinSumData>;

/**
 * In a list of length n, node i's twin is node n−1−i, so twins are symmetric about the middle. Two
 * pointers converging from both ends visit each twin pair once; the maximum of their sums is the
 * answer. `line` indexes CODE.
 */
export function twinSumSteps(vals: number[]): TwinSumStep[] {
  const steps: TwinSumStep[] = [];
  let best = 0;

  const snap = (o: Partial<TwinSumData>): TwinSumData => ({ vals, l: null, r: null, twin: null, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TwinSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Twin of index i is n−1−i; converge two pointers and track the max pair sum.");

  let l = 0;
  let r = vals.length - 1;
  while (l < r) {
    const twin = vals[l] + vals[r];
    best = Math.max(best, twin);
    push(5, `Twin (${vals[l]}, ${vals[r]}) = ${twin} (best ${best}).`, { l, r, twin });
    l++;
    r--;
  }

  push(8, `Maximum twin sum: ${best}.`, { answer: best });
  return steps;
}
