import type { Step } from "@/core/types";

export interface ShipData {
  weights: number[];
  days: number;
  lo: number;
  hi: number;
  cap: number | null;
  need: number | null;
  answer: number | null;
}

export type ShipStep = Step<ShipData>;

/**
 * Binary search on the ship capacity. The lower bound is the heaviest package
 * (it must fit); the upper bound is the total weight (one day). For a candidate
 * capacity, greedily count how many days it needs; shrink or grow the range
 * accordingly. `line` indexes CODE.
 */
export function shipSteps(weights: number[], days: number): ShipStep[] {
  const steps: ShipStep[] = [];
  let lo = Math.max(...weights);
  let hi = weights.reduce((a, b) => a + b, 0);

  const snap = (o: Partial<ShipData>): ShipData => ({ weights: [...weights], days, lo, hi, cap: null, need: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: ShipData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Capacity is between ${lo} (heaviest box) and ${hi} (all in one day).`, snap({}));

  while (lo < hi) {
    const cap = (lo + hi) >> 1;
    let need = 1;
    let load = 0;
    for (const w of weights) {
      if (load + w > cap) {
        need++;
        load = 0;
      }
      load += w;
    }
    push(9, `Capacity ${cap} → needs ${need} day(s).`, snap({ cap, need }));
    if (need <= days) {
      hi = cap;
      push(10, `${need} ≤ ${days} — ${cap} works, try smaller (hi = ${hi}).`, snap({ cap, need }));
    } else {
      lo = cap + 1;
      push(11, `${need} > ${days} — too small, raise (lo = ${lo}).`, snap({ cap, need }));
    }
  }

  push(13, `Minimum capacity: ${lo}.`, snap({ answer: lo }));
  return steps;
}
