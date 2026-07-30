import type { Step } from "@/core/types";

export interface DiMatchData {
  s: string;
  lo: number;
  hi: number;
  i: number | null;
  res: number[];
  answer: number[] | null;
}

export type DiMatchStep = Step<DiMatchData>;

/**
 * At each position we still have the values [lo, hi] unused. An 'I' (must go up next) can safely take the
 * smallest available value lo; a 'D' takes the largest, hi. Either choice leaves a valid range for the
 * rest, and the final leftover value completes the permutation. `line` indexes CODE.
 */
export function diMatchSteps(s: string): DiMatchStep[] {
  const steps: DiMatchStep[] = [];
  let lo = 0;
  let hi = s.length;
  const res: number[] = [];

  const snap = (o: Partial<DiMatchData>): DiMatchData => ({ s, lo, hi, i: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DiMatchData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Values ${0}…${s.length} are unused; take the low end for 'I', the high end for 'D'.`);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      res.push(lo);
      push(5, `'I' at ${i}: take smallest available ${lo}.`, { i });
      lo++;
    } else {
      res.push(hi);
      push(7, `'D' at ${i}: take largest available ${hi}.`, { i });
      hi--;
    }
  }
  res.push(lo);
  push(9, `Append the final value ${lo} → [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
