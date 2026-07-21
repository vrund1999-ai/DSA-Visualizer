import type { Step } from "@/core/types";

export interface KokoInput {
  piles: number[];
  h: number;
}

export interface KokoData {
  piles: number[];
  h: number;
  lo: number;
  hi: number;
  mid: number | null;
  hours: number | null;
  answer: number | null;
}

export type KokoStep = Step<KokoData>;

/**
 * The answer (eating speed) is monotonic: faster speeds finish in fewer hours,
 * so we binary-search the smallest speed whose total hours ≤ h. `line` indexes
 * CODE.
 */
export function kokoSteps(input: KokoInput): KokoStep[] {
  const { piles, h } = input;
  const steps: KokoStep[] = [];
  let lo = 1;
  let hi = Math.max(...piles);
  let answer: number | null = null;

  const hoursAt = (speed: number) => piles.reduce((a, p) => a + Math.ceil(p / speed), 0);
  const snap = (o: Partial<KokoData>): KokoData => ({
    piles: [...piles],
    h,
    lo,
    hi,
    mid: null,
    hours: null,
    answer,
    ...o,
  });
  const push = (line: number, explanation: string, data: KokoData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Search eating speeds in [1, ${hi}] for the slowest that finishes within ${h} hours.`, snap({}));

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const hours = hoursAt(mid);
    if (hours <= h) {
      push(5, `Speed ${mid} needs ${hours} h ≤ ${h} — fast enough, try slower (hi = ${mid}).`, snap({ mid, hours }));
      hi = mid;
    } else {
      push(6, `Speed ${mid} needs ${hours} h > ${h} — too slow, go faster (lo = ${mid + 1}).`, snap({ mid, hours }));
      lo = mid + 1;
    }
  }

  answer = lo;
  push(8, `Minimum eating speed is ${lo} bananas/hour.`, snap({ mid: null, hours: hoursAt(lo), answer }));
  return steps;
}
