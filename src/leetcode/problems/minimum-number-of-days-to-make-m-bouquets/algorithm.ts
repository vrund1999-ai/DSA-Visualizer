import type { Step } from "@/core/types";

export interface BouquetsData {
  bloomDay: number[];
  m: number;
  k: number;
  lo: number;
  hi: number;
  mid: number | null;
  /** which flowers have bloomed by `mid` days */
  bloomed: boolean[];
  bouquets: number | null;
  feasible: boolean | null;
  answer: number | null;
}

export type BouquetsStep = Step<BouquetsData>;

/**
 * Binary search the earliest day. A day is feasible if the flowers bloomed by then
 * form at least m runs of k adjacent blooms. Feasibility is monotonic in the day, so
 * we shrink toward the smallest feasible value. `line` indexes CODE.
 */
export function bouquetsSteps(bloomDay: number[], m: number, k: number): BouquetsStep[] {
  const steps: BouquetsStep[] = [];

  const base = (o: Partial<BouquetsData>): BouquetsData => ({ bloomDay: [...bloomDay], m, k, lo: 0, hi: 0, mid: null, bloomed: bloomDay.map(() => false), bouquets: null, feasible: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: BouquetsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (m * k > bloomDay.length) {
    push(1, `Need ${m}×${k} flowers but only ${bloomDay.length} exist → -1.`, base({ answer: -1 }));
    return steps;
  }

  let lo = Math.min(...bloomDay);
  let hi = Math.max(...bloomDay);

  const evaluate = (day: number) => {
    let bouquets = 0;
    let run = 0;
    for (const b of bloomDay) {
      run = b <= day ? run + 1 : 0;
      if (run === k) {
        bouquets++;
        run = 0;
      }
    }
    return bouquets;
  };

  push(3, `Binary search the day between ${lo} and ${hi}.`, base({ lo, hi }));

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const bloomed = bloomDay.map((b) => b <= mid);
    const bouquets = evaluate(mid);
    const feasible = bouquets >= m;
    push(14, `Day ${mid}: ${bouquets} bouquet(s) of ${k} — ${feasible ? "enough" : "not enough"}.`, base({ lo, hi, mid, bloomed, bouquets, feasible }));
    if (feasible) hi = mid;
    else lo = mid + 1;
  }

  const bloomed = bloomDay.map((b) => b <= lo);
  push(16, `Earliest day to make ${m} bouquet(s): ${lo}.`, base({ lo, hi, mid: lo, bloomed, answer: lo }));
  return steps;
}
