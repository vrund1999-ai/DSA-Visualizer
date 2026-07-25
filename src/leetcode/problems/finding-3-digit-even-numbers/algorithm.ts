import type { Step } from "@/core/types";

export interface EvenNumData {
  digits: number[];
  have: number[];
  /** the candidate 3-digit even number under test */
  candidate: number | null;
  /** whether the candidate's digit multiset fits `have` */
  fits: boolean | null;
  res: number[];
  answer: number[] | null;
}

export type EvenNumStep = Step<EvenNumData>;

const tally = (ds: number[]): number[] => {
  const t = new Array(10).fill(0);
  for (const d of ds) t[d]++;
  return t;
};

/**
 * A 3-digit even number is formable iff its digit multiset is contained in the available
 * digits. Rather than permuting, we enumerate every even value 100..998 and keep those whose
 * per-digit demand never exceeds supply — giving sorted, distinct results directly. To keep the
 * animation short we only snapshot candidates that fit (plus a few near misses). `line` indexes CODE.
 */
export function evenNumSteps(digits: number[]): EvenNumStep[] {
  const steps: EvenNumStep[] = [];
  const have = tally(digits);
  const res: number[] = [];

  const snap = (o: Partial<EvenNumData>): EvenNumData => ({ digits, have, candidate: null, fits: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EvenNumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Tally available digits, then test each even value 100..998 for a fitting multiset.");

  let sinceSnapshot = 0;
  for (let n = 100; n <= 998; n += 2) {
    const need = tally([Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10]);
    const fits = need.every((c, d) => c <= have[d]);
    if (fits) {
      res.push(n);
      push(6, `${n}: every digit is available → keep it.`, { candidate: n, fits: true });
      sinceSnapshot = 0;
    } else if (sinceSnapshot >= 60) {
      // Occasionally show a rejection so long empty stretches aren't silent.
      push(5, `${n}: needs a digit we don't have → skip.`, { candidate: n, fits: false });
      sinceSnapshot = 0;
    } else {
      sinceSnapshot++;
    }
  }

  push(8, `Formable 3-digit even numbers: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
